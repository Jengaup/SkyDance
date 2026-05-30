import type { Metadata } from "next";
import { Bebas_Neue, Poppins } from "next/font/google";
import "./globals.css";
import { LangProvider } from "@/lib/lang";

const bebasNeue = Bebas_Neue({
  weight: "400",
  variable: "--font-bebas",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sky Dance Studio PR | Academia de Baile",
  description: "La academia de baile más reconocida de Puerto Rico. Clases de Salsa, Hip Hop, Ballet, Bachata y más en Isabela y Hatillo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${bebasNeue.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-dvh flex flex-col" style={{ touchAction: "manipulation" }}>
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  );
}
