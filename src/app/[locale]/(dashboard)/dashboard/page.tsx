// src/app/[locale]/(dashboard)/dashboard/page.tsx
import styles from './page.module.css';

export default function DashboardPage() {
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

      {/* GRID DE FUNCIONALIDADES */}
      <h2 style={{ fontSize: '1.2rem', marginBottom: '20px', color: 'white' }}>Acesso Rápido</h2>
      <div className={styles.featuresGrid}>
        
        {/* CARD 1 */}
        <div className={styles.featureCard}>
          <div className={styles.cardIcon}>👥</div>
          <div className={styles.cardTitle}>Gerenciar Leads</div>
          <p className={styles.cardDesc}>Visualize e mova seus cards no Kanban.</p>
        </div>

        {/* CARD 2 */}
        <div className={styles.featureCard}>
          <div className={styles.cardIcon}>🚀</div>
          <div className={styles.cardTitle}>Novo Funil</div>
          <p className={styles.cardDesc}>Crie uma nova estratégia de vendas.</p>
        </div>

        {/* CARD 3 */}
        <div className={styles.featureCard}>
          <div className={styles.cardIcon}>📊</div>
          <div className={styles.cardTitle}>Relatórios</div>
          <p className={styles.cardDesc}>Analise o desempenho da sua equipe.</p>
        </div>

      </div>
    </div>
  );
}