export default function DashboardLoading() {
  return (
    <div style={{ padding: '30px', maxWidth: '1400px', margin: '0 auto' }}>
      {/* Header Skeleton */}
      <div style={{ height: '40px', width: '200px', background: '#2d2d3a', borderRadius: '4px', marginBottom: '30px', animation: 'pulse 1.5s infinite' }}></div>

      {/* Stats Skeleton */}
      <div style={{ display: 'flex', gap: '20px', marginBottom: '30px' }}>
        <div style={{ height: '100px', flex: 1, background: '#1e1e2d', borderRadius: '8px', animation: 'pulse 1.5s infinite' }}></div>
        <div style={{ height: '100px', flex: 1, background: '#1e1e2d', borderRadius: '8px', animation: 'pulse 1.5s infinite' }}></div>
        <div style={{ height: '100px', flex: 1, background: '#1e1e2d', borderRadius: '8px', animation: 'pulse 1.5s infinite' }}></div>
      </div>

      {/* Grid Skeleton */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
        <div style={{ height: '200px', background: '#1e1e2d', borderRadius: '12px', animation: 'pulse 1.5s infinite' }}></div>
        <div style={{ height: '200px', background: '#1e1e2d', borderRadius: '12px', animation: 'pulse 1.5s infinite' }}></div>
        <div style={{ height: '200px', background: '#1e1e2d', borderRadius: '12px', animation: 'pulse 1.5s infinite' }}></div>
      </div>

      <style>{`
        @keyframes pulse {
          0% { opacity: 1; }
          50% { opacity: 0.5; }
          100% { opacity: 1; }
        }
      `}</style>
    </div>
  );
}