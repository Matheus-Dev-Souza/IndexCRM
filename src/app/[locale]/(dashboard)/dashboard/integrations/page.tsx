// src/app/[locale]/(dashboard)/dashboard/integrations/page.tsx
import styles from "./page.module.css";

export default function IntegrationsPage() {
  const integrations = [
    { name: "Leads Para Daniel", platform: "Facebook", count: 1 },
    { name: "Página Home da Setebit", platform: "Custom", count: 1 },
    { name: "Primeiro depósito", platform: "Web", count: 3 },
    { name: "Saque Pago", platform: "Bank", count: 4 },
    { name: "Depósito criado(qrcode)", platform: "Pix", count: 17 },
  ];

  return (
    <div className={styles.container}>
      
      {/* Header */}
      <div className={styles.header}>
        <div>
           <h1 className={styles.title}>Minhas Integrações</h1>
           <p className={styles.subtitle}>Conecte seu funil com as principais plataformas</p>
        </div>
        <button className={styles.createBtn}>+ NOVA INTEGRAÇÃO</button>
      </div>

      {/* Grid de Cards */}
      <div className={styles.grid}>
        {integrations.map((item, index) => (
          <div key={index} className={styles.card}>
             
             {/* Ícone com a inicial da plataforma */}
             <div className={styles.icon}>
               {item.platform[0]}
             </div>

             {/* Informações */}
             <div>
               <h4 className={styles.cardTitle}>{item.name}</h4>
               <span className={styles.cardMeta}>Leads: {item.count}</span>
             </div>

          </div>
        ))}
      </div>

    </div>
  );
}