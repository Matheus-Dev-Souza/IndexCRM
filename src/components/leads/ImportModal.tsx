'use client';

import { useState } from "react";
import styles from "./ImportModal.module.css";

export default function ImportModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleImport = async () => {
    if (!file) return;
    setLoading(true);

    // Simulação de tempo de upload
    setTimeout(() => {
      alert(`Arquivo "${file.name}" enviado para processamento com sucesso!`);
      setLoading(false);
      setIsOpen(false);
      setFile(null);
    }, 2000);
  };

  // Reseta estado ao fechar
  const handleClose = () => {
    setIsOpen(false);
    setFile(null);
    setLoading(false);
  };

  return (
    <>
      {/* 1. GATILHO (Card lateral) */}
      <div className={styles.triggerCard} onClick={() => setIsOpen(true)}>
        <div>
          <h4 className={styles.triggerTitle}>Importações</h4>
          <p className={styles.triggerDesc}>Visualize suas importações ou envie CSV.</p>
        </div>
        <div className={styles.triggerIcon}>📥</div>
      </div>

      {/* 2. MODAL CENTRALIZADO */}
      {isOpen && (
        <div className={styles.overlay} onClick={(e) => {
             if (e.target === e.currentTarget) handleClose();
        }}>
          <div className={styles.modal}>
            
            {/* Header */}
            <div className={styles.header}>
              <h3 className={styles.title}>Importar Leads (CSV)</h3>
              <button className={styles.closeBtn} onClick={handleClose}>✕</button>
            </div>

            {/* Body */}
            <div className={styles.body}>
              <p className={styles.description}>
                Selecione um arquivo <strong>.csv</strong> ou <strong>.xlsx</strong> para importar leads em massa.
                <br />Certifique-se de que o arquivo tenha colunas como <em>Nome, Email e Telefone</em>.
              </p>

              {/* Área de Upload Customizada */}
              <label htmlFor="file-upload" className={styles.uploadArea}>
                <span className={styles.uploadIcon}>📂</span>
                <input 
                  id="file-upload"
                  type="file" 
                  accept=".csv, .xlsx" 
                  onChange={handleFileChange}
                  className={styles.hiddenInput}
                />
                
                {file ? (
                  <span className={styles.fileName}>{file.name}</span>
                ) : (
                  <span className={styles.placeholder}>Clique para selecionar o arquivo</span>
                )}
              </label>

              {/* Barra de Progresso (aparece só carregando) */}
              {loading && (
                <div className={`${styles.progressBarBg} ${styles.loading}`}>
                  <div className={styles.progressBarFill}></div>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className={styles.footer}>
              <button className={styles.cancelBtn} onClick={handleClose}>
                CANCELAR
              </button>
              <button 
                className={styles.importBtn} 
                onClick={handleImport}
                disabled={!file || loading}
              >
                {loading ? "IMPORTANDO..." : "IMPORTAR AGORA"}
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
}