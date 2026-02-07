'use client';

import { useState } from "react";
import styles from "./SelectLeadsModal.module.css";

type ViewState = 'MENU' | 'EDIT' | 'EXPORT';

export default function SelectLeadsModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [view, setView] = useState<ViewState>('MENU');
  
  // Estados de Seleção
  const [selectAll, setSelectAll] = useState(false);
  
  // Estados de Edição
  const [tagInput, setTagInput] = useState("");
  const [advancedOpen, setAdvancedOpen] = useState(true);

  // Estados de Exportação
  const [exportFormat, setExportFormat] = useState<'xlsx' | 'csv'>('csv');

  const handleClose = () => {
    setIsOpen(false);
    setView('MENU'); // Reseta a view ao fechar
  };

  const handleSaveEdit = () => {
    alert("Edições salvas com sucesso!");
    handleClose();
  };

  const handleExportConfirm = () => {
    alert(`Exportando dados para .${exportFormat}... \nUm e-mail será enviado.`);
    handleClose();
  };

  return (
    <>
      {/* 1. GATILHO (Card na Dashboard) */}
      <div className={styles.triggerCard} onClick={() => setIsOpen(true)}>
        <div>
          <h4 className={styles.triggerTitle}>Seleção de leads</h4>
          <p className={styles.triggerDesc}>Selecione mais de um lead para configurar</p>
        </div>
        <div className={styles.triggerIcon}>✓=</div>
      </div>

      {/* 2. MODAL LATERAL */}
      {isOpen && (
        <div className={styles.overlay} onClick={(e) => {
             if (e.target === e.currentTarget) handleClose()
        }}>
          <div className={styles.modal}>
            
            {/* VIEW 1: MENU PRINCIPAL */}
            {view === 'MENU' && (
              <>
                <div className={styles.header}>
                  <h3 className={styles.title}>Seleção de leads</h3>
                  <button className={styles.closeBtn} onClick={handleClose}>FECHAR ✕</button>
                </div>

                <div className={styles.body}>
                  <p className={styles.sectionLabel} style={{fontSize: '0.9rem', color: 'white'}}>
                    Selecione mais de um lead para configurar
                  </p>

                  {/* Botões de Ação Principais */}
                  <div className={styles.selectionRow}>
                    <div 
                      className={`${styles.selectBox} ${selectAll ? styles.active : ''}`}
                      onClick={() => setSelectAll(!selectAll)}
                    >
                      <div style={{
                        width: '18px', height: '18px', 
                        border: '2px solid #71717a', borderRadius: '50%',
                        background: selectAll ? 'white' : 'transparent'
                      }}></div>
                      SELECIONAR TODOS
                    </div>
                    
                    <div className={styles.selectBox} onClick={() => setView('EDIT')}>
                      <span>✏️</span> EDITAR LEADS
                    </div>
                  </div>

                  <button className={styles.exportBtn} onClick={() => setView('EXPORT')}>
                    📥 EXPORTAR LEADS SELECIONADOS
                  </button>
                </div>
              </>
            )}

            {/* VIEW 2: EDIÇÃO EM MASSA */}
            {view === 'EDIT' && (
              <>
                <div className={styles.header}>
                  <h3 className={styles.title}>Edição em massa</h3>
                  <button className={styles.closeBtn} onClick={handleClose}>FECHAR ✕</button>
                </div>

                <div className={styles.body}>
                  <button className={styles.backBtn} onClick={() => setView('MENU')}>← Voltar</button>

                  {/* Tags */}
                  <div>
                    <label className={styles.sectionLabel}>Tags</label>
                    <p className={styles.sectionLabel} style={{fontSize:'0.75rem'}}>As tags abaixo serão adicionadas aos leads selecionados.</p>
                    <div className={styles.tagSelectWrapper}>
                      <select className={styles.tagSelect} value={tagInput} onChange={e => setTagInput(e.target.value)}>
                        <option>Selecione uma tag...</option>
                        <option>cliente-vip</option>
                        <option>novo-lead</option>
                      </select>
                      <button className={styles.addTagBtn}>+</button>
                    </div>
                  </div>

                  {/* Configurações Avançadas (Danger Zone) */}
                  <div className={styles.dangerZone}>
                    <div className={styles.dangerTitle} onClick={() => setAdvancedOpen(!advancedOpen)}>
                      Configurações avançadas <span>{advancedOpen ? '▲' : '▼'}</span>
                    </div>
                    
                    {advancedOpen && (
                      <div style={{marginTop: '15px'}}>
                        <label className={styles.sectionLabel} style={{color:'white'}}>Excluir leads selecionados</label>
                        <span className={styles.dangerDesc}>O botão abaixo é responsável por excluir apenas os leads selecionados.</span>
                        <button className={styles.excludeBtn} onClick={() => alert('Excluindo...')}>
                          EXCLUIR
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                <div className={styles.footer}>
                  <button className={styles.primaryBtn} onClick={handleSaveEdit}>
                    SALVAR
                  </button>
                </div>
              </>
            )}

            {/* VIEW 3: CONFIRMAÇÃO DE EXPORTAÇÃO */}
            {view === 'EXPORT' && (
              <>
                <div className={styles.header}>
                  <h3 className={styles.title}>Confirmação</h3>
                  <button className={styles.closeBtn} onClick={handleClose}>✕</button>
                </div>

                <div className={styles.body}>
                  <button className={styles.backBtn} onClick={() => setView('MENU')}>← Voltar</button>
                  
                  <p style={{color:'#e4e4e7', fontSize:'0.9rem', lineHeight:'1.5'}}>
                    <strong>Você está prestes a exportar os dados selecionados</strong><br/>
                    Para garantir total transparência, notificaremos todos os membros da equipe por e-mail sobre esta exportação. Deseja prosseguir?
                  </p>

                  {/* Opções de Exportação */}
                  <div 
                    className={`${styles.exportOption} ${exportFormat === 'xlsx' ? styles.selected : ''}`}
                    onClick={() => setExportFormat('xlsx')}
                  >
                    <span className={styles.exportIcon}>📊</span> Exportar dados para arquivo .xlsx
                  </div>

                  <div 
                    className={`${styles.exportOption} ${exportFormat === 'csv' ? styles.selected : ''}`}
                    onClick={() => setExportFormat('csv')}
                  >
                    <span className={styles.exportIcon}>📄</span> Exportar dados para arquivo .csv
                  </div>
                </div>

                <div className={styles.footer}>
                  <button className={`${styles.primaryBtn} ${styles.green}`} onClick={handleExportConfirm}>
                    ⬇ CONTINUAR
                  </button>
                </div>
              </>
            )}

          </div>
        </div>
      )}
    </>
  );
}