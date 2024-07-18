"use client";

import { InfosInviteAgnes } from "@/app/types/types";
import { useGlobalsVariables } from "@/app/services/hooks/useGlobalsVariables";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, FileWarningIcon, Map, TimerIcon } from "lucide-react";

type Props = {
  infos: InfosInviteAgnes;
  variantButton: "link" | "pink" | "yellow" | "default" | "destructive" | "outline" | "secondary" | "ghost" | null | undefined;
};

export default function CardDetails({ infos, variantButton }: Props) {
  const { onOpenModal, onOpenModalViewMap } = useGlobalsVariables();

  return (
    <>
      <div className="w-full">
        <Card>
          <CardHeader>
            <CardTitle>{infos.cardDatils.title}</CardTitle>
            <CardDescription>{infos.cardDatils.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="flex flex-col gap-2 items-start justify-start">
              <li className="flex items-center gap-2">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4" />
                  <span className="font-bold">Data:</span>
                </div>

                <p className="line-clamp-1">
                  {infos.cardDatils.data}
                </p>
              </li>

              <li className="flex items-center gap-2">
                <div className="flex items-center gap-2">
                  <TimerIcon className="w-4" />
                  <span className="font-bold">Horário:</span>
                </div>

                <p className="line-clamp-1">
                  {infos.cardDatils.horario}
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
                  {infos.cardDatils.endereco}
                </p>
              </li>

              {infos.cardDatils.informs ? (
                <li className="flex flex-col gap-2 items-start">
                  <div className="flex items-center gap-2">
                    <FileWarningIcon className="w-4" />
                    <span className="font-bold">Importante:</span>
                  </div>

                  <p>{infos.cardDatils.informs}</p>
                </li>
              ) : null}
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