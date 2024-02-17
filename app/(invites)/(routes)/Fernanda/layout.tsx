import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../../../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'HappyDay | Fernanda',
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
    <html lang="pt-br">
      <body className={`h-full w-full select-none ${inter.className}`}>
        {children}

        <span className="fixed top-[4rem] -right-1 w-1/3 h-16 bg-pink-700/90 rotate-2 z-10" />
        <span className="fixed -top-60 -left-8 w-[110%] h-80 bg-pink-600/75 rotate-2 z-10" />

        <span className="fixed bottom-[4rem] -left-1 w-1/3 h-16 bg-pink-700/90 rotate-2 z-10" />
        <span className="fixed -bottom-60 -left-8 w-[110%] h-80 bg-pink-600/75 rotate-2 z-10" />
      </body>
    </html>
  );
}
