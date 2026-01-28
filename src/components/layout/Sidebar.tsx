"use client";

import Link from "next/link";
import { usePathname, useParams } from "next/navigation"; // <--- Importamos useParams
import { logoutAction } from "@/actions/auth-actions";
import styles from "./Sidebar.module.css";

// Ícones SVG (Mantive os mesmos)
const Icons = {
  Dashboard: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>,
  Funnels: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>,
  Flows: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><line x1="6" y1="9" x2="6" y2="15"/><circle cx="18" cy="18" r="3"/><path d="M6 9a9 9 0 0 1 9 9"/></svg>,
  Leads: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
  Integrations: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>,
  Settings: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.38a2 2 0 0 0-.73-2.73l-.15-.1a2 2 0 0 1-1-1.72v-.51a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>,
  Logout: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/></svg>
};

export function Sidebar() {
  const pathname = usePathname();
  const params = useParams(); 
  const locale = params.locale || 'pt-BR'; // <--- O SEGREDO: Pega 'pt-BR' ou 'en' da URL
// Função intermediária para chamar o logout
  const handleLogout = async () => {
    await logoutAction();
  };

const menuItems = [
    { name: "Dashboard", path: `/${locale}/dashboard`, icon: Icons.Dashboard },
    { name: "Funis de Vendas", path: `/${locale}/dashboard/funnels`, icon: Icons.Funnels },
    { name: "Fluxos", path: `/${locale}/dashboard/flows`, icon: Icons.Flows },
    { name: "Leads", path: `/${locale}/dashboard/leads`, icon: Icons.Leads },
    { name: "Páginas", path: `/${locale}/dashboard/pages`, icon: Icons.Dashboard }, // <--- NOVO
    { name: "Integrações", path: `/${locale}/dashboard/integrations`, icon: Icons.Integrations },
    { name: "Relatórios", path: `/${locale}/dashboard/reports`, icon: Icons.Dashboard }, // <--- NOVO
    { name: "Configurações", path: `/${locale}/dashboard/settings`, icon: Icons.Settings },
  ];

  return (
    <aside className={styles.aside}>
      <div className={styles.logoContainer}>
        <span className={styles.logoText}>Index CRM<span style={{color:'#6366f1'}}>.</span></span>
        <span className={styles.version}>Versão 3.0.102</span>
      </div>

      <nav className={styles.nav}>
        {menuItems.map((item) => {
          const Icon = item.icon;
          // Verifica se a URL atual COMEÇA com o caminho do link (para manter ativo nas subpáginas)
          const isActive = pathname === item.path || pathname.startsWith(`${item.path}/`);
          
          return (
            <Link 
              key={item.path} 
              href={item.path} 
              className={`${styles.navItem} ${isActive ? styles.active : ""}`}
            >
              <Icon />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>

      <div className={styles.userSection}>
        <div className={styles.userCard}>
          <div className={styles.avatar}>M</div>
          <div className={styles.userInfo}>
            <h4>Matheus S</h4>
            <p>Admin</p>
          </div>
        </div>

        {/* BOTÃO DE SAIR */}
        <button 
          type="button"
          onClick={handleLogout}
          className={styles.logoutBtn}>
          <Icons.Logout />
          Sair
        </button>
      </div>
    </aside>
  );
}