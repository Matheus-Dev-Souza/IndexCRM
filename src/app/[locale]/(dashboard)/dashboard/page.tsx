// src/app/[locale]/(dashboard)/dashboard/page.tsx
import Link from 'next/link';
import styles from './page.module.css';

// Precisamos tipar o params como uma Promise para versões recentes do Next.js
export default async function DashboardPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  return (
    <div className={styles.container}>
      
      {/* HEADER */}
      <div className={styles.header}>
        <h1 className={styles.projectSelector}>
           Dashboard Geral
        </h1>
        
        <div className={styles.headerActions}>
          <span>🎓 EAD</span>
          <span>❓ Ajuda</span>
        </div>
      </div>

{/* ESTATÍSTICAS RÁPIDAS */}
      <div className={styles.statsRow}>
        
        {/* Card 1: Vendas */}
        <div className={styles.statCard}>
          <div>
            <span className={styles.statLabel}>Vendas Hoje</span>
            <span className={styles.statValue}>R$ 0,00</span>
          </div>
        </div>

        {/* Card 2: Leads (Com barra de progresso) */}
        <div className={styles.statCard}>
          <div>
             <span className={styles.statLabel}>Leads Ativos</span>
             <div style={{ display: 'flex', alignItems: 'center' }}>
                
                <div className={styles.progressContainer}>
                  {/* A largura continua inline pois vem do Banco de Dados */}
                  <div 
                    className={styles.progressFill} 
                    style={{ width: '20%' }} 
                  />
                </div>
                
                <span className={styles.statCount}>20</span>
             </div>
          </div>
        </div>

      </div>
      {/* GRID DE FUNCIONALIDADES (Links para as páginas) */}
      <h2 className={styles.sectionTitle}>Acesso Rápido</h2>
      
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