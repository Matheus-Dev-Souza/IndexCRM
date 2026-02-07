'use client';

import { useState } from "react";
import styles from "./CalculateLeadTempModal.module.css";

export default function CalculateLeadTempModal() {
  const [isOpen, setIsOpen] = useState(false);
  
  // Estados do Slider (Dias)
  const [minDays, setMinDays] = useState(20);
  const [maxDays, setMaxDays] = useState(45);
  const maxLimit = 180; // Escala máxima do slider

  // Simulação de Resultados (Mock)
  const results = {
    hot: 3,
    warm: 8,
    cold: 5800
  };

  // Manipulador do Slider
  const handleRangeChange = (e: React.ChangeEvent<HTMLInputElement>, type: 'min' | 'max') => {
    const val = parseInt(e.target.value);
    
    if (type === 'min') {
      // Não deixa min passar de max
      if (val < maxDays) setMinDays(val);
    } else {
      // Não deixa max ser menor que min
      if (val > minDays) setMaxDays(val);
    }
  };

  // Calcula posição % para as etiquetas (tooltips)
  const getPercent = (val: number) => (val / maxLimit) * 100;

  return (
    <>
      {/* 1. Gatilho (Trigger) */}
      <div className={styles.triggerCard} onClick={() => setIsOpen(true)}>
        <div>
          <h4 className={styles.triggerTitle}>Calcular temperatura por abertura de email</h4>
          <p className={styles.triggerDesc}>Identifique leads quentes, mornos e frios</p>
        </div>
        <div className={styles.triggerIcon}>❄️🔥</div>
      </div>

      {/* 2. Modal Overlay */}
      {isOpen && (
        <div className={styles.overlay} onClick={(e) => {
             if (e.target === e.currentTarget) setIsOpen(false)
        }}>
          <div className={styles.modal}>
            
            {/* Header */}
            <div className={styles.header}>
              <h3 className={styles.title}>Calcular temperatura dos Leads</h3>
              <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>FECHAR ✕</button>
            </div>

            {/* Body */}
            <div className={styles.body}>

              {/* Seção 1: Slider de E-mail */}
              <div>
                <label className={styles.sectionLabel}>E-mail</label>
                <span className={styles.sectionDesc}>Percentual de abertura de e-mail por dia</span>
                
                <div className={styles.sliderWrapper}>
                  {/* Tooltips Flutuantes */}
                  <div className={styles.tooltip} style={{ left: `${getPercent(minDays)}%` }}>{minDays}</div>
                  <div className={styles.tooltip} style={{ left: `${getPercent(maxDays)}%` }}>{maxDays}</div>

                  {/* Inputs Range Sobrepostos */}
                  <input 
                    type="range" min="0" max={maxLimit} value={minDays} 
                    onChange={(e) => handleRangeChange(e, 'min')}
                    className={styles.rangeInput}
                  />
                  <input 
                    type="range" min="0" max={maxLimit} value={maxDays} 
                    onChange={(e) => handleRangeChange(e, 'max')}
                    className={styles.rangeInput}
                  />

                  {/* Barra Visual */}
                  <div className={styles.sliderTrack}></div>
                  
                  {/* Legendas 0 e 180 */}
                  <span className={`${styles.sliderLabel} ${styles.labelLeft}`}>0<br/>Dias</span>
                  <span className={`${styles.sliderLabel} ${styles.labelRight}`}>{maxLimit}<br/>Dias</span>
                </div>
              </div>

              {/* Seção 2: Legenda de Temperatura */}
              <div>
                <label className={styles.sectionLabel}>Temperatura de lead</label>
                <span className={styles.sectionDesc}>Exemplo de categorias de leads e suas respectivas temperaturas</span>
                
                <div className={styles.legendList}>
                  <div className={styles.legendItem}>
                    <span className={styles.legendIcon}>🔥</span> 
                    <span>Lead Quente: 0 dias a {minDays} dias de abertura</span>
                  </div>
                  <div className={styles.legendItem}>
                    <span className={styles.legendIcon}>🌡️</span> 
                    <span>Lead Morno: {minDays} dias a {maxDays} dias de abertura</span>
                  </div>
                  <div className={styles.legendItem}>
                    <span className={styles.legendIcon}>❄️</span> 
                    <span>Lead Frio: mais de {maxDays} dias de abertura</span>
                  </div>
                </div>
              </div>

              {/* Seção 3: Tags Adicionadas */}
              <div>
                <label className={styles.sectionLabel}>Tags adicionadas aos leads</label>
                <span className={styles.sectionDesc}>Tags que foram atribuídas aos leads, seguindo os padrões de temperatura.</span>
                
                <div className={styles.tagsRow}>
                  <span className={styles.tagBadge}><span style={{fontSize:'1rem'}}>🏷️</span> Lead Quente</span>
                  <span className={styles.tagBadge}><span style={{fontSize:'1rem'}}>🏷️</span> Lead Morno</span>
                  <span className={styles.tagBadge}><span style={{fontSize:'1rem'}}>🏷️</span> Tag Lead Frio</span>
                </div>
                <div className={styles.tagsRow} style={{marginTop:'8px'}}>
                   <span style={{background:'#1e1e2d', color:'white', padding:'4px 10px', borderRadius:'15px', fontSize:'0.75rem', border:'1px solid #3f3f46'}}>email-hot</span>
                   <span style={{background:'#1e1e2d', color:'white', padding:'4px 10px', borderRadius:'15px', fontSize:'0.75rem', border:'1px solid #3f3f46'}}>email-warm</span>
                   <span style={{background:'#1e1e2d', color:'white', padding:'4px 10px', borderRadius:'15px', fontSize:'0.75rem', border:'1px solid #3f3f46'}}>email-cold</span>
                </div>
              </div>

              {/* Seção 4: Resultado */}
              <div>
                <label className={styles.sectionLabel}>Resultado</label>
                <span className={styles.sectionDesc}>Resultado da temperatura dos seus leads</span>
                
                <div className={styles.resultGrid}>
                  <div className={styles.resultCard}>
                    <div className={styles.resultTitle}>🔥 Quente</div>
                    <div className={styles.resultValue}>{results.hot}</div>
                  </div>
                  <div className={styles.resultCard}>
                    <div className={styles.resultTitle}>🌡️ Morno</div>
                    <div className={styles.resultValue}>{results.warm}</div>
                  </div>
                  <div className={styles.resultCard}>
                    <div className={styles.resultTitle}>❄️ Frio</div>
                    <div className={styles.resultValue}>{results.cold}</div>
                  </div>
                </div>
              </div>

            </div>

            {/* Footer */}
            <div className={styles.footer}>
              <button className={styles.addBtn} onClick={() => alert('Tags adicionadas!')}>
                ADICIONAR TAGS
              </button>
              <button className={styles.recalcBtn} onClick={() => alert('Recalculando...')}>
                CALCULAR NOVAMENTE
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
}