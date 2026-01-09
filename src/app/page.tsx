// src/app/page.tsx
import Link from "next/link";
import styles from "./page.module.css";

// Ícones SVG simples para os cards
const IconCapture = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M2 12h20"/></svg>;
const IconEmail = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>;
const IconConvert = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>;
const IconRetention = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"/><path d="M16 21h5v-5"/></svg>;

export default function LandingPage() {
  return (
    <div className={styles.container}>
      {/* NAVBAR */}
      <nav className={styles.navbar}>
        <div className={styles.logo}>INDEXCRM<span style={{color:'#6d28d9'}}>.</span></div>
        
        <div className={styles.navLinks}>
          <span className={styles.link}>Recursos</span>
          <span className={styles.link}>Soluções</span>
          <span className={styles.link}>Preços</span>
          <span className={styles.link}>Contato</span>
        </div>

        <div className={styles.navActions}>
          <Link href="/login" className={styles.link}>Login</Link>
          <Link href="/login" className={`${styles.btn} ${styles.btnPrimary}`}>
             Começar Agora 🚀
          </Link>
        </div>
      </nav>

      {/* HERO SECTION */}
      <main className={styles.hero}>
        <div className={styles.tag}>
          ▼ CRM com IA e Ferramentas de Marketing
        </div>
        
        <h1 className={styles.title}>
          Construa funis que convertem<br />
          no piloto automático
        </h1>
        
        <p className={styles.subtitle}>
          O SellFlux centraliza marketing, atendimento e vendas com IA para transformar
          conversas em receita, em dias, não meses.
        </p>

        <div className={styles.heroButtons}>
          <button className={`${styles.btn} ${styles.btnPrimary}`}>
            📅 Agendar Demonstração
          </button>
          <button className={`${styles.btn} ${styles.btnOutline}`}>
            🚀 Iniciar Teste Grátis
          </button>
        </div>

        {/* CARDS GRID */}
        <div className={styles.grid}>
          {/* Card 1 */}
          <div className={styles.card}>
            <div className={styles.iconBox}><IconCapture /></div>
            <h3 className={styles.cardTitle}>Captura</h3>
            <p className={styles.cardText}>Landing pages + Chat + Instagram + WhatsApp</p>
          </div>

          {/* Card 2 */}
          <div className={styles.card}>
            <div className={styles.iconBox}><IconEmail /></div>
            <h3 className={styles.cardTitle}>Nutrição</h3>
            <p className={styles.cardText}>Fluxos de e-mail/WhatsApp com IA</p>
          </div>

          {/* Card 3 */}
          <div className={styles.card}>
            <div className={styles.iconBox}><IconConvert /></div>
            <h3 className={styles.cardTitle}>Conversão</h3>
            <p className={styles.cardText}>Qualificação automática + CRM integrado</p>
          </div>

          {/* Card 4 */}
          <div className={styles.card}>
            <div className={styles.iconBox}><IconRetention /></div>
            <h3 className={styles.cardTitle}>Retenção</h3>
            <p className={styles.cardText}>Follow-up e campanhas recorrentes</p>
          </div>
        </div>

        {/* STATS */}
        <div className={styles.statsGrid}>
          <div className={styles.statCard}>
            <div className={styles.iconBox} style={{width: 30, height: 30, marginBottom:0}}>⚡</div>
            <div>
              <div className={styles.statValue}>+ 20%</div>
              <div className={styles.statLabel}>taxa de conversão</div>
            </div>
          </div>

          <div className={styles.statCard}>
            <div className={styles.iconBox} style={{width: 30, height: 30, marginBottom:0}}>⏱</div>
            <div>
              <div className={styles.statValue}>+ vendas</div>
              <div className={styles.statLabel}>respostas mais rápidas</div>
            </div>
          </div>

          <div className={styles.statCard}>
            <div className={styles.iconBox} style={{width: 30, height: 30, marginBottom:0}}>📈</div>
            <div>
              <div className={styles.statValue}>2x +</div>
              <div className={styles.statLabel}>receita por lead</div>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}