import styles from './ClientCard.module.css'; // O segredo está aqui

export function ClientCard({ name, email }: { name: string, email: string }) {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{name}</h3>
      <p>{email}</p>
    </div>
  );
}