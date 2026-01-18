'use client';

import { useState } from 'react';
import Link from 'next/link';
import { registerAction } from '@/actions/auth-actions';
import styles from '../components/register.module.css'; // Reutilizando CSS
import { useParams } from 'next/navigation';

export default function RegisterComponent() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const params = useParams();
  const locale = params.locale || 'pt-BR';

  async function handleRegister(formData: FormData) {
    setLoading(true);
    setError("");
    
    // Validação simples
    const pass = formData.get("password");
    const confirm = formData.get("confirmPassword");
    
    if (pass !== confirm) {
        setError("As senhas não conferem");
        setLoading(false);
        return;
    }

    const result = await registerAction(formData);

    if (result?.error) {
      setError(result.error);
      setLoading(false);
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.logo}>Sell<span>Flux</span>.</h1>
      </div>

      <div className={styles.card}>
        <h2 className={styles.cardTitle}>Criar Conta</h2>
        
        {error && <div style={{color: '#ff4444', textAlign: 'center'}}>{error}</div>}

        <form action={handleRegister} className={styles.form}>
          <div className={styles.inputGroup}>
            <label className={styles.label}>Nome</label>
            <div className={styles.inputWrapper}>
              <input name="name" type="text" className={styles.input} required />
            </div>
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>E-mail</label>
            <div className={styles.inputWrapper}>
              <input name="email" type="email" className={styles.input} required />
            </div>
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>Senha</label>
            <div className={styles.inputWrapper}>
              <input name="password" type="password" className={styles.input} required />
            </div>
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>Confirmar Senha</label>
            <div className={styles.inputWrapper}>
              <input name="confirmPassword" type="password" className={styles.input} required />
            </div>
          </div>

          <button type="submit" className={styles.submitButton} disabled={loading}>
            {loading ? "Criando..." : "INICIAR JORNADA"}
          </button>
        </form>

        <div className={styles.footer}>
          Já tem conta? <Link href={`/${locale}/sign-in`} className={styles.link}>Fazer login</Link>
        </div>
      </div>
    </div>
  );
}