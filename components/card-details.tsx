"use client";

import { useGlobalsVariables } from "@/app/services/hooks/useGlobalsVariables";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, FileWarningIcon, Map, TimerIcon } from "lucide-react";

type Props = {
  coloObs: string;
  variantButton: "link" | "default" | "destructive" | "outline" | "secondary" | "ghost" | null | undefined;
};

export default function CardDetails({ coloObs, variantButton }: Props) {
  const { onOpenModal, onOpenModalViewMap } = useGlobalsVariables();

  return (
    <>
      <div className="w-full">
        <Card>
          <CardHeader>
            <CardTitle>Informações adicionais</CardTitle>
            <CardDescription>Fique atento a essas informações:</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="flex flex-col gap-2 items-start justify-start">
              <li className="flex items-center gap-2">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4" />
                  <span className="font-bold">Data:</span>
                </div>

                <p className="line-clamp-1">
                  21/04/2024
                </p>
              </li>

              <li className="flex items-center gap-2">
                <div className="flex items-center gap-2">
                  <TimerIcon className="w-4" />
                  <span className="font-bold">Horário:</span>
                </div>

                <p className="line-clamp-1">
                  11:00 as 17:00
                </p>
              </li>

              <li className="relative flex flex-col justify-start items-start gap-2">
                <div className="flex items-center gap-2">
                  <Map className="w-4" />
                  <span className="font-bold">Endereço:</span>
                </div>

                <p
                  className="text-start cursor-pointer"
                  onClick={onOpenModalViewMap}
                >
                  R. Desiderio Ferreira, 770 - Ressaca, Itapecericca da Serra - SP, 06887-220, Brasil
                </p>
              </li>

              <li className="flex flex-col gap-2 items-start">
                <div className="flex items-center gap-2">
                  <FileWarningIcon className="w-4" />
                  <span className="font-bold">Importante:</span>
                </div>

                <p>
                  Caso o convidado queira consumir bebidas alcoólicas, o mesmo ficará por sua responsabilidade de levar.
                </p>

                <p className={`text-xs ${coloObs}`}>
                  Terá dois aniversários acontecendo simultaneamente!
                </p>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button
              className="uppercase w-full"
              variant={variantButton}
              size="lg"
              onClick={onOpenModal}
            >
              Confirmar presença
            </Button>
          </CardFooter>
        </Card>
      </div>
    </>
  )
} 