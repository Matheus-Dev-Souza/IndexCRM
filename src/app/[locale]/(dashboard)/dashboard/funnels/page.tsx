import Link from "next/link";

export default function FunnelsPage() {
  // Simulação de dados (depois buscaremos do Java via Server Action)
  const funnels = [
    { id: 1, name: "Funil Padrão", stages: 5, activeLeads: 12, totalValue: 15400.00 },
    { id: 2, name: "Funil de Marketing", stages: 4, activeLeads: 45, totalValue: 0.00 },
    { id: 3, name: "Parcerias & Influencers", stages: 3, activeLeads: 8, totalValue: 5000.00 },
  ];

  return (
    <div style={{ padding: '30px', maxWidth: '1400px', margin: '0 auto' }}>
      
      {/* Banner de Aviso (Padrão em todas as telas) */}
      <div style={{ background: '#008f39', padding: '12px', borderRadius: '6px', color: 'white', marginBottom: '30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
         <span style={{ fontSize: '0.9rem' }}>📢 Atenção: Novas automações de funil disponíveis.</span>
         <button style={{ background: 'rgba(255,255,255,0.2)', border: 'none', color: 'white', padding: '6px 12px', borderRadius: '4px', cursor: 'pointer', fontSize: '0.8rem', fontWeight: 'bold' }}>VER NOVIDADES</button>
      </div>

      {/* Cabeçalho */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
        <div>
           <h1 style={{ color: 'white', fontSize: '1.5rem', fontWeight: 'bold' }}>Funis de Vendas</h1>
           <p style={{ color: '#a1a1aa', fontSize: '0.9rem' }}>Gerencie suas etapas e processos comerciais</p>
        </div>
        <button style={{ background: '#5b4bf6', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', transition: 'background 0.2s' }}>
          <span>+</span> CRIAR NOVO FUNIL
        </button>
      </div>

      {/* Grid de Funis */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',