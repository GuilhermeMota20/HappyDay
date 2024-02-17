"use client";

import Apresentation from "../../../../components/apresentation";
import CardDetails from "../../../../components/card-details";
import Header from "../../../../components/header";

export default function PageInviteFernanda() {
  return (
    <>
      <main className="w-full h-full md:h-screen flex flex-col items-center justify-center p-2 sm:p-4 md:p-8 bg-indigo-50 z-20">
        <Header isChildrenHappyDay={false} />

        <section className="w-full max-w-[1200px] h-full flex flex-col gap-0 md:flex-row items-center justify-between mt-28 md:mt-0 md:gap-4 z-30">
          <Apresentation
            name="Fernanda"
            styleTitle="text-pink-800"
            styleName="text-pink-300"
          />
          <div className="block md:hidden w-[300px] h-[300px] mt-4 brightness-90 bg-[url('/images/flor.png')] bg-no-repeat bg-cover  z-20" />
          <CardDetails
            coloObs="text-pink-600"
            variantButton="destructive"
          />
        </section>
      </main>
    </>
  )
}