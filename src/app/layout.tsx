"use client"

import Footer from "@/components/layout/Footer/footer";

import ThemeProvider from "@/providers/ThemeProvider";
import { Inter } from "next/font/google";
import "./globals.css";
import StoreWrapper from "@/providers/StoreWrapper";
import Header from "@/components/layout/Header/Header";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`flex flex-col min-h-screen ${inter.className}`}>
        <ThemeProvider>
          <StoreWrapper>
            <Header />
            <main className=" p-4 px-4 bg-[var(--primary-bg)]">
              {children}
            </main>

            <Footer />
          </StoreWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
