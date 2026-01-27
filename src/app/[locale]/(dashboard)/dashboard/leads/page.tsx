import { getLeadsAction } from "@/actions/client-actions";
import { formatCurrency, formatDate } from "@/lib/utils";
import styles from "./page.module.css";

// 1. Definimos a tipagem do que vem do Java
interface Lead {
  id: string;
  customerName: string;
  phone: string;
  value: number;
  stage?: {
    name: string;
  };
}

// Componente Visual de Card de Ação (Modularizado)
const ActionCard = ({ icon, title, desc }: { icon: string, title: string, desc: string }) => (
  <div className={styles.actionCard}>
    <div>
      <h4 className={styles.actionTitle}>{title}</h4>
      <p className={styles.actionDesc}>{desc}</p>
    </div>
    <div className={styles.actionIcon}>{icon}</div>
  </div>
);

export default async function LeadsPage() {
  // O ideal é tipar o retorno da action, mas aqui forçamos a tipagem do array
  const leads: Lead[] = await getLeadsAction(); 

  return (
    <div className={styles.container}>
      
      {/* COLUNA ESQUERDA: LISTA */}
      <div>
        <div className={styles.header}>
          <h1 className={styles.title}>Leads</h1>
          <div className={styles.controls}>
            <input placeholder="Buscar..." className={styles.searchInput} />
            <button className={styles.filterBtn}>Filtro</button>
          </div>
        </div>

        <div className={styles.list}>
          {/* 2. Aqui usamos a interface no lugar do 'any' */}
          {leads.length > 0 ? leads.map((lead: Lead) => (
            <div key={lead.id} className={styles.leadCard}>
              <div className={styles.leadInfo}>
                <div className={styles.avatar}>👤</div>
                <div>
                  <h4 className={styles.leadName}>{lead.customerName || 'Sem nome'}</h4>
                  <span className={styles.leadMeta}>
                    {lead.phone} • {formatCurrency(lead.value)}
                  </span>
                </div>
              </div>
              <div className={styles.stageBadge}>
                {lead.stage?.name || 'Novo'}
              </div>
            </div>
          )) : (
            <div className={styles.emptyState}>
              Nenhum lead encontrado.
            </div>
          )}
        </div>
      </div>

      {/* COLUNA DIREITA: AÇÕES */}
      <div>
        <h3 className={styles.sidebarTitle}>Ações Rápidas</h3>
        <ActionCard icon="➕" title="Adicionar lead" desc="Faça o cadastro manual" />
        <ActionCard icon="🗑️" title="Remover leads" desc="Exclua leads em massa" />
        <ActionCard icon="📥" title="Importações" desc="Visualize suas importações" />
        <ActionCard icon="📤" title="Exportar leads" desc="Baixe sua lista em CSV" />
      </div>

    </div>
  );
}