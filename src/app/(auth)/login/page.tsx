"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import styles from "./login.module.css";

// --- ÍCONES SVG ---
const IconLightning = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>;
const IconHeadset = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M3 18v-6a9 9 0 0 1 18 0v6"></path><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path></svg>;
const IconUsers = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>;

const IconUserForm = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>;
const IconLock = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>;
const IconEye = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>;

export default function LoginPage() {
  const router = useRouter(); // <--- CHAME O HOOK
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulação de login
    setTimeout(() => {
      setLoading(false);
      router.push('/dashboard');
    }, 1500);
  };

  return (
    <div className={styles.container}>
      {/* HEADER: LOGO E RECURSOS */}
      <div className={styles.header}>
        <h1 className={styles.logo}>
          IndexCRM<span style={{color: "#6366f1"}}>.</span>
        </h1>
        <p className={styles.subtitle}>Automação Inteligente para seu Negócio</p>
        
        <div className={styles.features}>
          <div className={styles.featureItem}>
            <span className={styles.featureIcon}><IconLightning /></span>
            Automação
          </div>
          <div className={styles.featureItem}>
            <span className={styles.featureIcon}><IconHeadset /></span>
            SAC
          </div>
          <div className={styles.featureItem}>
            <span className={styles.featureIcon}><IconUsers /></span>
            CRM
          </div>
        </div>
      </div>

      {/* CARD DE LOGIN */}
      <div className={styles.card}>
        <h2 className={styles.cardTitle}>Entrar na sua conta</h2>
        <p className={styles.cardSubtitle}>Acesse sua plataforma de automação</p>

        <form onSubmit={handleSubmit} className={styles.form}>
          {/* Email */}
          <div className={styles.inputGroup}>
            <label className={styles.label}>Email de usuário</label>
            <div className={styles.inputWrapper}>
              <span className={styles.inputIconLeft}><IconUserForm /></span>
              <input 
                type="email" 
                className={styles.input} 
                placeholder="Ex: usuario@email.com"
                required 
              />
            </div>
          </div>

          {/* Senha */}
          <div className={styles.inputGroup}>
            <label className={styles.label}>Sua senha</label>
            <div className={styles.inputWrapper}>
              <span className={styles.inputIconLeft}><IconLock /></span>
              <input 
                type="password" 
                className={styles.input} 
                placeholder="••••••••"
                required 
              />
              <span className={styles.inputIconRight}><IconEye /></span>
            </div>
          </div>

          <Link href="#" className={styles.forgotPassword}>
            Esqueci minha senha
          </Link>

          <button type="submit" className={styles.button} disabled={loading}>
            {loading ? "Entrando..." : "ENTRAR"}
          </button>
        </form>

        <div className={styles.footer}>
          Não tem uma conta ainda? 
          <Link href="/register" className={styles.linkRegister}>
             Registrar agora
          </Link>
        </div>
      </div>
    </div>
  );
}