"use client"

import { db } from "@/app/services/Firebase"
import { useGlobalsVariables } from "@/app/services/hooks/useGlobalsVariables"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { addDoc, collection } from "firebase/firestore"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { toast } from "sonner"

import { z } from "zod"

const profileFormSchema = z.object({
  username: z
    .string()
    .min(3, {
      message: "Seu nome deve conter no minimo tres caracteres.",
    })
    .max(30, {
      message: "Seu nome deve conter no maximo 30 caracteres.",
    }),
});

type ProfileFormValues = z.infer<typeof profileFormSchema>;

type VariantType = "link" | "pink" | "yellow" | "default" | "destructive" | "outline" | "secondary" | "ghost" | null | undefined

export default function FormConfirmPresenca() {
  const [variant, setVariant] = useState<VariantType>("default");
  const { onCloseModal } = useGlobalsVariables();
  const pathName = usePathname();
  const convertPathName = pathName?.replace("/", "");

  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    mode: "onChange",
  });

  useEffect(() => {
    if (convertPathName === "Agnes") {
      setVariant("yellow");
    };

    if (convertPathName === "Joao") {
      setVariant("default");
    };

    if (convertPathName === "Fernanda") {
      setVariant("pink");
    };
  }, [convertPathName]);

  function onSubmit(data: ProfileFormValues) {
    const ref = collection(db, 'guests');

    let formData = {};
    if (convertPathName === "Agnes") {
      formData = {
        username: data?.username,
        isListAgnes: true,
        isListaJoao: false,
        isListNanda: false,
      };
    };

    if (convertPathName === "Joao") {
      formData = {
        username: data?.username,
        isListaJoao: true,
        isListAgnes: false,
        isListNanda: false,
      };
    };

    if (convertPathName === "Fernanda") {
      formData = {
        username: data?.username,
        isListNanda: true,
        isListaJoao: false,
        isListAgnes: false,
      };
    };

    addDoc(ref, formData)
      .then(() => {
        toast.success("Presença confirmada com sucesso!");
        onCloseModal();
      })
      .catch(() => toast.error("Nao foi possivel confirmar sua presença! Por favor, tente novamente mais tarde."));
  };

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nome completo</FormLabel>
                <FormControl>
                  <Input placeholder="Digite seu nome completo" {...field} />
                </FormControl>
                <FormDescription>
                  Seu nome ficara disponivel em uma lista para que os organizadores possam ter ciencia de quem estara presente antecipadamente.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            variant={variant}
            type="submit"
          >
            Confirmar
          </Button>
        </form>
      </Form>
    </>
  )
}