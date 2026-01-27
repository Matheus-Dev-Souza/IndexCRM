import Link from "next/link";
import styles from "@/app/page.module.css"; // Importando seu CSS original

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        INDEXCRM<span style={{ color: '#6d28d9' }}>.</span>
      </div>

      <div className={styles.navLinks}>
        <span className={styles.link}>Recursos</span>
        <span className={styles.link}>Soluções</span>
        <span className={styles.link}>Preços</span>
        <span className={styles.link}>Contato</span>
      </div>

      <div className={styles.navActions}>
        <Link href="/login" className={styles.link}>Login</Link>
        <Link href="/register" className={`${styles.btn} ${styles.btnPrimary}`}>
          Começar Agora 🚀
        </Link>
      </div>
    </nav>
  );
}