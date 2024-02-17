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

export default function FormConfirmPresenca() {
  const { onCloseModal } = useGlobalsVariables();
  const pathName = usePathname();
  const convertPathName = pathName?.replace("/", "");

  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    mode: "onChange",
  });

  function onSubmit(data: ProfileFormValues) {
    const ref = collection(db, 'guests');

    addDoc(ref, {
      username: data?.username,
      isListaJoao: convertPathName === 'Joao' ? true : false,
    })
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

          <Button type="submit">Confirmar</Button>
        </form>
      </Form>
    </>
  )
}