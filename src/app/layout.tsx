import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer/Footer";

export const metadata: Metadata = {
  title: "¿me perdonas?",
  description: "Perdón por lo que hice, me gustaría recibir tu perdón. Gracias <3",
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
