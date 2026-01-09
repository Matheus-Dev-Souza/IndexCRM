import type { Metadata } from "next";
import "./globals.css"; // <--- IMPORTAÇÃO DIRETA (Sem 'styles from')

export const metadata: Metadata = {
  title: "Meu CRM",
  description: "Sistema de Gestão de Clientes e Vendas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        {children}
      </body>
    </html>
  );
}