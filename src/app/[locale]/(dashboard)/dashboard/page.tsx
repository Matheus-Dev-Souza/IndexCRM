// src/app/[locale]/(dashboard)/dashboard/page.tsx
import Link from "next/link";
import styles from "./page.module.css";
import { Header } from "@/components/layout/header";

type DashboardPageProps = {
  params: {
    locale: string;
  };
};

export default function DashboardPage({ params }: DashboardPageProps) {
  const { locale } = params;

  // 🔹 Dados mockados (depois vêm da API)
  const stats = {
    salesToday: 0,
    activeLeads: 20,
    leadsProgress: 20, // porcentagem
  };

  return (
    <div className={styles.container}>
      {/* HEADER */}
      <Header/>

      {/* ESTATÍSTICAS RÁPIDAS */}
      <div className={styles.statsRow}>
        
        {/* Card 1: Vendas */}
        <div className={styles.statCard}>
          <div>
            <span className={styles.statLabel}>Vendas Hoje</span>
            <span className={styles.statValue}>
              R$ {stats.salesToday.toFixed(2)}
            </span>
          </div>
        </div>

        {/* Card 2: Leads */}
        <div className={styles.statCard}>
          <div>
            <span className={styles.statLabel}>Leads Ativos</span>

            <div style={{ display: "flex", alignItems: "center" }}>
              <div className={styles.progressContainer}>
                <div
                  className={styles.progressFill}
                  style={{ width: `${stats.leadsProgress}%` }}
                />
              </div>

              <span className={styles.statCount}>
                {stats.activeLeads}
              </span>
            </div>
          </div>
        </div>

      </div>

      {/* GRID DE FUNCIONALIDADES */}
      <h2 className={styles.sectionTitle}>Acesso Rápido</h2>

      <div className={styles.featuresGrid}>
        
        <Link
          href={`/${locale}/dashboard/leads`}
          className={styles.featureCard}
        >
          <span role="img" aria-label="Leads" className={styles.cardIcon}>
            👥
          </span>
          <span className={styles.cardTitle}>Gerenciar Leads</span>
          <p className={styles.cardDesc}>
            Visualize e mova seus cards no Kanban.
          </p>
        </Link>

        <Link
          href={`/${locale}/dashboard/funnels`}
          className={styles.featureCard}
        >
          <span role="img" aria-label="Funis" className={styles.cardIcon}>
            🚀
          </span>
          <span className={styles.cardTitle}>Novo Funil</span>
          <p className={styles.cardDesc}>
            Crie uma nova estratégia de vendas.
          </p>
        </Link>

        <Link
          href={`/${locale}/dashboard/reports`}
          className={styles.featureCard}
        >
          <span role="img" aria-label="Relatórios" className={styles.cardIcon}>
            📊
          </span>
          <span className={styles.cardTitle}>Relatórios</span>
          <p className={styles.cardDesc}>
            Analise o desempenho da sua equipe.
          </p>
        </Link>

      </div>
    </div>
  );
}
