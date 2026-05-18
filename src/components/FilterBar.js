'use client'

const YEARS = [2022, 2023, 2024, 2025]

export default function FilterBar({ activeYears, onToggle, stats }) {
  return (
    <div style={{ marginBottom: '1rem' }}>
      <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', alignItems: 'center', marginBottom: 8 }}>
        <span style={{ fontSize: 12, color: 'var(--muted)', marginRight: 2 }}>Filter tahun:</span>
        {YEARS.map(yr => {
          const active = activeYears.has(yr)
          return (
            <button key={yr}
              onClick={() => onToggle(yr)}
              className={active ? `yr-active-${yr}` : ''}
              style={{
                padding: '4px 12px', borderRadius: 20,
                border: '1px solid var(--border)',
                background: 'var(--surface)', fontSize: 12,
                cursor: 'pointer', color: 'var(--muted)',
                fontFamily: 'inherit', transition: 'all 0.15s',
                fontWeight: active ? 600 : 400,
              }}>
              Mei {yr}
            </button>
          )
        })}
      </div>
      {stats && (
        <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
          {[
            ['Total topik', stats.total],
            ['Muncul >1 tahun', stats.multi],
            ['Sudah diisi', stats.filled],
          ].map(([label, val]) => (
            <div key={label} style={{ fontSize: 12, color: 'var(--muted)' }}>
              {label}: <strong style={{ color: 'var(--text)', fontSize: 13 }}>{val}</strong>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
