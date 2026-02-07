'use client';

import { useState } from "react";
import styles from "./ExportLeadModal.module.css";

export default function ExportLeadModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleExport = () => {
    setLoading(true);

    // Simulação do processo de exportação
    setTimeout(() => {
      // 1. Cria um CSV Fake
      const csvContent = "data:text/csv;charset=utf-8,Nome,Email,Telefone\nMatheus,matheus@teste.com,1199999999\nCliente 2,cliente@teste.com,1188888888";
      const encodedUri = encodeURI(csvContent);
      
      // 2. Dispara o Download
      const link = document.createElement("a");
      link.setAttribute("href", encodedUri);
      link.setAttribute("download", "leads.csv");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setLoading(false);
      setIsOpen(false);
    }, 1500); // 1.5 segundos para simular processamento
  };

  return (
    <>
      {/* 1. O Gatilho (Botão na Dashboard) */}
      <div className={styles.triggerCard} onClick={() => setIsOpen(true)}>
        <div>
          <h4 className={styles.triggerTitle}>Exportar leads</h4>
          <p className={styles.triggerDesc}>Exporte seus leads para um arquivo .CSV</p>
        </div>
        <div className={styles.triggerIcon}>📤</div>
      </div>

      {/* 2. O Modal Centralizado */}
      {isOpen && (
        <div className={styles.overlay} onClick={(e) => {
             if (e.target === e.currentTarget) setIsOpen(false)
        }}>
          <div className={styles.modal}>
            <div className={styles.header}>
              <h3 className={styles.title}>Confirmação</h3>
              <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>✕</button>
            </div>

            <div className={styles.body}>
              <p className={styles.messageTitle}>Tem certeza que quer exportar seus leads?</p>
              <p className={styles.messageDesc}>
                Um arquivo <strong>.csv</strong> será gerado e baixado automaticamente com todos os dados da sua base.
              </p>
            </div>

            <div className={styles.footer}>
              <button 
                className={styles.cancelBtn} 
                onClick={() => setIsOpen(false)}
                disabled={loading}
              >
                NÃO
              </button>
              <button 
                className={styles.confirmBtn} 
                onClick={handleExport}
                disabled={loading}
              >
                {loading ? "GERANDO..." : "SIM"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}