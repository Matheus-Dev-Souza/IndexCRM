import styles from "@/app/page.module.css";

// Ícones
const IconCapture = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M2 12h20" /></svg>;
const IconEmail = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>;
const IconConvert = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>;
const IconRetention = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"/><path d="M16 21h5v-5"/></svg>;

const featuresData = [
  { title: "Captura", text: "Landing pages + Chat + Instagram + WhatsApp", Icon: IconCapture },
  { title: "Nutrição", text: "Fluxos de e-mail/WhatsApp com IA", Icon: IconEmail },
  { title: "Conversão", text: "Qualificação automática + CRM integrado", Icon: IconConvert },
  { title: "Retenção", text: "Follow-up e campanhas recorrentes", Icon: IconRetention },
];

export default function Features() {
  return (
    <div className={styles.grid}>
      {featuresData.map((feature, index) => (
        <div key={index} className={styles.card}>
          <div className={styles.iconBox}>
            <feature.Icon />
          </div>
          <h3 className={styles.cardTitle}>{feature.title}</h3>
          <p className={styles.cardText}>{feature.text}</p>
        </div>
      ))}
    </div>
  );
}