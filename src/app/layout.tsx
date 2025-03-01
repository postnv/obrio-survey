import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import { ReactNode } from "react";

import { BaseLayout } from "@/shared/ui";
import { StoreProvider } from "@/app/store-provider";

import "./globals.css";

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Obrio",
  description: "Change your relationships with astrology",
};

export default function RootLayout({
  children,
}: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={openSans.className}>
      <StoreProvider>
        <BaseLayout>
          {children}
        </BaseLayout>
      </StoreProvider>
      </body>
    </html>
  );
}
