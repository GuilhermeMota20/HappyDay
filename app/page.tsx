"use client";

import CardDashboard from "@/components/card-dashboard";
import HeaderDashboard from "@/components/header-dashboard";
import { Button } from "@/components/ui/button";
import { Copy, CornerDownRight, Lock } from "lucide-react";
import Link from "next/link";

export default function RootPage() {
  return (
    <>
      <main className="w-full h-screen flex flex-col gap-4 items-center justify-center p-2 sm:p-4 md:p-8 bg-indigo-50 z-20">
        <HeaderDashboard />

        <div className="w-full max-w-[1200px] flex flex-col items-start justify-start gap-4 mt-20 text-xs">
          <div className="flex items-center gap-2">
            <span>Clique em </span>
            <span><Copy className="h-4 w-4" /></span>
            <span>para copiar a url do convite.</span>
          </div>

          <div className="flex items-center gap-2">
            <span>Clique em </span>
            <span><CornerDownRight className="h-4 w-4" /></span>
            <span>para ir a tela do convite.</span>
          </div>

          <div className="flex items-center gap-2">
            <span>Clique em </span>
            <span><Lock className="h-4 w-4" /></span>
            <span>para acessar a listagem de convidados confirmados.</span>
          </div>
        </div>

        <div className="w-full max-w-[1200px] flex-grow grid grid-cols-1 md:grid-cols-2 gap-4">
          <CardDashboard title="Fernanda" />
          <CardDashboard title="Joao" />
        </div>

        <footer className="w-full h-12 flex items-center justify-center">
          <div className="w-full max-w-[1200px] h-full flex items-center justify-end">
            <Link href="https://gmota.vercel.app/" >
              <Button variant="ghost">
                Make by: gmota - 2024
              </Button>
            </Link>
          </div>
        </footer>
      </main>
    </>
  )
}