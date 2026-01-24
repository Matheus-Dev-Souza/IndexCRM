import { DealCard } from './deal-card';

// Tipagem provisória (ajuste conforme seu retorno do Java)
interface Lead {
  id: string;
  title: string;
  value: number;
  customerName: string;
  priority: string;
  stage: { id: string; name: string };
}

export function KanbanBoard({ leads }: { leads: Lead[] }) {
  // Simulação de colunas (depois buscaremos do banco)
  const stages = [
    { name: "Novo Lead" },
    { name: "Contato Feito" },
    { name: "Proposta" },
    { name: "Ganho" }
  ];

  return (
    <div style={{ display: 'flex', gap: '16px', overflowX: 'auto', paddingBottom: '20px' }}>
      {stages.map((stage) => {
        // Filtra leads desta coluna (lógica simples baseada no nome por enquanto)
        const stageLeads = leads.filter(l => l.stage?.name === stage.name);

        return (
          <div key={stage.name} style={{ minWidth: '280px', background: '#161822', padding: '12px', borderRadius: '12px', border: '1px solid #26293b' }}>
            <h3 style={{ color: '#e1e1e6', fontSize: '0.9rem', marginBottom: '12px', fontWeight: 'bold' }}>
              {stage.name} <span style={{color:'#71717a', fontSize:'0.8rem'}}>({stageLeads.length})</span>
            </h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {stageLeads.length > 0 ? (
                stageLeads.map(lead => (
                  <DealCard 
                    key={lead.id}
                    title={lead.title}
                    customerName={lead.customerName}
                    value={lead.value}
                    priority={lead.priority}
                  />
                ))
              ) : (
                <div style={{textAlign:'center', padding:'20px', color:'#3f3f46', fontSize:'0.8rem', border:'1px dashed #2d2d3a', borderRadius:'8px'}}>
                  Vazio
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}