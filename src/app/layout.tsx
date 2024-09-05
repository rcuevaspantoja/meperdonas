import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer/Footer";

export const metadata: Metadata = {
  title: "¿me perdonas?",
  description: "Aplicación para que puedas pedir perdón. Basta con escribir el nombre y compartirlo con la persona que quieras disculparte",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex items-center flex-col h-screen">
        {children}
        <Footer />
      </body>
    </html>
  );
}
