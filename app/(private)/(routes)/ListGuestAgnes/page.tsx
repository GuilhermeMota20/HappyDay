"use client";

import { useGuestsAgnes } from "@/app/services/hooks/useGuestsAgnes";
import HeaderDashboard from "@/components/header-dashboard";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Link from "next/link";
import BarLoader from "react-spinners/BarLoader";

export default function PageListGuestAgnes() {
  const { isLoading, error, guestsAgnes } = useGuestsAgnes();

  return (
    <>
      <main className="w-full h-screen flex flex-col gap-4 items-center justify-start p-2 sm:p-4 md:p-8 bg-indigo-50 z-20">
        <HeaderDashboard />

        <div className="w-full max-w-[1200px] gap-8 mt-20">
          <span className="text-xs">Para voltar basta clicar na logo (HappyDay), acima.</span>

          <Card className="max-h-[80vh] overflow-auto">
            <CardHeader>
              <CardTitle>Pessoas que confirmaram presença</CardTitle>
              <CardDescription>Aqui você pode acompanhar todas as pessoas que confirmaram estar presente comemorando com você neste dia tão especial:</CardDescription>
            </CardHeader>

            <CardContent>
              <ul className="flex flex-col gap-2 items-start justify-start">
                {isLoading && (
                  <div className="w-full h-72 border border-dashed flex flex-col items-center justify-center text-center">
                    <BarLoader color="#d7363b" />
                  </div>
                )}

                <div className={cn(
                  "hidden w-full rounded-md p-4 border border-dashed",
                  guestsAgnes?.length && "flex flex-col items-start justify-center text-center"
                )}>
                  {guestsAgnes?.map((item, index) => (
                    <li key={index} className="w-full grid grid-cols-2 gap-4" >
                      <span className="text-start">#{index + 1}</span>
                      <span className="text-start line-clamp-1">{item?.username}</span>
                    </li>
                  ))}
                </div>

                {guestsAgnes?.length === 0 && error && (
                  <Link href="/">
                    <div className="w-full h-72 border border-dashed flex flex-col items-center justify-center text-center hover:bg-slate-200/60">
                      <p>Ainda nao houve nenhuma confirmacao, volte mais tarde.</p>
                      <span className="text-xs">Clique na logo acima (HappyDay), para volta a tela inicial, ou clique aqui.</span>
                    </div>
                  </Link>
                )}
              </ul>
            </CardContent>

            <CardFooter className="border-t pt-6">
              <p>Total de pessoas confirmadas: {guestsAgnes?.length}</p>
            </CardFooter>
          </Card>
        </div>
      </main>
    </>
  )
}