'use client';

import { useState } from "react";
import styles from "./AddTagsModal.module.css";

export default function AddTagsModal() {
  const [isOpen, setIsOpen] = useState(false);
  
  // --- Estados do Filtro ---
  const [startDate, setStartDate] = useState("2026-02-07");
  const [endDate, setEndDate] = useState("2026-02-07");
  const [emailOpen, setEmailOpen] = useState<boolean | null>(null);
  const [applyToAll, setApplyToAll] = useState(false);

  // --- Estados das Tags ---
  // 1. Tags que serão ADICIONADAS aos leads
  const [tagToAddInput, setTagToAddInput] = useState("");
  const [tagsToAdd, setTagsToAdd] = useState<string[]>([]);

  // 2. Filtro: Tags que o lead TEM QUE TER (Include)
  const [tagIncludeInput, setTagIncludeInput] = useState("");
  const [tagsInclude, setTagsInclude] = useState<string[]>([]);

  // 3. Filtro: Tags que o lead NÃO PODE TER (Exclude)
  const [tagExcludeInput, setTagExcludeInput] = useState("");
  const [tagsExclude, setTagsExclude] = useState<string[]>([]);

  // Lista Mockada de Tags
  const availableTags = [
    "abandonou-carrinho", "abmex", "active-campaign", 
    "aguardando-pagamento", "appmax", "ativo-sac", "ativo-whatsapp"
  ];

  // Função genérica para adicionar tag em uma das listas
  const handleAddTag = (
    tag: string, 
    list: string[], 
    setList: (t: string[]) => void, 
    setInput: (s: string) => void
  ) => {
    if (tag && !list.includes(tag)) {
      setList([...list, tag]);
      setInput("");
    }
  };

  const handleRemoveTag = (tag: string, list: string[], setList: (t: string[]) => void) => {
    setList(list.filter(t => t !== tag));
  };

  const handleSubmit = () => {
    alert(`
      Adicionando Tags: ${tagsToAdd.join(', ')}
      Filtro Data: ${startDate} a ${endDate}
      Filtro Email: ${emailOpen === null ? 'Todos' : emailOpen ? 'Abriu' : 'Não Abriu'}
      Filtro Tags Include: ${tagsInclude.join(', ')}
      Em todos os leads? ${applyToAll ? 'SIM' : 'NÃO'}
    `);
    setIsOpen(false);
  };

  return (
    <>
      {/* 1. O Gatilho (Card Lateral) */}
      <div className={styles.triggerCard} onClick={() => setIsOpen(true)}>
        <div>
          <h4 className={styles.triggerTitle}>Adicionar tags em massa</h4>
          <p className={styles.triggerDesc}>Adicione tags aos leads que quiser</p>
        </div>
        <div className={styles.triggerIcon}>🏷️+</div>
      </div>

      {/* 2. O Modal Lateral */}
      {isOpen && (
        <div className={styles.overlay} onClick={(e) => {
             if (e.target === e.currentTarget) setIsOpen(false)
        }}>
          <div className={styles.modal}>
            
            {/* Header */}
            <div className={styles.header}>
              <h3 className={styles.title}>Adicionar tags aos leads</h3>
              <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>FECHAR ✕</button>
            </div>

            {/* Body */}
            <div className={styles.body}>

              {/* CAMPO 1: TAGS PARA ADICIONAR (Ação Principal) */}
              <div>
                <label className={styles.sectionLabel}>Tag(s) para adicionar</label>
                <span className={styles.sectionDesc}>Tag(s) à adicionar aos leads da sua base</span>
                
                <div className={styles.tagSelectWrapper}>
                  <select 
                    className={styles.tagSelect}
                    value={tagToAddInput}
                    onChange={(e) => setTagToAddInput(e.target.value)}
                  >
                    <option value="">Selecione...</option>
                    {availableTags.map(tag => <option key={tag} value={tag}>{tag}</option>)}
                  </select>
                  <button 
                    className={styles.addTagBtn}
                    onClick={() => handleAddTag(tagToAddInput, tagsToAdd, setTagsToAdd, setTagToAddInput)}
                  >
                    +
                  </button>
                </div>
                {/* Lista de tags selecionadas para adicionar */}
                <div className={styles.selectedTags}>
                  {tagsToAdd.map(tag => (
                    <span key={tag} className={styles.tagBadge} style={{borderColor: '#5b4bf6', color: '#818cf8'}}>
                      {tag} <span className={styles.removeTag} onClick={() => handleRemoveTag(tag, tagsToAdd, setTagsToAdd)}>✕</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* SEÇÃO: FILTROS */}
              <hr style={{borderColor: '#27272a', margin: '10px 0'}}/>

              {/* Datas */}
              <div>
                <label className={styles.sectionLabel}>Período de tempo</label>
                <span className={styles.sectionDesc}>Com base na data de criação do Lead</span>
                <div className={styles.dateRow}>
                  <input type="date" className={styles.dateInput} value={startDate} onChange={e => setStartDate(e.target.value)}/>
                  <input type="date" className={styles.dateInput} value={endDate} onChange={e => setEndDate(e.target.value)}/>
                </div>
              </div>

              {/* Email */}
              <div>
                <label className={styles.sectionLabel}>Abertura de e-mail</label>
                <span className={styles.sectionDesc}>Este lead já abriu algum e-mail seu?</span>
                <div className={styles.toggleGroup}>
                  <button 
                    className={`${styles.toggleBtn} ${emailOpen === true ? styles.activeToggle : ''}`}
                    onClick={() => setEmailOpen(true)}
                  >SIM</button>
                  <button 
                    className={`${styles.toggleBtn} ${emailOpen === false ? styles.activeToggle : ''}`}
                    onClick={() => setEmailOpen(false)}
                  >NÃO</button>
                </div>
              </div>

              {/* Tags Include */}
              <div>
                <label className={styles.sectionLabel}>Tags que possibilitam o recebimento</label>
                <span className={styles.sectionDesc}>O lead deve possuir TODAS as tags abaixo</span>
                <div className={styles.tagSelectWrapper}>
                  <select className={styles.tagSelect} value={tagIncludeInput} onChange={(e) => setTagIncludeInput(e.target.value)}>
                    <option value="">Selecione...</option>
                    {availableTags.map(tag => <option key={tag} value={tag}>{tag}</option>)}
                  </select>
                  <button className={styles.addTagBtn} onClick={() => handleAddTag(tagIncludeInput, tagsInclude, setTagsInclude, setTagIncludeInput)}>+</button>
                </div>
                <div className={styles.selectedTags}>
                  {tagsInclude.map(tag => (
                    <span key={tag} className={styles.tagBadge}>
                      {tag} <span className={styles.removeTag} onClick={() => handleRemoveTag(tag, tagsInclude, setTagsInclude)}>✕</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Tags Exclude */}
              <div>
                <label className={styles.sectionLabel}>Tags que impossibilitam o recebimento</label>
                <span className={styles.sectionDesc}>O lead deve possuir TODAS as tags abaixo</span>
                <div className={styles.tagSelectWrapper}>
                  <select className={styles.tagSelect} value={tagExcludeInput} onChange={(e) => setTagExcludeInput(e.target.value)}>
                    <option value="">Selecione...</option>
                    {availableTags.map(tag => <option key={tag} value={tag}>{tag}</option>)}
                  </select>
                  <button className={styles.addTagBtn} onClick={() => handleAddTag(tagExcludeInput, tagsExclude, setTagsExclude, setTagExcludeInput)}>+</button>
                </div>
                <div className={styles.selectedTags}>
                  {tagsExclude.map(tag => (
                    <span key={tag} className={styles.tagBadge}>
                      {tag} <span className={styles.removeTag} onClick={() => handleRemoveTag(tag, tagsExclude, setTagsExclude)}>✕</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Switch All Leads */}
              <div className={styles.switchRow}>
                <label className={styles.switch}>
                  <input type="checkbox" checked={applyToAll} onChange={(e) => setApplyToAll(e.target.checked)} />
                  <span className={styles.slider}></span>
                </label>
                <span className={styles.switchLabel}>Adicionar tags em todos os leads</span>
              </div>

            </div>

            {/* Footer */}
            <div className={styles.footer}>
              <button className={styles.submitBtn} onClick={handleSubmit}>
                 + ADICIONAR TAGS ✨
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
}