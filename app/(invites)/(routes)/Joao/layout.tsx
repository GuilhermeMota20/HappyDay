import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../../../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'HappyDay | Joao Lucas',
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

export default function LayoutJoao({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`h-full w-full select-none ${inter.className}`}>
        {children}

        <div className="fixed hidden md:block right-0 bottom-0 w-1/2 h-[300px] brightness-90 bg-[url('/images/bolofofos-juntos.png')] bg-no-repeat bg-cover z-20" />
        <span className="fixed bottom-[4rem] -left-1 w-1/3 h-16 bg-purple-700/90 rotate-2 z-10" />
        <span className="fixed -bottom-60 -left-8 w-[110%] h-80 bg-purple-600/75 rotate-2 z-10" />
      </body>
    </html>
  );
}
