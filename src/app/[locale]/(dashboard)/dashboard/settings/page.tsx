// src/app/[locale]/(dashboard)/dashboard/settings/page.tsx
import styles from "./page.module.css";

export default function SettingsPage() {
  const menuItems = ['Perfil', 'Empresa', 'Cobrança', 'Notificações', 'Membros'];

  return (
    <div className={styles.container}>
      
      <h1 className={styles.title}>Configurações</h1>
      <p className={styles.subtitle}>Gerencie os dados da sua conta e preferências.</p>

      <div className={styles.layout}>
        
        {/* Menu Lateral */}
        <div className={styles.sidebar}>
           {menuItems.map((item, index) => (
             <div 
               key={item} 
               className={`${styles.navItem} ${index === 0 ? styles.active : styles.inactive}`}
             >
               {item}
             </div>
           ))}
        </div>

        {/* Área de Conteúdo */}
        <div className={styles.card}>
           <h3 className={styles.sectionTitle}>Meu Perfil</h3>
           
           <div className={styles.profileHeader}>
              <div className={styles.avatar}>M</div>
              <button className={styles.changePhotoBtn}>Alterar Foto</button>
           </div>

           <form className={styles.form}>
              <div className={styles.formGroup}>
                 <label className={styles.label}>Nome Completo</label>
                 <input 
                   type="text" 
                   defaultValue="Matheus S" 
                   className={styles.input} 
                 />
              </div>
              
              <div className={styles.formGroup}>
                 <label className={styles.label}>E-mail</label>
                 <input 
                   type="email" 
                   defaultValue="admin@index.com" 
                   disabled 
                   className={styles.input} 
                 />
              </div>

              <div className={styles.fullWidth}>
                 <button type="button" className={styles.saveBtn}>Salvar Alterações</button>
              </div>
           </form>
        </div>

      </div>
    </div>
  );
}