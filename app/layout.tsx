import type {Metadata} from "next";
import localFont from "next/font/local";
import "./globals.css";
import Menu from "@/components/Menu";
import {Providers} from "@/components/Providers";
import Sidebar from "@/components/Sidebar";
import {Box} from "@chakra-ui/react";
import Content from "@/components/Content";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "MonsterLex",
  description: "What's there, and what needs to be there",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <Providers>
        <Box className={'w-[100vw] h-[100vh] overflow-hidden flex flex-col'}>
          <Menu/>
          <Box className={'flex overflow-hidden'}>
            <Sidebar/>
            <Content>
              {children}
            </Content>
          </Box>
        </Box>
      </Providers>
      </body>
    </html>
  );
}
