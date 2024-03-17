import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sebastian Bozo - Community Manager",
  description:
    "Soy un apasionado Community Manager con experiencia en la gestión de comunidades en línea. Mi objetivo es crear y mantener una sólida presencia en las redes sociales, fomentar la participación de la comunidad y aumentar la visibilidad de la marca. Utilizo estrategias efectivas de contenido y comunicación para impulsar el compromiso y construir relaciones sólidas con los seguidores. ¡Únete a mí en esta emocionante aventura de construir y hacer crecer una comunidad en línea!",
  keywords:
    "community manager, social media, redes sociales, marketing digital, gestión de comunidades, estrategias de contenido, comunicación, compromiso, relaciones, seguidores, marca, visibilidad, presencia, participación, crecimiento, construcción, emocionante, aventura",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
