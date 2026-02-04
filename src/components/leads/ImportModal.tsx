'use client';

import { useState } from "react";
import styles from "./NewLeadModal.module.css"; // Reutilizando CSS do modal existente

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

    // Aqui conectaríamos com o Backend Java depois
    // const formData = new FormData();
    // formData.append("file", file);
    // await fetch('/api/leads/import', { method: 'POST', body: formData });

    // Simulação de tempo de upload
    setTimeout(() => {
      alert(`Arquivo "${file.name}" enviado para processamento!`);
      setLoading(false);
      setIsOpen(false);
      setFile(null);
    }, 2000);
  };

  return (
    <>
      {/* O GATILHO (Card lateral) */}
      <div className={styles.triggerCard} onClick={() => setIsOpen(true)}>
        <div>
          <h4 className={styles.triggerTitle}>Importações</h4>
          <p className={styles.triggerDesc}>Visualize suas importações ou envie CSV.</p>
        </div>
        <div className={styles.triggerIcon}>📥</div>
      </div>

      {/* O MODAL */}
      {isOpen && (
        <div className={styles.overlay} onClick={(e) => {
             if (e.target === e.currentTarget) setIsOpen(false)
        }}>
          <div className={styles.modal} style={{ maxWidth: '600px' }}>
            <div className={styles.header}>
              <h3 className={styles.title}>Importar Leads (CSV)</h3>
              <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>✕</button>
            </div>

            <div className={styles.body}>
              <p style={{ color: '#a1a1aa', fontSize: '0.9rem', lineHeight: '1.5' }}>
                Selecione um arquivo <strong>.csv</strong> ou <strong>.xlsx</strong> para importar leads em massa.
                Certifique-se de que o arquivo tenha colunas como <em>Nome, Email e Telefone</em>.
              </p>

              {/* Área de Upload */}
              <div style={{
                border: '2px dashed #2d2d3a',
                borderRadius: '8px',
                padding: '30px',
                textAlign: 'center',
                background: '#09090b',
                cursor: 'pointer'
              }}>
                <input 
                  type="file" 
                  accept=".csv, .xlsx" 
                  onChange={handleFileChange}
                  style={{ display: 'none' }} 
                  id="file-upload"
                />
                <label htmlFor="file-upload" style={{ cursor: 'pointer', display: 'block' }}>
                  <div style={{ fontSize: '2rem', marginBottom: '10px' }}>📂</div>
                  {file ? (
                    <span style={{ color: '#5b4bf6', fontWeight: 'bold' }}>{file.name}</span>
                  ) : (
                    <span style={{ color: '#a1a1aa' }}>Clique para selecionar o arquivo</span>
                  )}
                </label>
              </div>

              {/* Barra de Progresso Fictícia (se estiver carregando) */}
              {loading && (
                <div style={{ width: '100%', background: '#2d2d3a', height: '6px', borderRadius: '3px', marginTop: '10px' }}>
                  <div style={{ width: '60%', background: '#5b4bf6', height: '100%', borderRadius: '3px', transition: 'width 0.5s' }}></div>
                </div>
              )}
            </div>

            <div className={styles.footer}>
              <button className={styles.cancelBtn} onClick={() => setIsOpen(false)}>CANCELAR</button>
              <button 
                className={styles.createBtn} 
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