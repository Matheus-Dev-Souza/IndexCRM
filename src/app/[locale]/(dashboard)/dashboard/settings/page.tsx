export default function SettingsPage() {
  return (
    <div style={{ padding: '30px', maxWidth: '1400px', margin: '0 auto', color: '#e1e1e6' }}>
      
      <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '10px' }}>Configurações</h1>
      <p style={{ color: '#a1a1aa', marginBottom: '30px' }}>Gerencie os dados da sua conta e preferências.</p>

      <div style={{ display: 'grid', gridTemplateColumns: '250px 1fr', gap: '30px' }}>
        
        {/* Menu Lateral de Configurações */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
           {['Perfil', 'Empresa', 'Cobrança', 'Notificações', 'Membros'].map((item, index) => (
             <div key={item} style={{ 
               padding: '10px 15px', 
               borderRadius: '6px', 
               background: index === 0 ? '#1e1b4b' : 'transparent', 
               color: index === 0 ? '#818cf8' : '#a1a1aa',
               cursor: 'pointer',
               fontWeight: index === 0 ? 'bold' : 'normal',
               borderLeft: index === 0 ? '3px solid #6366f1' : '3px solid transparent'
             }}>
               {item}
             </div>
           ))}
        </div>

        {/* Área de Conteúdo (Formulário) */}
        <div style={{ background: '#1e1e2d', padding: '30px', borderRadius: '12px', border: '1px solid #2d2d3a' }}>
           <h3 style={{ borderBottom: '1px solid #2d2d3a', paddingBottom: '15px', marginBottom: '20px' }}>Meu Perfil</h3>
           
           <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '30px' }}>
              <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: '#6366f1', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', fontWeight: 'bold' }}>M</div>
              <button style={{ background: '#2d2d3a', border: '1px solid #3f3f46', color: 'white', padding: '8px 16px', borderRadius: '6px', cursor: 'pointer' }}>Alterar Foto</button>
           </div>

           <form style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              <div>
                 <label style={{ display: 'block', color: '#a1a1aa', marginBottom: '8px', fontSize: '0.9rem' }}>Nome Completo</label>
                 <input type="text" defaultValue="Matheus S" style={{ width: '100%', padding: '12px', background: '#161822', border: '1px solid #2d2d3a', borderRadius: '6px', color: 'white' }} />
              </div>
              <div>
                 <label style={{ display: 'block', color: '#a1a1aa', marginBottom: '8px', fontSize: '0.9rem' }}>E-mail</label>
                 <input type="email" defaultValue="admin@index.com" disabled style={{ width: '100%', padding: '12px', background: '#161822', border: '1px solid #2d2d3a', borderRadius: '6px', color: '#71717a', cursor: 'not-allowed' }} />
              </div>
              <div style={{ gridColumn: 'span 2' }}>
                 <button type="button" style={{ background: '#5b4bf6', color: 'white', border: 'none', padding: '12px 24px', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer' }}>Salvar Alterações</button>
              </div>
           </form>
        </div>

      </div>
    </div>
  );
}