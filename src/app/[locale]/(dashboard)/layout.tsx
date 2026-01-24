import type { Metadata } from "next";
// Se você ainda não criou o componente Sidebar, vamos fazer uma estrutura básica aqui mesmo
// para garantir que funcione. Depois você pode mover para components/layout.
import styles from './page.module.css'; // Vamos reusar o CSS para simplificar ou criar um layout.module.css

export const metadata: Metadata = {
  title: "Dashboard | SellFlux Clone",
  description: "Dashboard gerenciador",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#13131f' }}>
      
      {/* SIDEBAR (Barra Lateral) */}
      <aside style={{ 
        width: '260px', 
        backgroundColor: '#181824', 
        borderRight: '1px solid #2d2d3a',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        color: '#a1a1aa'
      }}>
        <div style={{ marginBottom: '30px', color: 'white', fontWeight: 'bold', fontSize: '1.2rem' }}>
          IndexCRM <span style={{ fontSize: '0.7rem', color: '#5b4bf6' }}>v3.0.102</span>
        </div>

        <nav style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            {/* Itens do Menu */}
            <div style={{ color: 'white', background: '#5b4bf6', padding: '10px', borderRadius: '6px', cursor: 'pointer' }}>
               Dashboard
            </div>
            <div style={{ cursor: 'pointer' }}>Funis de vendas</div>
            <div style={{ cursor: 'pointer' }}>Fluxos</div>
            <div style={{ cursor: 'pointer' }}>Leads</div>
            <div style={{ cursor: 'pointer' }}>Integrações</div>
            <div style={{ cursor: 'pointer' }}>Páginas</div>
            <div style={{ cursor: 'pointer' }}>Relatórios</div>
        </nav>

        <div style={{ marginTop: 'auto', paddingTop: '20px', borderTop: '1px solid #2d2d3a' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ width: '32px', height: '32px', background: '#5b4bf6', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold' }}>M</div>
                <div style={{ fontSize: '0.85rem' }}>
                    <div style={{ color: 'white' }}>Matheus S</div>
                    <div>escolala.br@...</div>
                </div>
            </div>
        </div>
      </aside>

      {/* ÁREA DE CONTEÚDO PRINCIPAL */}
      <main style={{ flex: 1, overflowY: 'auto' }}>
        {children}
      </main>

    </div>
  );
}