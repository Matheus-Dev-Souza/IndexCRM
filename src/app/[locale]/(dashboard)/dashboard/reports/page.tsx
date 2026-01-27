// src/app/[locale]/(dashboard)/dashboard/reports/page.tsx
import styles from "./page.module.css";

export default function ReportsPage() {
  
  // Dados simulados do gráfico (altura das barras em %)
  const chartData = [40, 60, 30, 80, 50, 90, 70, 45, 60, 100, 80, 50];
  
  // Dados simulados das Tags
  const tagsData = [
    { label: 'Telefone', val: '6.708', pct: '95%' },
    { label: 'Email', val: '6.298', pct: '88%' },
    { label: 'Ativo WhatsApp', val: '324', pct: '15%' },
    { label: 'Importado CSV', val: '227', pct: '10%' }
  ];

  return (
    <div className={styles.container}>
      
      {/* Header */}
      <div className={styles.header}>
         <h1 className={styles.title}>Relatório de Leads</h1>
         
         <div className={styles.filterGroup}>
            <div className={styles.dateRange}>📅 Últimos 30 dias</div>
            <button className={styles.filterBtn}>Filtrar</button>
         </div>
      </div>

      <div className={styles.grid}>
         
         {/* Gráfico Principal */}
         <div className={styles.mainChartCard}>
            <h3 className={styles.chartTitle}>Entrada de Leads</h3>
            <div className={styles.chartArea}>
               {/* Renderiza as Barras */}
               {chartData.map((height, i) => (
                  <div key={i} className={styles.bar} style={{ height: `${height}%` }}></div>
               ))}
            </div>
            <div className={styles.chartLabels}>
               <span>01/01</span><span>15/01</span><span>30/01</span>
            </div>
         </div>

         {/* Painel Lateral */}
         <div className={styles.sidebar}>
            
            {/* Card Total */}
            <div className={styles.totalCard}>
               <span className={styles.totalLabel}>TOTAL DE LEADS</span>
               <div className={styles.totalValue}>6.834</div>
               <div className={styles.progressBarContainer}>
                  <div className={styles.progressBarFill} style={{ width: '68%' }}></div>
               </div>
               <div className={styles.totalPercentage}>68% ativos</div>
            </div>

            {/* Lista de Tags */}
            <div className={styles.tagsCard}>
               <h3 className={styles.chartTitle}>Leads por Tag</h3>
               
               <div className={styles.tagsList}>
                  {tagsData.map(tag => (
                    <div key={tag.label} className={styles.tagItem}>
                       <div className={styles.tagHeader}>
                          <span className={styles.tagName}>{tag.label}</span>
                          <span className={styles.tagValue}>{tag.val}</span>
                       </div>
                       <div className={styles.tagBarContainer}>
                          <div className={styles.tagBarFill} style={{ width: tag.pct }}></div>
                       </div>
                    </div>
                  ))}
               </div>
            </div>

         </div>
      </div>
    </div>
  );
}