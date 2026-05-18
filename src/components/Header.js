'use client'
import { useState } from 'react'

export default function Header({ search, onSearch, onSaveAll }) {
  const [saved, setSaved] = useState(false)

  const handleSaveAll = () => {
    onSaveAll()
    setSaved(true)
    setTimeout(() => setSaved(false), 2500)
  }

  return (
    <header style={{
      background: 'var(--surface)', borderBottom: '1px solid var(--border)',
      padding: '0 1.25rem', position: 'sticky', top: 0, zIndex: 100,
      display: 'flex', alignItems: 'center', gap: '0.75rem', height: 56,
    }}>
      <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: '1.1rem',
        color: 'var(--accent)', whiteSpace: 'nowrap' }}>
        OSCE{' '}
        <span style={{ color: 'var(--muted)', fontSize: '0.75rem',
          fontFamily: "'DM Sans', sans-serif" }}>
          UKMPPD · Bulan Mei
        </span>
      </div>

      <div style={{ flex: 1, maxWidth: 380, marginLeft: 'auto', position: 'relative' }}>
        <svg style={{ position: 'absolute', left: 10, top: '50%', transform: 'translateY(-50%)',
          color: 'var(--muted)', pointerEvents: 'none' }}
          width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
        </svg>
        <input
          type="text" value={search} onChange={e => onSearch(e.target.value)}
          placeholder="Cari diagnosis, tatalaksana, gejala..."
          style={{
            width: '100%', padding: '7px 12px 7px 32px',
            border: '1px solid var(--border)', borderRadius: 20,
            background: 'var(--bg)', fontFamily: 'inherit', fontSize: 13,
            color: 'var(--text)', outline: 'none'
          }}
        />
      </div>

      <button onClick={handleSaveAll} style={{
        padding: '7px 14px', background: saved ? '#15803D' : 'var(--accent)',
        color: '#fff', border: 'none', borderRadius: 20, fontSize: 13,
        cursor: 'pointer', fontFamily: 'inherit', fontWeight: 500,
        whiteSpace: 'nowrap', transition: 'background 0.3s'
      }}>
        {saved ? '✓ Tersimpan!' : '💾 Simpan Semua'}
      </button>
    </header>
  )
}
