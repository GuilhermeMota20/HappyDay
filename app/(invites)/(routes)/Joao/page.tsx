"use client";

import Apresentation from "../../../../components/apresentation";
import CardDetails from "../../../../components/card-details";
import Header from "../../../../components/header";

export default function PageInviteJoao() {
  return (
    <>
      <main className="w-full h-full md:h-screen flex flex-col items-center justify-center p-2 sm:p-4 md:p-8 bg-indigo-50 z-20">
        <Header isChildrenHappyDay={true} />

        <section className="w-full max-w-[1200px] h-full flex flex-col md:flex-row items-center justify-between mt-20 md:mt-0 gap-0 md:gap-4 z-30">
          <Apresentation
            name="Joao Lucas"
            styleTitle="text-purple-600"
            styleName="text-purple-800"
          />
          <div className="block md:hidden w-full h-[100px] mt-4 brightness-90 bg-[url('/images/bolofofos-juntos-mobile.png')] bg-no-repeat bg-cover z-20" />
          <CardDetails
            coloObs="text-purple-600"
            variantButton="default"
          />
        </section>
      </main>
    </>
  )
}