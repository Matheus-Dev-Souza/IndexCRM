// src/app/[locale]/(dashboard)/dashboard/page.tsx
import Link from 'next/link';
import styles from './page.module.css';

// Precisamos pegar o locale (idioma) para montar os links corretamente
export default async function DashboardPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  return (
    <div className={styles.container}>
      
      {/* HEADER */}
      <div className={styles.header}>
        <h1 className={styles.projectSelector}>
           Dashboard Geral
        </h1>
        
        <div style={{ display: 'flex', gap: '20px', color: '#a1a1aa', fontSize: '0.9rem' }}>
          <span>🎓 EAD</span>
          <span>❓ Ajuda</span>
        </div>
      </div>

      {/* ESTATÍSTICAS RÁPIDAS */}
      <div className={styles.statsRow}>
        <div className={styles.statCard}>
          <span style={{ color: '#a1a1aa', fontSize: '0.9rem' }}>Vendas Hoje</span>
          <span className={styles.statValue}>R$ 0,00</span>
        </div>

        <div className={styles.statCard}>
          <span style={{ color: '#a1a1aa', fontSize: '0.9rem' }}>Leads Ativos</span>
          <div style={{ width: '80px', height: '6px', background: '#2d2d3a', borderRadius: '3px' }}>
            <div style={{ width: '20%', height: '100%', background: '#3b82f6', borderRadius: '3px' }}></div>
          </div>
          <span style={{ color: 'white', marginLeft: '10px' }}>20</span>
        </div>
      </div>

      {/* GRID DE FUNCIONALIDADES (Links para as páginas) */}
      <h2 style={{ fontSize: '1.2rem', marginBottom: '20px', color: 'white' }}>Acesso Rápido</h2>
      
      <div className={styles.featuresGrid}>
        
        {/* CARD 1 -> Vai para LEADS */}
        <Link href={`/${locale}/dashboard/leads`} className={styles.featureCard}>
          <div className={styles.cardIcon}>👥</div>
          <span className={styles.cardTitle}>Gerenciar Leads</span>
          <p className={styles.cardDesc}>Visualize e mova seus cards no Kanban.</p>
        </Link>

        {/* CARD 2 -> Vai para FUNIS */}
        <Link href={`/${locale}/dashboard/funnels`} className={styles.featureCard}>
          <div className={styles.cardIcon}>🚀</div>
          <span className={styles.cardTitle}>Novo Funil</span>
          <p className={styles.cardDesc}>Crie uma nova estratégia de vendas.</p>
        </Link>

        {/* CARD 3 -> Vai para RELATÓRIOS */}
        <Link href={`/${locale}/dashboard/reports`} className={styles.featureCard}>
          <div className={styles.cardIcon}>📊</div>
          <span className={styles.cardTitle}>Relatórios</span>
          <p className={styles.cardDesc}>Analise o desempenho da sua equipe.</p>
        </Link>

      </div>
    </div>
  );
}