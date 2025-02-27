import { geistSans, geistMono } from "../fonts/fonts";
import "./globals.css";
import Header from "@/components/Header/Header";

export const metadata = {
  title: "Congregación Vida y Paz",
  description: "Iglesia Cristiana Congregación Vida y Paz",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable} layout`}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
