import Link from "next/link";
import styles from "./recover.module.css";

export default function RecoverPage() {
  return (
    <div className={styles.container}>
      {/* HEADER */}
      <div className={styles.header}>
        <h1 className={styles.logo}>
          Index<span>CRM</span>.
        </h1>
        <p className={styles.subtitle}>Recupere o acesso à sua conta</p>
      </div>

      {/* CARD */}
      <div className={styles.card}>
        <h2 className={styles.cardTitle}>Esqueceu a senha?</h2>
        <p className={styles.cardDesc}>
          Digite seu e-mail abaixo para receber as instruções de recuperação.
        </p>

        <form className={styles.form}>
          <div className={styles.inputGroup}>
            <label className={styles.label}>E-mail cadastrado</label>
            <div className={styles.inputWrapper}>
              <span className={styles.iconLeft}>✉️</span>
              <input 
                type="email" 
                placeholder="seu@email.com" 
                className={styles.input} 
                required
              />
            </div>
          </div>

          <button type="submit" className={styles.submitButton}>
            Enviar instruções
          </button>
        </form>

        <div className={styles.footer}>
          Lembrou a senha? <Link href="/login" className={styles.link}>Voltar para o login</Link>
        </div>
      </div>
    </div>
  );
}