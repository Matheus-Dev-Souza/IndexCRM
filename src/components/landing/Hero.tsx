import styles from "@/app/page.module.css";

export default function Hero() {
  return (
    <>
      <div className={styles.tag}>
        ▼ CRM com IA e Ferramentas de Marketing
      </div>

      <h1 className={styles.title}>
        Construa funis que convertem<br />
        no piloto automático
      </h1>

      <p className={styles.subtitle}>
        O SellFlux centraliza marketing, atendimento e vendas com IA para transformar
        conversas em receita, em dias, não meses.
      </p>

      <div className={styles.heroButtons}>
        <button className={`${styles.btn} ${styles.btnPrimary}`}>
          📅 Agendar Demonstração
        </button>
        <button className={`${styles.btn} ${styles.btnOutline}`}>
          🚀 Iniciar Teste Grátis
        </button>
      </div>
    </>
  );
}