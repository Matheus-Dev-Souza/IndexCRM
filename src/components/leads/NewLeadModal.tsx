'use client';

import { useState } from "react";
import styles from "./NewLeadModal.module.css";
import { createLeadAction } from "@/actions/lead-actions";

export default function NewLeadModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(formData: FormData) {
    setLoading(true);
    // Chama a Server Action
    const result = await createLeadAction(formData);
    setLoading(false);

    if (result?.success) {
      setIsOpen(false); // Fecha o modal se deu certo
    } else {
      alert("Erro ao criar lead: " + result?.error);
    }
  }

  return (
    <>
      {/* 1. O Gatilho (Card Visual na Dashboard) */}
      <div className={styles.triggerCard} onClick={() => setIsOpen(true)}>
        <div>
          <h4 className={styles.triggerTitle}>Adicionar lead</h4>
          <p className={styles.triggerDesc}>Faça o cadastro de um novo lead.</p>
        </div>
        <div className={styles.triggerIcon}>👤+</div>
      </div>

      {/* 2. O Modal (Só aparece se isOpen for true) */}
      {isOpen && (
        <div className={styles.overlay} onClick={(e) => {
             // Fecha se clicar fora
             if (e.target === e.currentTarget) setIsOpen(false)
        }}>
          
          <div className={styles.modal}>
            <div className={styles.header}>
              <h3 className={styles.title}>Novo lead</h3>
              <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>✕</button>
            </div>

            <form action={handleSubmit}>
              <div className={styles.body}>
                
                {/* Nome */}
                <div className={styles.inputGroup}>
                  <label className={styles.label}>Nome</label>
                  <input name="name" type="text" className={styles.input} placeholder="Ex: Matheus Souza" required />
                </div>

                {/* Email */}
                <div className={styles.inputGroup}>
                  <label className={styles.label}>E-mail</label>
                  <input name="email" type="email" className={styles.input} placeholder="cliente@email.com" required />
                </div>

                {/* Telefone com estilo visual */}
                <div className={styles.inputGroup}>
                  <label className={styles.label}>Telefone</label>
                  <div className={styles.phoneWrapper}>
                    <span className={styles.prefix}>BR</span>
                    <input name="phone" type="text" className={styles.phoneInput} placeholder="(11) 99999-9999" required />
                  </div>
                </div>

              </div>

              <div className={styles.footer}>
                <button type="button" className={styles.cancelBtn} onClick={() => setIsOpen(false)}>
                  CANCELAR
                </button>
                <button type="submit" className={styles.createBtn} disabled={loading}>
                  {loading ? "SALVANDO..." : "CRIAR"}
                </button>
              </div>
            </form>
          </div>

        </div>
      )}
    </>
  );
}