export default function ReportsPage() {
  return (
    <div style={{ padding: '30px', maxWidth: '1400px', margin: '0 auto', color: '#e1e1e6' }}>
      
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
         <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Relatório de Leads</h1>
         
         <div style={{ display: 'flex', gap: '10px' }}>
            <div style={{ background: '#1e1e2d', padding: '8px 12px', borderRadius: '6px', border: '1px solid #2d2d3a', fontSize: '0.9rem' }}>📅 Últimos 30 dias</div>
            <button style={{ background: '#5b4bf6', border: 'none', color: 'white', padding: '8px 16px', borderRadius: '6px', fontWeight: 'bold' }}>Filtrar</button>
         </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '20px' }}>
         
         {/* Gráfico Principal (Simulado) */}
         <div style={{ background: '#1e1e2d', padding: '20px', borderRadius: '12px', border: '1px solid #2d2d3a', height: '400px', display: 'flex', flexDirection: 'column' }}>
            <h3 style={{ marginBottom: '20px' }}>Entrada de Leads</h3>
            <div style={{ flex: 1, display: 'flex', alignItems: 'flex-end', gap: '10px', paddingBottom: '20px', borderBottom: '1px solid #2d2d3a' }}>
               {/* Barras do Gráfico */}
               {[40, 60, 30, 80, 50, 90, 70, 45, 60, 100, 80, 50].map((h, i) => (
                  <div key={i} style={{ flex: 1, background: '#3b82f6', height: `${h}%`, borderRadius: '4px 4px 0 0', opacity: 0.8 }}></div>
               ))}
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px', color: '#a1a1aa', fontSize: '0.8rem' }}>
               <span>01/01</span><span>15/01</span><span>30/01</span>
            </div>
         </div>

         {/* Painel Lateral (Stats e Tags) */}
         <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            
            {/* Card Total */}
            <div style={{ background: '#161822', padding: '20px', borderRadius: '12px', border: '1px solid #2d2d3a' }}>
               <span style={{ color: '#a1a1aa', fontSize: '0.9rem' }}>TOTAL DE LEADS</span>
               <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'white', margin: '5px 0' }}>6.834</div>
               <div style={{ width: '100%', height: '6px', background: '#2d2d3a', borderRadius: '3px', marginTop: '10px' }}>
                  <div style={{ width: '68%', height: '100%', background: '#6366f1', borderRadius: '3px' }}></div>
               </div>
               <div style={{ textAlign: 'right', fontSize: '0.8rem', color: '#6366f1', marginTop: '5px' }}>68% ativos</div>
            </div>

            {/* Lista de Tags (Barras Horizontais) */}
            <div style={{ background: '#1e1e2d', padding: '20px', borderRadius: '12px', border: '1px solid #2d2d3a', flex: 1 }}>
               <h3 style={{ fontSize: '1rem', marginBottom: '20px' }}>Leads por Tag</h3>
               
               <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                  {[
                    { label: 'Telefone', val: '6.708', pct: '95%' },
                    { label: 'Email', val: '6.298', pct: '88%' },
                    { label: 'Ativo WhatsApp', val: '324', pct: '15%' },
                    { label: 'Importado CSV', val: '227', pct: '10%' }
                  ].map(tag => (
                    <div key={tag.label}>
                       <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px', fontSize: '0.85rem' }}>
                          <span>{tag.label}</span>
                          <span style={{ fontWeight: 'bold' }}>{tag.val}</span>
                       </div>
                       <div style={{ width: '100%', height: '6px', background: '#2d2d3a', borderRadius: '3px' }}>
                          <div style={{ width: tag.pct, height: '100%', background: '#5b4bf6', borderRadius: '3px' }}></div>
                       </div>
                    </div>
                  ))}
               </div>
            </div>

         </div>
      </div>
    </div>
  );
}