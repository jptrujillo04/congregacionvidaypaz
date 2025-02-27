import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header"; // Importamos el Header

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Congregación Vida y Paz",
  description: "Iglesia Cristiana Congregación Vida y Paz",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header /> {/* Aquí se coloca el Header */}
        {children} {/* Contenido dinámico de cada página */}
      </body>
    </html>
  );
}
