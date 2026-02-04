import { getLeadsAction } from "@/actions/client-actions";
import { formatCurrency } from "@/lib/utils";
import styles from "./page.module.css";
// 1. IMPORTANTE: Importamos o modal que criamos
import NewLeadModal from "@/components/leads/NewLeadModal";
import  LeadRowItem  from "@/components/leads/LeadRowItem";

// 2. Mantemos a tipagem
interface Lead {
  id: string;
  customerName: string;
  phone: string;
  value: number;
  stage?: {
    name: string;
  };
}

// 3. Mantemos o ActionCard para os OUTROS botões (Remover, Importar, Exportar)
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
  // Busca os dados do Java
  const leads: Lead[] = await getLeadsAction(); 

  return (
    <div className={styles.container}>
      
      {/* COLUNA ESQUERDA: LISTA DE LEADS */}
      <div>
        <div className={styles.header}>
          <h1 className={styles.title}>Leads</h1>
          <div className={styles.controls}>
            <input placeholder="Buscar..." className={styles.searchInput} />
            <button className={styles.filterBtn}>Filtro</button>
          </div>
        </div>

        <div className={styles.list}>
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
        
        {/* 4. AQUI ESTÁ A MUDANÇA: */}
        {/* Substituímos o ActionCard estático pelo Componente do Modal */}
        <NewLeadModal />
        
        {/* Os outros botões continuam estáticos por enquanto */}
        <ActionCard icon="🗑️" title="Remover leads" desc="Exclua leads em massa" />
        <LeadRowItem />
       {/* <ActionCard icon="📥" title="Importações" desc="Visualize suas importações" /> */}
        <ActionCard icon="📤" title="Exportar leads" desc="Baixe sua lista em CSV" />
      </div>

    </div>
  );
}