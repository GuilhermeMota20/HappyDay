import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../../../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'HappyDay | Agnes 1 aninho',
  description: 'Um dia de comemoracao a mais um ano de vida de um ser extremamente importantes!',
  icons: {
    icon: [
      {
        url: "/happy-day.svg",
        href: "/happy-day.svg",
      }
    ]
  }
};

export default function LayoutFernanda({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className="overflow-x-hidden">
      <body className={`h-full w-full select-none overflow-x-hidden ${inter.className}`}>
        {children}

        <span className="absolute top-[4rem] -right-1 w-1/3 h-16 bg-yellow-400/90 rotate-2 z-20" />
        <span className="absolute -top-60 -left-8 w-[110%] h-80 bg-pink-600/75 rotate-2 z-10" />

        <div className="fixed hidden md:block -right-12 bottom-0 xl:w-[400px] xl:h-[400px] lg:w-[360px] lg:h-[360px] md:w-[300px] md:h-[300px] brightness-90 bg-[url('/images/agnes_unicornio.png')] bg-no-repeat bg-cover z-30" />

        <span className="fixed bottom-[4rem] -left-1 w-1/3 h-16 bg-yellow-400/90 rotate-2 z-20" />
        <span className="fixed -bottom-60 -left-8 w-[110%] h-80 bg-pink-600/75 rotate-2 z-10" />
      </body>
    </html>
  );
}
