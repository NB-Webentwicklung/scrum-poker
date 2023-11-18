import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Scrum Poker",
  description: "Scrum Poker for remote teams",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body
        className={clsx(
          "container w-full md:w-2/3 px-3 md:px-0 xl:w-1/2 mx-auto pt-4",
          inter.className,
        )}
      >
        {children}
      </body>
    </html>
  );
}
