import { getLeadsAction } from "@/actions/lead-actions";
import styles from "./page.module.css";
import NewLeadModal from "@/components/leads/NewLeadModal";
import ImportModal from "@/components/leads/ImportModal";
import { LeadRowItem } from "@/components/leads/LeadRowItem";

// Define o tipo do Lead para o TypeScript parar de reclamar
interface Lead {
  id: string;
  customerName: string;
  email: string;
  phone: string;
  createdAt?: string;
  status?: string;
  // adicione outros campos se precisar
}

// Action Card visual
const ActionCard = ({ icon, title, desc, onClick }: { icon: string, title: string, desc: string, onClick?: () => void }) => (
  <div className={styles.actionCard} onClick={onClick}>
    <div>
      <h4 className={styles.actionTitle}>{title}</h4>
      <p className={styles.actionDesc}>{desc}</p>
    </div>
    <div className={styles.actionIcon}>{icon}</div>
  </div>
);

export default async function LeadsPage() {
  // Agora usamos a tipagem correta em vez de 'any'
  const leads: Lead[] = await getLeadsAction();

  return (
    <div className={styles.container}>
      {/* ... (resto do seu código mantém igual) ... */}
        <div className={styles.list}>
          {leads && leads.length > 0 ? (
            leads.map((lead) => (
              <LeadRowItem key={lead.id} lead={lead} />
            ))
          ) : (
            <div className={styles.emptyState}>
              <p>Nenhum lead encontrado.</p>
            </div>
          )}
        </div>
      {/* ... */}
    </div>
  );
}