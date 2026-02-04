// src/components/leads/LeadRowItem.tsx
import { formatCurrency, formatDate } from "@/lib/utils";

interface LeadRowProps {
  lead: {
    id: string;
    customerName: string;
    email: string;
    phone: string;
    createdAt?: string; // Data de criação
    tags?: string[];    // Tags (ex: "novo", "quente")
  };
}

export function LeadRowItem({ lead }: LeadRowProps) {
  // Gera iniciais para o avatar
  const initials = lead.customerName
    ? lead.customerName.substring(0, 2).toUpperCase()
    : "??";

  return (
    <div style={{
      background: '#18181b', // Fundo escuro (Zinc 900)
      border: '1px solid #27272a', // Borda sutil
      borderRadius: '8px',
      padding: '16px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: '10px',
      transition: 'border-color 0.2s',
      cursor: 'pointer'
    }}
    onMouseEnter={(e) => e.currentTarget.style.borderColor = '#5b4bf6'}
    onMouseLeave={(e) => e.currentTarget.style.borderColor = '#27272a'}
    >
      {/* Esquerda: Avatar e Infos */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
        {/* Avatar */}
        <div style={{
          width: '40px', height: '40px', borderRadius: '4px',
          background: '#e4e4e7', color: '#18181b',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontWeight: 'bold', fontSize: '0.9rem'
        }}>
          {initials}
        </div>

        {/* Textos */}
        <div>
          <h4 style={{ color: 'white', margin: 0, fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
            {lead.customerName}
            <span style={{ color: '#71717a', fontSize: '0.8rem', fontWeight: 'normal' }}>
              • {lead.email} • {lead.phone}
            </span>
          </h4>
          <span style={{ color: '#52525b', fontSize: '0.75rem', marginTop: '4px', display: 'block' }}>
            Criado em: {lead.createdAt ? formatDate(lead.createdAt) : 'Data desconhecida'}
          </span>
        </div>
      </div>

      {/* Direita: Tags e Ações */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        {/* Badge de Tag (Exemplo) */}
        <span style={{
          background: '#5b4bf6', color: 'white',
          fontSize: '0.7rem', padding: '2px 8px', borderRadius: '10px',
          fontWeight: 600
        }}>
          Novo
        </span>
        
        {/* Botão de Opções */}
        <button style={{ background: 'transparent', border: 'none', color: '#a1a1aa', cursor: 'pointer', fontSize: '1.2rem' }}>
          ⋮
        </button>
      </div>
    </div>
  );
}