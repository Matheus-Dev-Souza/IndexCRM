import { formatCurrency, formatDate } from '@/lib/utils';

export function ClientTable({ data }: { data: any[] }) {
  return (
    <table style={{ width: '100%', borderCollapse: 'collapse', color: '#e1e1e6', fontSize: '0.9rem' }}>
      <thead>
        <tr style={{ borderBottom: '1px solid #2d2d3a', textAlign: 'left' }}>
          <th style={{ padding: '12px', color: '#a1a1aa' }}>Nome</th>
          <th style={{ padding: '12px', color: '#a1a1aa' }}>Email</th>
          <th style={{ padding: '12px', color: '#a1a1aa' }}>Telefone</th>
          <th style={{ padding: '12px', color: '#a1a1aa' }}>Negócio Atual</th>
          <th style={{ padding: '12px', color: '#a1a1aa' }}>Valor</th>
        </tr>
      </thead>
      <tbody>
        {data.map((client) => (
          <tr key={client.id} style={{ borderBottom: '1px solid #1e293b' }}>
            <td style={{ padding: '12px' }}>{client.customerName}</td>
            <td style={{ padding: '12px' }}>{client.email}</td>
            <td style={{ padding: '12px' }}>{client.phone}</td>
            <td style={{ padding: '12px' }}>{client.title}</td>
            <td style={{ padding: '12px', color: '#22c55e' }}>{formatCurrency(client.value)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}