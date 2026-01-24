import { formatCurrency } from '@/lib/utils';

interface DealCardProps {
  title: string;
  customerName: string;
  value: number;
  priority: string;
}

export function DealCard({ title, customerName, value, priority }: DealCardProps) {
  const priorityColor = priority === 'HIGH' ? '#ef4444' : priority === 'MEDIUM' ? '#eab308' : '#22c55e';

  return (
    <div style={{
      background: '#1e1e2d',
      padding: '12px',
      borderRadius: '8px',
      border: '1px solid #2d2d3a',
      marginBottom: '10px',
      cursor: 'grab'
    }}>
      <div style={{display:'flex', justifyContent:'space-between', marginBottom:'8px'}}>
        <span style={{
            fontSize:'0.7rem', 
            fontWeight:'bold', 
            color: priorityColor, 
            background: `${priorityColor}20`, 
            padding:'2px 6px', 
            borderRadius:'4px'
        }}>
            {priority}
        </span>
        <span style={{fontSize:'0.8rem', color:'#a1a1aa'}}>{formatCurrency(value)}</span>
      </div>
      <h4 style={{color:'white', fontSize:'0.95rem', margin:'0 0 4px 0'}}>{title}</h4>
      <p style={{color:'#71717a', fontSize:'0.8rem', margin:0}}>{customerName}</p>
    </div>
  );
}