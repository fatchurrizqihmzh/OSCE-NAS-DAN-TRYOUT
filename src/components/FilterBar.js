'use client'

const YEARS = [2022, 2023, 2024, 2025]
const YEAR_COLORS = {
  2022: { bg: '#1E3A5F', text: '#60A5FA', border: '#3B82F6' },
  2023: { bg: '#3B1F1F', text: '#F87171', border: '#EF4444' },
  2024: { bg: '#064E3B', text: '#34D399', border: '#10B981' },
  2025: { bg: '#2E1065', text: '#C084FC', border: '#A855F7' },
}

export default function FilterBar({ activeYears, onToggle, stats }) {
  return (
    <div style={{
      background: 'var(--surface)',
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius)',
      padding: '14px 16px',
      marginBottom: 16,
    }}>
      <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', alignItems: 'center', marginBottom: 12 }}>
        <span style={{ fontSize: 11, color: 'var(--text3)', fontWeight: 600,
          textTransform: 'uppercase', letterSpacing: '0.06em', marginRight: 4 }}>
          Filter tahun:
        </span>
        {YEARS.map(yr => {
          const active = activeYears.has(yr)
          const c = YEAR_COLORS[yr]
          return (
            <button key={yr} onClick={() => onToggle(yr)} style={{
              padding: '5px 14px', borderRadius: 20,
              border: `1px solid ${active ? c.border : 'var(--border)'}`,
              background: active ? c.bg : 'transparent',
              color: active ? c.text : 'var(--text3)',
              fontSize: 12, cursor: 'pointer',
              fontFamily: 'inherit', fontWeight: active ? 700 : 400,
              transition: 'all 0.15s',
            }}>
              Mei {yr}
            </button>
          )
        })}
      </div>

      {stats && (
        <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
          {[
            { label: 'Total Topik', val: stats.total, color: 'var(--accent)' },
            { label: 'Muncul >1 Tahun', val: stats.multi, color: '#A78BFA' },
            { label: 'Sudah Diisi', val: stats.filled, color: 'var(--green)' },
          ].map(s => (
            <div key={s.label} style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
              <span style={{ fontSize: 20, fontWeight: 700, color: s.color, letterSpacing: '-0.03em' }}>
                {s.val}
              </span>
              <span style={{ fontSize: 11, color: 'var(--text3)', fontWeight: 500 }}>{s.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
