'use client';

import { useState } from "react";
import styles from "./RemoveLeadModal.module.css";

export default function RemoveLeadModal() {
  const [isOpen, setIsOpen] = useState(false);
  
  // Estados do Formulário
  const [startDate, setStartDate] = useState("2026-01-28");
  const [endDate, setEndDate] = useState("2026-02-04");
  const [emailOpen, setEmailOpen] = useState<boolean | null>(null); // null = nenhum, true = sim, false = não
  
  // Estados de Tags
  const [selectedTagInclude, setSelectedTagInclude] = useState("");
  const [tagsToInclude, setTagsToInclude] = useState<string[]>([]);
  
  const [selectedTagExclude, setSelectedTagExclude] = useState("");
  const [tagsToExclude, setTagsToExclude] = useState<string[]>([]);

  // Lista Mockada de Tags (igual ao print)
  const availableTags = [
    "abandonou-carrinho",
    "abmex",
    "active-campaign",
    "aguardando-pagamento",
    "appmax",
    "ativo-sac",
    "ativo-whatsapp"
  ];

  const handleAddTag = (tag: string, list: string[], setList: (t: string[]) => void, clearSelect: (s: string) => void) => {
    if (tag && !list.includes(tag)) {
      setList([...list, tag]);
      clearSelect("");
    }
  };

  const handleRemoveTag = (tag: string, list: string[], setList: (t: string[]) => void) => {
    setList(list.filter(t => t !== tag));
  };

  const handleRemoveAction = () => {
    alert(`
      Removendo Leads...
      De: ${startDate} até ${endDate}
      Abriu Email: ${emailOpen === null ? 'Indiferente' : emailOpen ? 'SIM' : 'NÃO'}
      Tags Obrigatórias: ${tagsToInclude.join(', ')}
      Tags Proibidas: ${tagsToExclude.join(', ')}
    `);
    setIsOpen(false);
  };

  return (
    <>
      {/* 1. O Gatilho (Igual aos outros Cards) */}
      <div className={styles.triggerCard} onClick={() => setIsOpen(true)}>
        <div>
          <h4 className={styles.triggerTitle}>Remover leads</h4>
          <p className={styles.triggerDesc}>Exclua leads em massa</p>
        </div>
        <div className={styles.triggerIcon}>🗑️</div>
      </div>

      {/* 2. O Modal Lateral */}
      {isOpen && (
        <div className={styles.overlay} onClick={(e) => {
             if (e.target === e.currentTarget) setIsOpen(false)
        }}>
          <div className={styles.modal}>
            {/* Header */}
            <div className={styles.header}>
              <h3 className={styles.title}>Remoção de Leads em massa</h3>
              <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>FECHAR ✕</button>
            </div>

            {/* Corpo Scrollável */}
            <div className={styles.body}>
              
              {/* Seção 1: Período */}
              <div>
                <label className={styles.sectionLabel}>Período de tempo</label>
                <span className={styles.sectionDesc}>Com base na data de criação do Lead</span>
                <div className={styles.dateRow}>
                  <input 
                    type="date" 
                    className={styles.dateInput} 
                    value={startDate} 
                    onChange={e => setStartDate(e.target.value)}
                  />
                  <input 
                    type="date" 
                    className={styles.dateInput} 
                    value={endDate} 
                    onChange={e => setEndDate(e.target.value)}
                  />
                </div>
              </div>

              {/* Seção 2: Abertura de Email */}
              <div>
                <label className={styles.sectionLabel}>Abertura de e-mail</label>
                <span className={styles.sectionDesc}>Este lead já abriu algum e-mail seu?</span>
                <div className={styles.toggleGroup}>
                  <button 
                    className={`${styles.toggleBtn} ${emailOpen === true ? styles.activeToggle : ''}`}
                    onClick={() => setEmailOpen(true)}
                  >
                    SIM
                  </button>
                  <button 
                    className={`${styles.toggleBtn} ${emailOpen === false ? styles.activeToggle : ''}`}
                    onClick={() => setEmailOpen(false)}
                  >
                    NÃO
                  </button>
                </div>
              </div>

              {/* Seção 3: Tags que possibilitam (INCLUDE) */}
              <div>
                <label className={styles.sectionLabel}>Tags que possibilitam a remoção</label>
                <span className={styles.sectionDesc}>O lead deve possuir TODAS as tags abaixo simultaneamente</span>
                
                <div className={styles.tagSelectWrapper}>
                  <select 
                    className={styles.tagSelect}
                    value={selectedTagInclude}
                    onChange={(e) => setSelectedTagInclude(e.target.value)}
                  >
                    <option value="">Selecione uma tag...</option>
                    {availableTags.map(tag => <option key={tag} value={tag}>{tag}</option>)}
                  </select>
                  <button 
                    className={styles.addTagBtn} 
                    onClick={() => handleAddTag(selectedTagInclude, tagsToInclude, setTagsToInclude, setSelectedTagInclude)}
                  >
                    +
                  </button>
                </div>

                <div className={styles.selectedTags}>
                  {tagsToInclude.map(tag => (
                    <span key={tag} className={styles.tagBadge}>
                      {tag} <span className={styles.removeTag} onClick={() => handleRemoveTag(tag, tagsToInclude, setTagsToInclude)}>✕</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Seção 4: Tags que impossibilitam (EXCLUDE) */}
              <div>
                <label className={styles.sectionLabel}>Tags que impossibilitam a remoção</label>
                <span className={styles.sectionDesc}>O lead deve possuir TODAS as tags abaixo simultaneamente</span>
                
                <div className={styles.tagSelectWrapper}>
                  <select 
                    className={styles.tagSelect}
                    value={selectedTagExclude}
                    onChange={(e) => setSelectedTagExclude(e.target.value)}
                  >
                    <option value="">Selecione uma tag...</option>
                    {availableTags.map(tag => <option key={tag} value={tag}>{tag}</option>)}
                  </select>
                  <button 
                    className={styles.addTagBtn} 
                    onClick={() => handleAddTag(selectedTagExclude, tagsToExclude, setTagsToExclude, setSelectedTagExclude)}
                  >
                    +
                  </button>
                </div>

                <div className={styles.selectedTags}>
                  {tagsToExclude.map(tag => (
                    <span key={tag} className={styles.tagBadge}>
                      {tag} <span className={styles.removeTag} onClick={() => handleRemoveTag(tag, tagsToExclude, setTagsToExclude)}>✕</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Seção 5: Avançado */}
              <button className={styles.advancedBtn}>
                Avançado <span>▼</span>
              </button>

            </div>

            {/* Footer */}
            <div className={styles.footer}>
              <button className={styles.removeBtn} onClick={handleRemoveAction}>
                🗑 REMOVER LEADS
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}