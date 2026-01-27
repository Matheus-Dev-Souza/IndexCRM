// src/app/[locale]/(dashboard)/dashboard/pages/page.tsx
import styles from "./page.module.css";

export default function PagesProjectPage() {
  // Simulação de dados
  const pagesList = [
    { id: 1, name: "Página de Captura V1", path: "/home-captura", icon: "📄" },
    { id: 2, name: "Obrigado (Thank You)", path: "/obrigado", icon: "🎉" },
    { id: 3, name: "Vendas - Black Friday", path: "/oferta-bf", icon: "🛒" },
  ];

  return (
    <div className={styles.container}>
      
      {/* Header */}
      <div className={styles.header}>
         <div>
            <h1 className={styles.title}>Páginas do projeto</h1>
            <p className={styles.subtitle}>Acesse e configure as suas páginas de captura.</p>
         </div>
         <button className={styles.createBtn}>+ NOVA PÁGINA</button>
      </div>

      {/* Grid */}
      <div className={styles.grid}>
         
         {pagesList.map((page) => (
           <div key={page.id} className={styles.card}>
              {/* Thumbnail */}
              <div className={styles.thumbnail}>
                 {page.icon}
              </div>
              
              <div className={styles.cardBody}>
                 <div className={styles.cardHeader}>
                    <h3 className={styles.cardTitle}>{page.name}</h3>
                    <span className={styles.optionsIcon}>⋮</span>
                 </div>
                 <span className={styles.cardPath}>{page.path}</span>
                 
                 <div className={styles.actions}>
                    <button className={styles.actionBtn}>Editar</button>
                    <button className={styles.actionBtn}>Visualizar</button>
                 </div>
              </div>
           </div>
         ))}

      </div>
    </div>
  );
}