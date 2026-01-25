export default function PagesProjectPage() {
  return (
    <div style={{ padding: '30px', maxWidth: '1400px', margin: '0 auto', color: '#e1e1e6' }}>
      
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
         <div>
            <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Páginas do projeto</h1>
            <p style={{ color: '#a1a1aa', fontSize: '0.9rem' }}>Acesse e configure as suas páginas de captura.</p>
         </div>
         <button style={{ background: '#5b4bf6', border: 'none', color: 'white', padding: '10px 20px', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer' }}>+ NOVA PÁGINA</button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
         
         {/* Card de Página 1 */}
         <div style={{ background: '#1e1e2d', borderRadius: '12px', border: '1px solid #2d2d3a', overflow: 'hidden', cursor: 'pointer', transition: 'transform 0.2s' }}>
            {/* Thumbnail simulada */}
            <div style={{ height: '160px', background: '#0f172a', display: 'flex', alignItems: 'center', justifyContent: 'center', borderBottom: '1px solid #2d2d3a' }}>
               <span style={{ fontSize: '3rem' }}>📄</span>
            </div>
            
            <div style={{ padding: '15px' }}>
               <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                  <h3 style={{ fontSize: '1rem', margin: '0 0 5px 0' }}>Página de Captura V1</h3>
                  <span style={{ color: '#a1a1aa' }}>⋮</span>
               </div>
               <span style={{ fontSize: '0.8rem', color: '#6366f1' }}>/home-captura</span>
               
               <div style={{ marginTop: '15px', display: 'flex', gap: '10px' }}>
                  <button style={{ flex: 1, background: '#2d2d3a', border: 'none', color: 'white', padding: '6px', borderRadius: '4px', fontSize: '0.8rem' }}>Editar</button>
                  <button style={{ flex: 1, background: '#2d2d3a', border: 'none', color: 'white', padding: '6px', borderRadius: '4px', fontSize: '0.8rem' }}>Visualizar</button>
               </div>
            </div>
         </div>

      </div>
    </div>
  );
}