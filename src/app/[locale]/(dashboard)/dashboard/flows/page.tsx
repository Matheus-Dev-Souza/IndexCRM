// src/app/[locale]/(dashboard)/dashboard/flows/page.tsx
import styles from "./page.module.css";

export default function FlowsPage() {
  // Simulação de dados (Mock)
  const flows = [
    { 
      id: 1, 
      date: "14 de out de 2025", 
      name: "Campanha Dezembro", 
      activeCount: 1, 
      status: "active" 
    },
    { 
      id: 2, 
      date: "14 de out de 2025", 
      name: "Fluxo de Boas-vindas", 
      activeCount: 0, 
      status: "inactive" 
    },
    { 
      id: 3, 
      date: "20 de jan de 2026", 
      name: "Recuperação de Boleto", 
      activeCount: 5, 
      status: "active" 
    },
  ];

  return (
    <div className={styles.container}>
      
      {/* Banner de Aviso */}
      <div className={styles.banner}>
         <span className={styles.bannerText}>Atenção: Alteração nas condições de cobrança a partir de 2026.</span>
         <button className={styles.bannerBtn}>ACESSAR COMUNICADO</button>
      </div>

      {/* Header */}
      <div className={styles.header}>
        <div>
           <h1 className={styles.title}>Fluxo de venda individual</h1>
           <p className={styles.subtitle}>Configure os seus fluxos de automação</p>
        </div>
        <button className={styles.createBtn}>+ CRIAR NOVA CAMPANHA</button>
      </div>

      {/* Grid de Cards */}
      <div className={styles.grid}>
         {flows.map((flow) => (
           <div key={flow.id} className={styles.card}>
              
              <div className={styles.cardBody}>
                 <span className={styles.cardDate}>{flow.date}</span>
                 <h3 className={styles.cardTitle}>{flow.name}</h3>
              </div>
              
              <div className={styles.cardFooter}>
                 <span className={`${styles.statusBadge} ${flow.status === 'active' ? styles.statusActive : styles.statusInactive}`}>
                    {flow.activeCount} ativas
                 </span>
                 <span className={styles.optionsIcon}>⋮</span>
              </div>

           </div>
         ))}
      </div>

    </div>
  );
}