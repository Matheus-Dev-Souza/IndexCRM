export default function FlowsPage() {
  return (
    <div style={{ padding: '30px', maxWidth: '1400px', margin: '0 auto' }}>
      
      {/* Banner de Aviso igual ao print */}
      <div style={{ background: '#008f39', padding: '12px', borderRadius: '6px', color: 'white', marginBottom: '30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
         <span>Atenção: Alteração nas condições de cobrança a partir de 2026.</span>
         <button style={{ background: 'rgba(255,255,255,0.2)', border: 'none', color: 'white', padding: '6px 12px', borderRadius: '4px', cursor: 'pointer', fontSize: '0.8rem' }}>ACESSAR COMUNICADO</button>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
        <div>
           <h1 style={{ color: 'white', fontSize: '1.5rem', fontWeight: 'bold' }}>Fluxo de venda individual</h1>
           <p style={{ color: '#a1a1aa', fontSize: '0.9rem' }}>Configure os seus fluxos de automação</p>
        </div>
        <button style={{ background: '#5b4bf6', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer' }}>+ CRIAR NOVA CAMPANHA</button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
         {/* Card de Exemplo 1 */}
         <div style={{ background: '#1e1e2d', borderRadius: '8px', border: '1px solid #2d2d3a', overflow: 'hidden' }}>
            <div style={{ padding: '20px', borderBottom: '1px solid #2d2d3a' }}>
               <span style={{ fontSize: '0.75rem', color: '#a1a1aa' }}>14 de out de 2025</span>
               <h3 style={{ color: 'white', margin: '5px 0 0 0' }}>Campanha Dezembro</h3>
            </div>
            <div style={{ padding: '12px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#161822' }}>
               <span style={{ background: '#15803d', color: 'white', padding: '2px 8px', borderRadius: '12px', fontSize: '0.75rem' }}>1 ativas</span>
               <span style={{ color: '#a1a1aa', cursor: 'pointer' }}>⋮</span>
            </div>
         </div>

         {/* Card de Exemplo 2 */}
         <div style={{ background: '#1e1e2d', borderRadius: '8px', border: '1px solid #2d2d3a', overflow: 'hidden' }}>
            <div style={{ padding: '20px', borderBottom: '1px solid #2d2d3a' }}>
               <span style={{ fontSize: '0.75rem', color: '#a1a1aa' }}>14 de out de 2025</span>
               <h3 style={{ color: 'white', margin: '5px 0 0 0' }}>Fluxo de Boas-vindas</h3>
            </div>
            <div style={{ padding: '12px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#161822' }}>
               <span style={{ background: '#3f3f46', color: '#a1a1aa', padding: '2px 8px', borderRadius: '12px', fontSize: '0.75rem' }}>0 ativas</span>
               <span style={{ color: '#a1a1aa', cursor: 'pointer' }}>⋮</span>
            </div>
         </div>
      </div>
    </div>
  );
}