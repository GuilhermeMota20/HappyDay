import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";
import { ModalProvider } from "./providers/modal-providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'HappyDay',
  icons: {
    icon: [
      {
        url: "/happy-day.svg",
        href: "/happy-day.svg",
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`h-full w-full select-none ${inter.className}`}>
        {children}

        <Toaster />
        <ModalProvider />
      </body>
    </html>
  );
}
