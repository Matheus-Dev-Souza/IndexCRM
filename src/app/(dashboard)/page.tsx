import styles from './page.module.css';

export default function DashboardPage() {
  return (
    <div className={styles.container}>
      
      {/* ALERTA VERDE */}
      <div className={styles.alertBanner}>
        <span>
          <strong>Atenção: Alteração nas condições de cobrança</strong> — A partir de 2 de janeiro de 2026...
        </span>
        <button className={styles.alertBtn}>ACESSAR COMUNICADO</button>
      </div>

      {/* HEADER */}
      <div className={styles.header}>
        <button className={styles.projectSelector}>
           Projeto Instituto José Bernardino ▼
        </button>
        
        <div style={{ display: 'flex', gap: '20px', color: '#a1a1aa', fontSize: '0.9rem' }}>
          <span>🎓 EAD IndexCRM</span>
          <span>❓ CENTRAL DE AJUDA</span>
          <span>▶ YOUTUBE</span>
        </div>
      </div>

      {/* ESTATÍSTICAS RÁPIDAS */}
      <div className={styles.statsRow}>
        <div className={styles.statCard}>
          <span style={{ color: '#a1a1aa', fontSize: '0.9rem' }}>Saldo atual</span>
          <span className={styles.statValue}>$ ****</span>
        </div>

        <div className={styles.statCard}>
          <span style={{ color: '#a1a1aa', fontSize: '0.9rem' }}>Leads ativos</span>
          {/* Barra de progresso fake */}
          <div style={{ width: '80px', height: '6px', background: '#2d2d3a', borderRadius: '3px' }}>
            <div style={{ width: '60%', height: '100%', background: '#3b82f6', borderRadius: '3px' }}></div>
          </div>
          <span>*%</span>
        </div>
      </div>

      {/* ÁREA DO GRÁFICO (Visual Placeholder) */}
      <div className={styles.chartArea}>
         <div className={styles.chartLine} style={{ top: '25%' }}></div>
         <div className={styles.chartLine} style={{ top: '50%' }}></div>
         <div className={styles.chartLine} style={{ top: '75%' }}></div>
         
         {/* Legenda do Eixo X (Datas Fake) */}
         <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', padding: '0 10px', fontSize: '0.7rem', color: '#52525b' }}>
            <span>01/12</span><span>05/12</span><span>10/12</span><span>15/12</span><span>20/12</span><span>25/12</span><span>30/12</span>
         </div>
      </div>

      {/* GRID DE FUNCIONALIDADES */}
      <div className={styles.featuresGrid}>
        
        {/* CARD 1 */}
        <div className={styles.featureCard}>
          <div className={styles.cardIcon}>1x1</div>
          <div className={styles.cardTitle}>Fluxo de Venda no Individual [1x1]</div>
          <p className={styles.cardDesc}>Automação de WhatsApp, Email, SMS, Torpedo de Voz</p>
          <div className={styles.cardFooterIcons}>
             <span>💬</span> <span>✉️</span>
          </div>
        </div>

        {/* CARD 2 */}
        <div className={styles.featureCard}>
           {/* Ícone de Reciclagem Fake */}
          <div className={styles.cardIcon}>↻</div>
          <div className={styles.cardTitle}>Fluxo de Venda em Grupos</div>
          <p className={styles.cardDesc}>Campanhas de automações para Grupos de WhatsApp</p>
          <div className={styles.cardFooterIcons}>
             <span>👥</span>
          </div>
        </div>

        {/* CARD 3 */}
        <div className={styles.featureCard}>
          <div className={styles.cardIcon}>🤖</div>
          <div className={styles.cardTitle}>Chatbot - Agente IA</div>
          <p className={styles.cardDesc}>SAC com Atendimento 24h por dia, 7 dias por semana</p>
          <div className={styles.cardFooterIcons}>
             <span>🎧</span> <span>💬</span>
          </div>
        </div>

        {/* CARD 4 */}
        <div className={styles.featureCard}>
          <div className={styles.cardIcon}>📊</div>
          <div className={styles.cardTitle}>CRM</div>
          <p className={styles.cardDesc}>Visualize, organize e priorize seus negócios</p>
          <div className={styles.cardFooterIcons}>
             <span>📋</span>
          </div>
        </div>

      </div>

      {/* RODAPÉ DE PLANEJAMENTO */}
      <div style={{ marginTop: '40px' }}>
         <h3 style={{ fontSize: '1rem', marginBottom: '5px' }}>Planejamento de Funis de Vendas</h3>
         <p style={{ color: '#a1a1aa', fontSize: '0.85rem', marginBottom: '20px' }}>Desenvolva a narrativa completa do seu funil...</p>
         
         <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
            <div className={styles.statCard} style={{ justifyContent: 'space-between' }}>
                <strong>Orgânico</strong>
                <div style={{ display: 'flex', gap: '10px', color: '#52525b' }}>
                    <span>📱</span><span>🔗</span>
                </div>
            </div>
            
            <div style={{ 
                border: '2px dashed #3f3f4e', 
                borderRadius: '8px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                height: '60px', 
                cursor: 'pointer',
                color: '#a1a1aa'
            }}>
                + Novo Funil
            </div>
         </div>
      </div>

    </div>
  );
}