'use client'
import { SYSTEMS } from '@/data/oscData'

export default function Sidebar({ activeSys, onSelect, topicCounts }) {
  const total = Object.values(topicCounts).reduce((a, b) => a + b, 0)

  return (
    <aside style={{
      width: 230, flexShrink: 0,
      background: '#0A0C13',
      borderRight: '1px solid var(--border)',
      padding: '12px 0',
      position: 'sticky', top: 58,
      height: 'calc(100vh - 58px)',
      overflowY: 'auto',
    }}>
      <div style={{ padding: '0 12px 8px', fontSize: 10, letterSpacing: '0.1em',
        textTransform: 'uppercase', color: 'var(--text3)', fontWeight: 700 }}>
        Sistem Organ
      </div>

      <SideLink
        icon="📋" label="Semua Sistem" count={total}
        active={activeSys === 'all'} onClick={() => onSelect('all')}
      />

      <div style={{ height: 1, background: 'var(--border)', margin: '6px 12px' }} />

      {SYSTEMS.map(sys => (
        <SideLink key={sys.key}
          icon={sys.icon} label={sys.label}
          count={topicCounts[sys.key] || 0}
          active={activeSys === sys.key}
          onClick={() => onSelect(sys.key)}
        />
      ))}
    </aside>
  )
}

function SideLink({ icon, label, count, active, onClick }) {
  return (
    <div onClick={onClick} style={{
      display: 'flex', alignItems: 'center', gap: 9,
      padding: '8px 12px', marginBottom: 1, borderRadius: 8,
      margin: '1px 8px',
      cursor: 'pointer',
      color: active ? '#fff' : 'var(--text2)',
      background: active ? 'var(--accent)' : 'transparent',
      fontWeight: active ? 600 : 400,
      fontSize: 13, transition: 'all 0.15s',
    }}
    onMouseEnter={e => { if (!active) e.currentTarget.style.background = 'var(--surface2)' }}
    onMouseLeave={e => { if (!active) e.currentTarget.style.background = 'transparent' }}
    >
      <span style={{ fontSize: 15, flexShrink: 0 }}>{icon}</span>
      <span style={{ flex: 1, lineHeight: 1.3, fontSize: 12.5 }}>{label}</span>
      <span style={{
        fontSize: 10, padding: '1px 6px', borderRadius: 20, flexShrink: 0,
        background: active ? 'rgba(255,255,255,0.2)' : 'var(--surface2)',
        color: active ? '#fff' : 'var(--text3)', fontWeight: 600,
      }}>{count}</span>
    </div>
  )
}
