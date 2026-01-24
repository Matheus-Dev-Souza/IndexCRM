import { getLeadsAction } from "@/actions/client-actions";
import { formatCurrency, formatDate } from "@/lib/utils";

// Componente Visual de Card de Ação (lado direito)
const ActionCard = ({ icon, title, desc }: { icon: string, title: string, desc: string }) => (
  <div style={{ background: '#1e1e2d', padding: '20px', borderRadius: '8px', border: '1px solid #2d2d3a', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', marginBottom: '15px' }}>
    <div>
      <h4 style={{ color: 'white', marginBottom: '4px', fontSize: '0.95rem' }}>{title}</h4>
      <p style={{ color: '#a1a1aa', fontSize: '0.8rem', margin: 0 }}>{desc}</p>
    </div>
    <div style={{ color: '#5b4bf6', fontSize: '1.2rem' }}>{icon}</div>
  </div>
);

export default async function LeadsPage() {
  const leads = await getLeadsAction(); // Busca do Java

  return (
    <div style={{ padding: '30px', maxWidth: '1400px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 350px', gap: '30px' }}>
      
      {/* COLUNA ESQUERDA: LISTA */}
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <h1 style={{ color: 'white', fontSize: '1.5rem', fontWeight: 'bold' }}>Leads</h1>
          <div style={{ display: 'flex', gap: '10px' }}>
            <input placeholder="Buscar..." style={{ background: '#161822', border: '1px solid #2d2d3a', padding: '8px 12px', borderRadius: '6px', color: 'white' }} />
            <button style={{ background: '#2d2d3a', color: 'white', border: 'none', padding: '8px 16px', borderRadius: '6px' }}>Filtro</button>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {leads.length > 0 ? leads.map((lead: any) => (
            <div key={lead.id} style={{ background: '#1e1e2d', padding: '15px', borderRadius: '8px', border: '1px solid #2d2d3a', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#2d2d3a', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#a1a1aa' }}>👤</div>
                <div>
                  <h4 style={{ color: 'white', margin: 0 }}>{lead.customerName || 'Sem nome'}</h4>
                  <span style={{ color: '#a1a1aa', fontSize: '0.8rem' }}>{lead.phone} • {formatCurrency(lead.value)}</span>
                </div>
              </div>
              <div style={{ background: '#5b4bf6', color: 'white', fontSize: '0.75rem', padding: '4px 8px', borderRadius: '4px' }}>
                {lead.stage?.name || 'Novo'}
              </div>
            </div>
          )) : (
            <div style={{ textAlign: 'center', padding: '40px', color: '#a1a1aa' }}>Nenhum lead encontrado.</div>
          )}
        </div>
      </div>

      {/* COLUNA DIREITA: AÇÕES */}
      <div>
        <h3 style={{ color: '#a1a1aa', fontSize: '0.9rem', marginBottom: '15px', textTransform: 'uppercase', letterSpacing: '1px' }}>Ações Rápidas</h3>
        <ActionCard icon="➕" title="Adicionar lead" desc="Faça o cadastro manual" />
        <ActionCard icon="🗑️" title="Remover leads" desc="Exclua leads em massa" />
        <ActionCard icon="📥" title="Importações" desc="Visualize suas importações" />
        <ActionCard icon="📤" title="Exportar leads" desc="Baixe sua lista em CSV" />
      </div>

    </div>
  );
}