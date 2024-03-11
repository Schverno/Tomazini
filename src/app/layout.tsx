import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ subsets: ["latin"], weight: ["300", "500" , "600"], style: ['normal'] });

export const metadata: Metadata = {
  title: "Tomazini Group",
  description: "Tus inversiones inmobiliarias en manos expertas",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg" sizes="any" />
      </head>
      <body className={poppins.className}>      
          {children}  
      </body>
    </html>
  );
}
