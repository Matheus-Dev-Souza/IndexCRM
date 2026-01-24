'use client'
import { createLeadAction } from "@/actions/client-actions";

export default function ClientForm({ stageId }: { stageId: string }) {
  return (
    <form action={createLeadAction} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
      <input type="hidden" name="stageId" value={stageId} />
      
      <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'15px'}}>
        <div>
            <label style={{display:'block', color:'#a1a1aa', fontSize:'0.85rem', marginBottom:'5px'}}>Nome do Cliente</label>
            <input name="name" required style={{width:'100%', padding:'10px', background:'#09090b', border:'1px solid #27272a', borderRadius:'6px', color:'white'}} />
        </div>
        <div>
            <label style={{display:'block', color:'#a1a1aa', fontSize:'0.85rem', marginBottom:'5px'}}>Telefone/Zap</label>
            <input name="phone" required style={{width:'100%', padding:'10px', background:'#09090b', border:'1px solid #27272a', borderRadius:'6px', color:'white'}} />
        </div>
      </div>

      <div>
          <label style={{display:'block', color:'#a1a1aa', fontSize:'0.85rem', marginBottom:'5px'}}>Email</label>
          <input name="email" type="email" style={{width:'100%', padding:'10px', background:'#09090b', border:'1px solid #27272a', borderRadius:'6px', color:'white'}} />
      </div>

      <hr style={{borderColor:'#27272a'}} />

      <div>
          <label style={{display:'block', color:'#a1a1aa', fontSize:'0.85rem', marginBottom:'5px'}}>Título da Oportunidade</label>
          <input name="title" placeholder="Ex: Criação de Site" required style={{width:'100%', padding:'10px', background:'#09090b', border:'1px solid #27272a', borderRadius:'6px', color:'white'}} />
      </div>

      <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'15px'}}>
        <div>
            <label style={{display:'block', color:'#a1a1aa', fontSize:'0.85rem', marginBottom:'5px'}}>Valor (R$)</label>
            <input name="value" type="number" step="0.01" required style={{width:'100%', padding:'10px', background:'#09090b', border:'1px solid #27272a', borderRadius:'6px', color:'white'}} />
        </div>
        <div>
            <label style={{display:'block', color:'#a1a1aa', fontSize:'0.85rem', marginBottom:'5px'}}>Prioridade</label>
            <select name="priority" style={{width:'100%', padding:'10px', background:'#09090b', border:'1px solid #27272a', borderRadius:'6px', color:'white'}}>
                <option value="LOW">Baixa</option>
                <option value="MEDIUM">Média</option>
                <option value="HIGH">Alta</option>
            </select>
        </div>
      </div>

      <button type="submit" style={{marginTop:'10px', padding:'12px', background:'#5b4bf6', color:'white', border:'none', borderRadius:'6px', fontWeight:'bold', cursor:'pointer'}}>
        Salvar Lead
      </button>
    </form>
  );
}