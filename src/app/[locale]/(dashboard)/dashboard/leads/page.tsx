import { getLeadsAction } from "@/actions/lead-actions"; // <--- Ajustado para o arquivo correto
import { formatCurrency } from "@/lib/utils";
import styles from "./page.module.css";

// Componentes Visuais
import NewLeadModal from "@/components/leads/NewLeadModal";
import { LeadRowItem } from "@/components/leads/LeadRowItem"; // <--- Componente do Card
import ImportModal from "@/components/leads/ImportModal";     // <--- Componente de Importação
import RemoveLeadModal from "@/components/leads/RemoveLeadModal";
import ExportLeadModal from "@/components/leads/ExportLeadModal";
import AddTagsModal from "@/components/leads/AddTagsModal";

// Tipagem atualizada para bater com o LeadRowItem
interface Lead {
  id: string;
  customerName: string;
  email: string;
  phone: string;
  value: number;
  stage?: { name: string };
  tags: string[];      // Adicionado
  createdAt?: string;  // Adicionado
}

// Action Card genérico (para botões simples)
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
  // Busca os dados reais do Java
  // O "as any" aqui garante que se o Java mandar algo diferente, o Front não quebra na hora
  const leads = (await getLeadsAction()) as unknown as Lead[];

  return (
    <div className={styles.container}>
      
      {/* === COLUNA ESQUERDA: LISTA DE LEADS === */}
      <div>
        <div className={styles.header}>
          <h1 className={styles.title}>Leads</h1>
          <div className={styles.controls}>
            <input placeholder="Buscar..." className={styles.searchInput} />
            <button className={styles.filterBtn}>Filtro</button>
          </div>
        </div>

        <div className={styles.list}>
          {leads && leads.length > 0 ? (
            // AQUI ESTÁ A MÁGICA: Usamos o componente visual LeadRowItem
            leads.map((lead) => (
              <LeadRowItem key={lead.id} lead={lead} />
            ))
          ) : (
            <div className={styles.emptyState}>
              <p>Nenhum lead encontrado.</p>
            </div>
          )}
        </div>
      </div>

      {/* === COLUNA DIREITA: AÇÕES RÁPIDAS === */}
      <div>
        <h3 className={styles.sidebarTitle}>Ações Rápidas</h3>
        
        {/* 1. Criar Lead */}
        <NewLeadModal />
        
        {/* 2. Remover Leads */}
        <RemoveLeadModal />
        {/* 3. Importar (Componente Novo) */}
        <ImportModal />
        
        {/* 4. Exportar */}
        <ExportLeadModal />

         {/* 5. ADD ATG */}
        <AddTagsModal />
      </div>

    </div>
  );
}