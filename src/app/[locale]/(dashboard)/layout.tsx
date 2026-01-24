// src/app/[locale]/(dashboard)/layout.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard | IndexCRM",
  description: "Gerencie seus leads e vendas",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#13131f', color: '#e1e1e6' }}>
      
      {/* SIDEBAR (Barra Lateral) */}
      <aside style={{ 
        width: '260px', 
        backgroundColor: '#181824', 
        borderRight: '1px solid #2d2d3a',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        position: 'fixed', // Fixa a barra
        height: '100vh',
        left: 0,
        top: 0
      }}>
        <div style={{ marginBottom: '30px', color: 'white', fontWeight: 'bold', fontSize: '1.2rem' }}>
          IndexCRM <span style={{ fontSize: '0.7rem', color: '#5b4bf6' }}>v3.0</span>
        </div>

        <nav style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <div style={{ color: 'white', background: '#5b4bf6', padding: '10px', borderRadius: '6px', cursor: 'pointer', fontWeight: 500 }}>
               📊 Dashboard
            </div>
            <div style={{ padding: '10px', cursor: 'pointer', color: '#a1a1aa' }}>🚀 Funis de vendas</div>
            <div style={{ padding: '10px', cursor: 'pointer', color: '#a1a1aa' }}>👥 Leads</div>
            <div style={{ padding: '10px', cursor: 'pointer', color: '#a1a1aa' }}>🔌 Integrações</div>
        </nav>

        <div style={{ marginTop: 'auto', paddingTop: '20px', borderTop: '1px solid #2d2d3a' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ width: '32px', height: '32px', background: '#5b4bf6', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold' }}>A</div>
                <div style={{ fontSize: '0.85rem' }}>
                    <div style={{ color: 'white' }}>Admin</div>
                    <div style={{ color: '#71717a', fontSize: '0.75rem' }}>admin@index.com</div>
                </div>
            </div>
        </div>
      </aside>

      {/* ÁREA DE CONTEÚDO PRINCIPAL */}
      <main style={{ flex: 1, marginLeft: '260px', padding: '0' }}>
        {children}
      </main>

    </div>
  );
}