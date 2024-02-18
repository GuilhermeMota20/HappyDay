"use client";

import { Check, Copy, CornerDownRight, Link2, ListTodoIcon, Lock, ReceiptText } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { useOrigin } from "@/app/services/hooks/useOrigin";
import Link from "next/link";
import { useGlobalsVariables } from "@/app/services/hooks/useGlobalsVariables";

type Props = {
  title: string;
};

export default function CardDashboard({ title }: Props) {
  const { onOpenModalPinAccess } = useGlobalsVariables();

  const [copied, setCopied] = useState(false);
  const origin = useOrigin();

  const url = `${origin}/${title}`;

  const onCopy = () => {
    navigator.clipboard.writeText(url);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  return (
    <>
      <Card className="max-h-72 relative">
        <CardHeader className="relative">
          <CardTitle>{title}</CardTitle>
          <CardDescription>{`Central de funcionalidades para ${title}:`}</CardDescription>

          <div className="absolute top-4 right-8 p-2 rounded-full border flex items-center justify-center">
            <Lock className="w-4 h-4" />
          </div>
        </CardHeader>
        <CardContent>
          <ul className="w-full flex flex-col gap-4">
            <li className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <ReceiptText className="h-4 w-4" />
                <p>Convite</p>
              </div>

              <div className="flex items-center justify-center gap-2">
                <Button variant="ghost" onClick={onCopy} className="flex items-center justify-center gap-2">
                  <span className="text-xs hidden sm:block">Copiar link</span>

                  {copied ? (
                    <Check className="h-4 w-4" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </Button>

                <Link href={url} >
                  <Button variant="ghost" onClick={onCopy} className="flex items-center justify-center gap-2">
                    <CornerDownRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </li>

            <li className="flex items-center justify-between gap-2 transition hover:bg-background/85">
              <div className="flex items-center gap-2">
                <ListTodoIcon className="h-4 w-4" />
                <p className="line-clamp-1">Lista de convidados confirmados</p>
              </div>

              <Button variant="ghost" onClick={() => onOpenModalPinAccess(title)} className="flex items-center justify-center gap-2">
                <span className="text-xs hidden sm:block">Ir para lista</span>
                <Lock className="h-4 w-4" />
              </Button>
            </li>
          </ul>
        </CardContent>
        <CardFooter className="absolute bottom-0 left-0 w-full border border-top py-2 px-6">
          <span className="text-xs">{`Dashboard de ${title}`}</span>
        </CardFooter>
      </Card>
    </>
  )
}