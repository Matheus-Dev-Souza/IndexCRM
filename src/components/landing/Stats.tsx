import styles from "@/app/page.module.css";

const statsData = [
  { value: "+ 20%", label: "taxa de conversão", icon: "⚡" },
  { value: "+ vendas", label: "respostas mais rápidas", icon: "⏱" },
  { value: "2x +", label: "receita por lead", icon: "📈" },
];

export default function Stats() {
  return (
    <div className={styles.statsGrid}>
      {statsData.map((stat, index) => (
        <div key={index} className={styles.statCard}>
          <div className={styles.iconBox} style={{ width: 30, height: 30, marginBottom: 0 }}>
            {stat.icon}
          </div>
          <div>
            <div className={styles.statValue}>{stat.value}</div>
            <div className={styles.statLabel}>{stat.label}</div>
          </div>
        </div>
      ))}
    </div>
  );
}