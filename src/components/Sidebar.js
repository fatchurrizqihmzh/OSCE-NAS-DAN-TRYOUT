'use client'
import { SYSTEMS } from '@/data/oscData'

export default function Sidebar({ activeSys, onSelect, topicCounts }) {
  return (
    <aside style={{
      width: 220, flexShrink: 0, background: 'var(--surface)',
      borderRight: '1px solid var(--border)', padding: '0.75rem 0',
      position: 'sticky', top: 56, height: 'calc(100vh - 56px)', overflowY: 'auto'
    }}>
      <div style={{ padding: '0.25rem 1rem 0.5rem', fontSize: 10, letterSpacing: '0.08em',
        textTransform: 'uppercase', color: 'var(--muted)', fontWeight: 600 }}>
        Sistem Organ
      </div>
      <SideLink icon="📋" label="Semua Sistem" count={Object.values(topicCounts).reduce((a,b)=>a+b,0)}
        active={activeSys === 'all'} onClick={() => onSelect('all')} />
      {SYSTEMS.map(sys => (
        <SideLink key={sys.key} icon={sys.icon} label={sys.label}
          count={topicCounts[sys.key] || 0}
          active={activeSys === sys.key} onClick={() => onSelect(sys.key)} />
      ))}
    </aside>
  )
}

function SideLink({ icon, label, count, active, onClick }) {
  return (
    <div onClick={onClick} style={{
      display: 'flex', alignItems: 'center', gap: 8,
      padding: '7px 1rem', fontSize: 13, cursor: 'pointer',
      color: active ? 'var(--accent)' : 'var(--muted)',
      borderLeft: `2px solid ${active ? 'var(--accent)' : 'transparent'}`,
      background: active ? 'var(--accent-light)' : 'transparent',
      fontWeight: active ? 500 : 400, transition: 'all 0.15s',
    }}>
      <span style={{ fontSize: 14 }}>{icon}</span>
      <span style={{ flex: 1, lineHeight: 1.3 }}>{label}</span>
      <span style={{ fontSize: 11, background: 'var(--bg)', padding: '1px 6px',
        borderRadius: 8, color: 'var(--muted)', flexShrink: 0 }}>{count}</span>
    </div>
  )
}
