export default function IntegrationsPage() {
  const integrations = [
    { name: "Leads Para Daniel", platform: "Facebook", count: 1 },
    { name: "Página Home da Setebit", platform: "Custom", count: 1 },
    { name: "Primeiro depósito", platform: "Web", count: 3 },
    { name: "Saque Pago", platform: "Bank", count: 4 },
    { name: "Depósito criado(qrcode)", platform: "Pix", count: 17 },
  ];

  return (
    <div style={{ padding: '30px', maxWidth: '1400px', margin: '0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
        <div>
           <h1 style={{ color: 'white', fontSize: '1.5rem', fontWeight: 'bold' }}>Minhas Integrações</h1>
           <p style={{ color: '#a1a1aa', fontSize: '0.9rem' }}>Conecte seu funil com as principais plataformas</p>
        </div>
        <button style={{ background: '#5b4bf6', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer' }}>+ NOVA INTEGRAÇÃO</button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '20px' }}>
        {integrations.map((item, index) => (
          <div key={index} style={{ background: '#0f172a', borderRadius: '8px', border: '1px solid #1e293b', padding: '20px', display: 'flex', alignItems: 'center', gap: '15px', cursor: 'pointer', transition: 'border-color 0.2s' }}>
             <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#3b82f6', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold' }}>
               {item.platform[0]}
             </div>
             <div>
               <h4 style={{ color: 'white', margin: '0 0 4px 0', fontSize: '0.95rem' }}>{item.name}</h4>
               <span style={{ color: '#64748b', fontSize: '0.8rem' }}>Leads: {item.count}</span>
             </div>
          </div>
        ))}
      </div>
    </div>
  );
}