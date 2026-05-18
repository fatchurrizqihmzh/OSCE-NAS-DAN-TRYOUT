'use client'
import { useState } from 'react'

export default function Header({ search, onSearch, onSaveAll }) {
  const [flash, setFlash] = useState(false)
  const handle = () => { onSaveAll(); setFlash(true); setTimeout(() => setFlash(false), 2500) }

  return (
    <header style={{
      background: '#0A0C13',
      borderBottom: '1px solid var(--border)',
      padding: '0 20px',
      position: 'sticky', top: 0, zIndex: 100,
      display: 'flex', alignItems: 'center', gap: 12, height: 58,
      backdropFilter: 'blur(10px)',
    }}>
      {/* Logo */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0 }}>
        <div style={{
          width: 32, height: 32, borderRadius: 8,
          background: 'linear-gradient(135deg, #6C63FF, #A855F7)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 16, fontWeight: 700, color: '#fff',
        }}>O</div>
        <div>
          <div style={{ fontWeight: 700, fontSize: 14, color: 'var(--text)', letterSpacing: '-0.02em' }}>
            OSCE UKMPPD
          </div>
          <div style={{ fontSize: 10, color: 'var(--text3)', marginTop: -2 }}>Materi Bulan Mei 2022–2025</div>
        </div>
      </div>

      {/* Search */}
      <div style={{ flex: 1, maxWidth: 420, margin: '0 auto', position: 'relative' }}>
        <svg style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)',
          color: 'var(--text3)', pointerEvents: 'none' }}
          width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
        </svg>
        <input
          type="text" value={search} onChange={e => onSearch(e.target.value)}
          placeholder="Cari diagnosis, gejala, tatalaksana..."
          style={{
            width: '100%', padding: '8px 12px 8px 36px',
            border: '1px solid var(--border)', borderRadius: 10,
            background: 'var(--surface)', fontFamily: 'inherit', fontSize: 13,
            color: 'var(--text)', outline: 'none', transition: 'border-color 0.2s',
          }}
          onFocus={e => e.target.style.borderColor = 'var(--accent)'}
          onBlur={e => e.target.style.borderColor = 'var(--border)'}
        />
        {search && (
          <button onClick={() => onSearch('')} style={{
            position: 'absolute', right: 10, top: '50%', transform: 'translateY(-50%)',
            background: 'none', border: 'none', color: 'var(--text3)', cursor: 'pointer',
            fontSize: 16, lineHeight: 1, padding: 2,
          }}>×</button>
        )}
      </div>

      {/* Save All */}
      <button onClick={handle} style={{
        padding: '7px 16px', flexShrink: 0,
        background: flash ? '#059669' : 'linear-gradient(135deg, #6C63FF, #A855F7)',
        color: '#fff', border: 'none', borderRadius: 8, fontSize: 12,
        cursor: 'pointer', fontFamily: 'inherit', fontWeight: 600,
        transition: 'all 0.3s', whiteSpace: 'nowrap',
        boxShadow: '0 2px 8px rgba(108,99,255,0.3)',
      }}>
        {flash ? '✓ Tersimpan!' : '💾 Simpan Semua'}
      </button>
    </header>
  )
}
