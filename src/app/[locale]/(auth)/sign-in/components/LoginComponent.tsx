'use client';

import { useState } from "react";
import Link from "next/link";
import { loginAction } from "@/actions/auth-actions"; // Sua Server Action
import styles from "./login.module.css";
import { useParams } from "next/navigation";

export default function LoginComponent() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const params = useParams();
  const locale = params.locale || 'pt-BR'; // Pega o idioma da URL

  async function handleLogin(formData: FormData) {
    setLoading(true);
    setError("");

    const result = await loginAction(formData);

    if (result?.error) {
      setError(result.error);
      setLoading(false);
    }
    // Se sucesso, o redirect acontece no server action
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.logo}>Sell<span>Flux</span>.</h1>
        <p className={styles.subtitle}>Automação Inteligente para seu Negócio</p>
      </div>

      <div className={styles.card}>
        <h2 className={styles.cardTitle}>Acessar Conta</h2>
        <p className={styles.cardDesc}>Entre com suas credenciais abaixo</p>

        {error && <div style={{color: '#ff4444', textAlign: 'center', marginBottom: '10px'}}>{error}</div>}

        <form action={handleLogin} className={styles.form}>
          <div className={styles.inputGroup}>
            <label className={styles.label}>E-mail</label>
            <div className={styles.inputWrapper}>
              <span className={styles.iconLeft}>✉️</span>
              <input name="email" type="email" className={styles.input} placeholder="seu@email.com" required />
            </div>
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>Senha</label>
            <div className={styles.inputWrapper}>
              <span className={styles.iconLeft}>🔒</span>
              <input name="password" type="password" className={styles.input} placeholder="••••••••" required />
            </div>
          </div>

          <button type="submit" className={styles.submitButton} disabled={loading}>
            {loading ? "Entrando..." : "ENTRAR"}
          </button>
        </form>

        <div className={styles.footer}>
          Não tem conta? 
          {/* Note o link dinâmico com o locale */}
          <Link href={`/${locale}/register`} className={styles.link}> Registrar agora</Link>
        </div>
      </div>
    </div>
  );
}