// src/app/[locale]/(dashboard)/layout.tsx
import type { Metadata } from "next";
import { Sidebar } from "@/components/layout/Sidebar"; 
import styles from "./layout.module.css";

export const metadata: Metadata = {
  title: "Dashboard | IndexCRM",
  description: "Gerencie seus leads e vendas",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.container}>
      
      {/* Sidebar Modularizado */}
      <Sidebar />

      {/* Área de Conteúdo Principal */}
      <main className={styles.mainContent}>
        {children}
      </main>

    </div>
  );
}