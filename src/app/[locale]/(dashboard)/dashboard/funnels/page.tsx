// src/app/[locale]/(dashboard)/dashboard/funnels/page.tsx
import Link from "next/link";
import styles from "./page.module.css";

export default function FunnelsPage() {
  // Simulação de dados (depois buscaremos do Java via Server Action)
  const funnels = [
    { id: 1, name: "Funil Padrão", stages: 5, activeLeads: 12, totalValue: 15400.00 },
    { id: 2, name: "Funil de Marketing", stages: 4, activeLeads: 45, totalValue: 0.00 },
    { id: 3, name: "Parcerias & Influencers", stages: 3, activeLeads: 8, totalValue: 5000.00 },
  ];

  return (
    <div className={styles.container}>
      
      {/* Banner de Aviso */}
      <div className={styles.banner}>
         <span className={styles.bannerText}>📢 Atenção: Novas automações de funil disponíveis.</span>
         <button className={styles.bannerBtn}>VER NOVIDADES</button>
      </div>

      {/* Cabeçalho */}
      <div className={styles.header}>
        <div>
           <h1 className={styles.title}>Funis de Vendas</h1>
           <p className={styles.subtitle}>Gerencie suas etapas e processos comerciais</p>
        </div>
        <button className={styles.createBtn}>
          <span>+</span> CRIAR NOVO FUNIL
        </button>
      </div>

      {/* Grid de Funis */}
      <div className={styles.grid}>
        
        {funnels.map((funnel) => (
          <div key={funnel.id} className={styles.card}>
             
             {/* Topo do Card */}
             <div className={styles.cardHeader}>
                <div>
                   <h3 className={styles.cardTitle}>{funnel.name}</h3>
                   <span className={styles.cardSubtitle}>{funnel.stages} etapas configuradas</span>
                </div>
                <div className={styles.cardIcon}>⚙️</div>
             </div>

             {/* Corpo do Card (Métricas Rápidas) */}
             <div className={styles.cardBody}>
                <div>
                   <span className={styles.statLabel}>Leads Ativos</span>
                   <span className={styles.statValue}>{funnel.activeLeads}</span>
                </div>
                <div>
                   <span className={styles.statLabel}>Valor em Aberto</span>
                   <span className={styles.statValueMoney}>
                     {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(funnel.totalValue)}
                   </span>
                </div>
             </div>

             {/* Rodapé do Card */}
             <div className={styles.cardFooter}>
                <span className={styles.cardFooterText}>ACESSAR KANBAN →</span>
             </div>
          </div>
        ))}

        {/* Card de "Adicionar Novo" */}
        <div className={styles.newCard}>
           <div className={styles.newCardIcon}>+</div>
           <span className={styles.newCardText}>Novo Funil</span>
        </div>

      </div>
    </div>
  );
}