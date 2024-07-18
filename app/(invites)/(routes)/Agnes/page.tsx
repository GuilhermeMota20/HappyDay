"use client";

import Apresentation from "../../../../components/apresentation";
import CardDetails from "../../../../components/card-details";
import Header from "../../../../components/header";
import { infosInviteAgnes } from "./store";

export default function PageInviteAgnes() {
  return (
    <>
      <main className="w-full h-full md:h-screen flex flex-col items-center justify-center p-2 sm:p-4 md:p-8 bg-indigo-50 z-20 overflow-x-hidden">
        <Header brand="HappyDay | Agnes" isChildrenHappyDay={false} />

        <section className="w-full max-w-[1200px] h-full flex flex-col gap-0 md:flex-row items-center justify-between mt-36 md:mt-0 md:gap-4 z-30">
          <Apresentation
            infos={infosInviteAgnes}
            styleTitle="text-yellow-400"
            styleName="text-pink-600"
          />
          <div className="block md:hidden w-[500px] h-[300px] mt-4 ml-28 brightness-90 bg-[url('/images/agnes.png')] bg-no-repeat bg-cover z-20" />
          <CardDetails
            variantButton="yellow"
            infos={infosInviteAgnes}
          />
        </section>
      </main>
    </>
  )
}