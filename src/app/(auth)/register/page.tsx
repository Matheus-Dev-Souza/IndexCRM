'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import styles from './register.module.css';

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className={styles.container}>
      
      {/* HEADER / LOGO */}
      <div className={styles.header}>
        <div className={styles.logo}>Index<span>CRM</span>.</div>
        <p className={styles.subtitle}>
          Inicie agora a sua jornada na plataforma mais completa de Funil de Vendas do mercado
        </p>
      </div>

      {/* CARD DE CADASTRO */}
      <div className={styles.card}>
        <h1 className={styles.cardTitle}>Criar conta</h1>
        <p className={styles.cardDesc}>Comece sua jornada de automação hoje</p>

        <form>
          {/* NOME */}
          <div className={styles.inputGroup}>
            <label className={styles.label}>Nome</label>
            <div className={styles.inputWrapper}>
              {/* Ícone Usuário */}
              <span className={styles.iconLeft}>👤</span> 
              <input 
                type="text" 
                placeholder="Digite aqui seu nome completo..." 
                className={styles.input}
              />
            </div>
          </div>

          {/* EMAIL */}
          <div className={styles.inputGroup}>
            <label className={styles.label}>E-mail</label>
            <div className={styles.inputWrapper}>
              {/* Ícone Carta */}
              <span className={styles.iconLeft}>✉️</span>
              <input 
                type="email" 
                placeholder="seu@email.com" 
                className={styles.input}
              />
            </div>
          </div>

          {/* TELEFONE (Com seletor de país) */}
          <div className={styles.inputGroup}>
            <label className={styles.label}>Telefone</label>
            <div className={styles.phoneWrapper}>
              <select className={styles.countrySelect}>
                <option>🇧🇷 +55</option>
                <option>🇺🇸 +1</option>
              </select>
              <input 
                type="tel" 
                placeholder="(00) 00000-0000" 
                className={styles.input}
                style={{ paddingLeft: '15px' }} // Remove padding do ícone pois não tem aqui
              />
            </div>
          </div>

          {/* SENHA E CONFIRMAR (Lado a lado) */}
          <div className={styles.row}>
            <div className={styles.inputGroup}>
              <label className={styles.label}>Senha</label>
              <div className={styles.inputWrapper}>
                <span className={styles.iconLeft}>🔒</span>
                <input 
                  type={showPassword ? "text" : "password"}
                  placeholder="********" 
                  className={styles.input}
                />
                <button 
                  type="button" 
                  className={styles.iconRight}
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "👁️" : "👁️‍🗨️"}
                </button>
              </div>
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.label}>Confirmar senha</label>
              <div className={styles.inputWrapper}>
                <span className={styles.iconLeft}>🔒</span>
                <input 
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="********" 
                  className={styles.input}
                />
                 <button 
                  type="button" 
                  className={styles.iconRight}
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                   {showConfirmPassword ? "👁️" : "👁️‍🗨️"}
                </button>
              </div>
            </div>
          </div>

          {/* TERMOS */}
          <div className={styles.termsGroup}>
            <input type="checkbox" id="terms" className={styles.checkbox} />
            <label htmlFor="terms">
              Eu aceito os <a href="#" className={styles.link}>Termos de Uso</a> e as <a href="#" className={styles.link}>Políticas de privacidade</a>
            </label>
          </div>

          {/* BOTÃO */}
          <button type="submit" className={`${styles.submitButton} ${styles.submitButtonActive}`}>
            Iniciar jornada
          </button>
        </form>

        {/* RODAPÉ DO CARD */}
        <div className={styles.footer}>
          Já possui uma conta? <Link href="/login" className={styles.link}>Fazer login</Link>
        </div>
      </div>
    </div>
  );
}