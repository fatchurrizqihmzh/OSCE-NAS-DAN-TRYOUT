'use client'
import { useState, useEffect } from 'react'

const STORAGE_KEY = id => `osce_v2_${id}`

function loadNote(id) {
  if (typeof window === 'undefined') return {}
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY(id))) || {} } catch { return {} }
}
function saveNote(id, obj) {
  if (typeof window === 'undefined') return
  localStorage.setItem(STORAGE_KEY(id), JSON.stringify(obj))
}
function clearNote(id) {
  if (typeof window === 'undefined') return
  localStorage.removeItem(STORAGE_KEY(id))
}

export default function TopicCard({ topic }) {
  const [open, setOpen] = useState(false)
  const [saved, setSaved] = useState(false)
  const [saveFlash, setSaveFlash] = useState(false)
  const [fields, setFields] = useState({ ss: topic.ss, dd: topic.dd, tx: topic.tx })
  const [dirty, setDirty] = useState(false)

  useEffect(() => {
    const note = loadNote(topic.id)
    if (note.ss !== undefined || note.dd !== undefined || note.tx !== undefined) {
      setFields({
        ss: note.ss !== undefined ? note.ss : topic.ss,
        dd: note.dd !== undefined ? note.dd : topic.dd,
        tx: note.tx !== undefined ? note.tx : topic.tx,
      })
      setSaved(true)
    }
  }, [topic.id])

  const handleChange = (field, val) => {
    setFields(prev => ({ ...prev, [field]: val }))
    setDirty(true)
    setSaved(false)
  }

  const handleSave = () => {
    saveNote(topic.id, fields)
    setDirty(false)
    setSaved(true)
    setSaveFlash(true)
    setTimeout(() => setSaveFlash(false), 2000)
  }

  const handleReset = () => {
    if (!confirm('Reset ke data default? Catatan yang sudah diedit akan hilang.')) return
    clearNote(topic.id)
    setFields({ ss: topic.ss, dd: topic.dd, tx: topic.tx })
    setDirty(false)
    setSaved(false)
  }

  const isMulti = topic.years.length > 1

  return (
    <div style={{
      background: 'var(--surface)', border: `1px solid ${open ? '#C5C0B8' : 'var(--border)'}`,
      borderRadius: 'var(--radius)', marginBottom: '0.65rem',
      boxShadow: 'var(--shadow)', transition: 'border-color 0.2s',
    }}>
      {/* Header */}
      <div onClick={() => setOpen(o => !o)} style={{
        display: 'flex', alignItems: 'center', padding: '0.7rem 1rem',
        cursor: 'pointer', gap: 10, userSelect: 'none',
      }}>
        <div style={{ flex: 1 }}>
          <div style={{ fontWeight: 500, fontSize: 14.5, lineHeight: 1.4 }}>{topic.name}</div>
          <div style={{ display: 'flex', gap: 4, flexWrap: 'wrap', marginTop: 5 }}>
            {topic.years.map(y => (
              <span key={y} className={`yt-${y}`} style={{
                fontSize: 10.5, padding: '2px 7px', borderRadius: 10, fontWeight: 600
              }}>Mei {y}</span>
            ))}
            {isMulti && (
              <span style={{ fontSize: 10.5, padding: '2px 8px', borderRadius: 10,
                background: '#FEF3C7', color: '#92400E', fontWeight: 600 }}>
                🔁 Muncul {topic.years.length}×
              </span>
            )}
            {saved && !dirty && (
              <span style={{ fontSize: 10, padding: '2px 7px', borderRadius: 10,
                background: '#DCFCE7', color: '#166534', fontWeight: 500 }}>✓ tersimpan</span>
            )}
            {dirty && (
              <span style={{ fontSize: 10, padding: '2px 7px', borderRadius: 10,
                background: '#FEF9C3', color: '#854D0E', fontWeight: 500 }}>● belum disimpan</span>
            )}
          </div>
        </div>
        <svg style={{ color: 'var(--muted)', transition: 'transform 0.2s',
          transform: open ? 'rotate(180deg)' : 'none', flexShrink: 0 }}
          width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="6 9 12 15 18 9"/>
        </svg>
      </div>

      {/* Body */}
      {open && (
        <div style={{ borderTop: '1px solid var(--border-light)', padding: '0.75rem 1rem 1rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 10 }}
            className="fields-grid">
            <FieldGroup
              label="🔵 Signs & Symptoms"
              color="#1D4ED8"
              value={fields.ss}
              placeholder="Tanda dan gejala khas..."
              onChange={v => handleChange('ss', v)}
            />
            <FieldGroup
              label="🟠 Diagnosis Banding"
              color="#C2410C"
              value={fields.dd}
              placeholder="Diagnosis banding utama..."
              onChange={v => handleChange('dd', v)}
            />
            <FieldGroup
              label="🟢 Tatalaksana"
              color="#15803D"
              value={fields.tx}
              placeholder="Tatalaksana farmako & non-farmako..."
              onChange={v => handleChange('tx', v)}
            />
          </div>
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 6, marginTop: 10 }}>
            <button onClick={handleReset} style={{
              fontSize: 12, padding: '5px 12px', borderRadius: 8,
              border: '1px solid var(--border)', background: 'var(--bg)',
              color: 'var(--muted)', cursor: 'pointer', fontFamily: 'inherit'
            }}>Reset</button>
            <button onClick={handleSave} style={{
              fontSize: 12, padding: '5px 16px', borderRadius: 8, border: 'none',
              background: saveFlash ? '#15803D' : dirty ? '#2D5A3D' : '#6B7280',
              color: '#fff', cursor: 'pointer', fontFamily: 'inherit', fontWeight: 500,
              transition: 'background 0.2s'
            }}>
              {saveFlash ? '✓ Tersimpan' : 'Simpan'}
            </button>
          </div>
        </div>
      )}
      <style jsx>{`
        @media (max-width: 700px) { .fields-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </div>
  )
}

function FieldGroup({ label, color, value, placeholder, onChange }) {
  const [modified, setModified] = useState(false)
  const handleChange = (e) => { setModified(true); onChange(e.target.value) }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
      <div style={{ fontSize: 10.5, fontWeight: 600, letterSpacing: '0.06em',
        textTransform: 'uppercase', color }}>
        {label}
      </div>
      <textarea
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        style={{
          width: '100%', minHeight: 100, padding: '8px 10px',
          border: `1px solid ${modified && value ? '#86EFAC' : 'var(--border)'}`,
          borderRadius: 7, fontFamily: 'inherit', fontSize: 13,
          color: 'var(--text)', background: modified && value ? '#F0FDF4' : 'var(--bg)',
          resize: 'vertical', lineHeight: 1.55, outline: 'none',
          transition: 'border-color 0.2s, background 0.2s'
        }}
        onFocus={e => e.target.style.borderColor = color}
        onBlur={e => e.target.style.borderColor = modified && value ? '#86EFAC' : 'var(--border)'}
      />
    </div>
  )
}
