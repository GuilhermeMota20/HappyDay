"use client";

import { useGuestsJoao } from "@/app/services/hooks/useGuestsJoao";
import HeaderDashboard from "@/components/header-dashboard";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import BarLoader from "react-spinners/BarLoader";

export default function PageListGuestFernanda() {
  const { isLoading, error, guestsFernanda } = useGuestsJoao();

  return (
    <>
      <main className="w-full h-screen flex flex-col gap-4 items-center justify-center p-2 sm:p-4 md:p-8 bg-indigo-50 z-20">
        <HeaderDashboard />

        <div className="w-full max-w-[1200px] gap-8 mt-20">
          <Card>
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

                <div className="w-full border border-dashed flex flex-col items-center justify-center text-center">
                  {guestsFernanda?.map((item, index) => (
                    <li key={index} className="grid grid-cols-2 gap-2" >
                      {item?.username}

                      <span>#{item?.username}</span>
                    </li>
                  ))}
                </div>

                {guestsFernanda?.length === 0 && error && (
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
              <p>Total de pessoas confirmadas: {guestsFernanda?.length}</p>
            </CardFooter>
          </Card>
        </div>
      </main>
    </>
  )
}