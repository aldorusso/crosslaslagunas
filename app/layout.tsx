import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Cross Las Lagunas - I Cross Popular Dehesa de Santibáñez",
  description: "Descubre el I Cross Las Lagunas: Conexión Pura con la Naturaleza de Extremadura. Participa en esta carrera de campo a través única en la majestuosa Dehesa de Santibáñez.",
  keywords: "cross, carrera, Extremadura, Santibáñez el Bajo, dehesa, atletismo, trail",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
