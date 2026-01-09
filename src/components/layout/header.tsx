import styles from "./header.module.css";

export function Header() {
  return (
    <div className={styles.headerWrapper}>
      {/* Faixa Verde de Aviso */}
      <div className={styles.warningBanner}>
        <span>Atenção: Alteração nas condições de cobrança a partir de 2026.</span>
        <button style={{background:'white', color:'#15803d', border:'none', borderRadius:4, padding:'2px 8px', fontSize:'0.75rem', fontWeight:'bold', cursor:'pointer'}}>ACESSAR COMUNICADO</button>
      </div>

      <header className={styles.header}>
        <div className={styles.leftSection}>
          <span style={{color:'#64748b'}}>Projeto</span>
          <div className={styles.projectSelector}>
            Instituto José Ber... ▼
          </div>
        </div>

        <div className={styles.rightSection}>
          <span className={styles.headerLink}>🎓 EAD SELLFLUX</span>
          <span className={styles.headerLink}>❓ CENTRAL DE AJUDA</span>
          <span className={styles.headerLink}>📺 YOUTUBE</span>
        </div>
      </header>
    </div>
  );
}