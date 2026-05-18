'use client'
import { useState, useEffect, useCallback } from 'react'

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

const FIELDS = [
  { key: 'ss', label: 'Signs & Symptoms', emoji: '🔵', color: '#3B82F6', placeholder: 'Tanda dan gejala khas...' },
  { key: 'dd', label: 'Diagnosis Banding', emoji: '🟠', color: '#F97316', placeholder: 'Diagnosis banding utama...' },
  { key: 'tx', label: 'Tatalaksana', emoji: '🟢', color: '#10B981', placeholder: 'Tatalaksana farmako & non-farmako...' },
]

export default function TopicCard({ topic }) {
  const [open, setOpen] = useState(false)
  const [saveFlash, setSaveFlash] = useState(false)
  const [fields, setFields] = useState({ ss: topic.ss || '', dd: topic.dd || '', tx: topic.tx || '' })
  const [dirty, setDirty] = useState(false)
  const [hasSaved, setHasSaved] = useState(false)

  useEffect(() => {
    const note = loadNote(topic.id)
    if (Object.keys(note).length > 0) {
      setFields({
        ss: note.ss !== undefined ? note.ss : topic.ss || '',
        dd: note.dd !== undefined ? note.dd : topic.dd || '',
        tx: note.tx !== undefined ? note.tx : topic.tx || '',
      })
      setHasSaved(true)
    }
  }, [topic.id, topic.ss, topic.dd, topic.tx])

  const handleChange = useCallback((field, val) => {
    setFields(prev => ({ ...prev, [field]: val }))
    setDirty(true)
  }, [])

  const handleSave = useCallback((e) => {
    e.stopPropagation()
    saveNote(topic.id, fields)
    setDirty(false)
    setHasSaved(true)
    setSaveFlash(true)
    setTimeout(() => setSaveFlash(false), 2000)
  }, [topic.id, fields])

  const handleReset = useCallback((e) => {
    e.stopPropagation()
    if (!confirm('Reset ke data default?')) return
    clearNote(topic.id)
    setFields({ ss: topic.ss || '', dd: topic.dd || '', tx: topic.tx || '' })
    setDirty(false)
    setHasSaved(false)
  }, [topic.id, topic.ss, topic.dd, topic.tx])

  const isMulti = topic.years.length > 1
  const hasFilled = fields.ss || fields.dd || fields.tx

  return (
    <div style={{
      background: open ? 'var(--surface2)' : 'var(--surface)',
      border: `1px solid ${open ? 'var(--accent)' : 'var(--border)'}`,
      borderRadius: 'var(--radius)',
      marginBottom: 8,
      transition: 'all 0.2s ease',
      overflow: 'hidden',
    }}>
      {/* ── Header (click to open) ── */}
      <div
        role="button"
        tabIndex={0}
        onClick={() => setOpen(o => !o)}
        onKeyDown={e => e.key === 'Enter' && setOpen(o => !o)}
        style={{
          display: 'flex', alignItems: 'flex-start', padding: '14px 16px',
          cursor: 'pointer', gap: 12, userSelect: 'none',
        }}
      >
        {/* Chevron */}
        <div style={{
          width: 24, height: 24, borderRadius: 6, background: open ? 'var(--accent)' : 'var(--border)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1,
          transition: 'all 0.2s',
        }}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"
            style={{ transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }}>
            <polyline points="6 9 12 15 18 9"/>
          </svg>
        </div>

        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontWeight: 600, fontSize: 14, color: 'var(--text)', lineHeight: 1.4, marginBottom: 6 }}>
            {topic.name}
          </div>
          <div style={{ display: 'flex', gap: 5, flexWrap: 'wrap', alignItems: 'center' }}>
            {topic.years.map(y => (
              <span key={y} className={`yt-${y}`} style={{
                fontSize: 10, padding: '2px 8px', borderRadius: 20, fontWeight: 600,
                letterSpacing: '0.02em',
              }}>Mei {y}</span>
            ))}
            {isMulti && (
              <span style={{
                fontSize: 10, padding: '2px 8px', borderRadius: 20, fontWeight: 700,
                background: '#2D1B69', color: '#A78BFA', border: '1px solid #7C3AED40',
              }}>🔁 {topic.years.length}× muncul</span>
            )}
            {hasFilled && hasSaved && !dirty && (
              <span style={{ fontSize: 10, padding: '2px 8px', borderRadius: 20,
                background: 'var(--green-dim)', color: 'var(--green)', fontWeight: 600 }}>✓ catatan tersimpan</span>
            )}
            {dirty && (
              <span style={{ fontSize: 10, padding: '2px 8px', borderRadius: 20,
                background: '#422006', color: '#FB923C', fontWeight: 600 }}>● belum disimpan</span>
            )}
          </div>
        </div>

        {/* Progress dots */}
        <div style={{ display: 'flex', gap: 3, flexShrink: 0, marginTop: 3 }}>
          {FIELDS.map(f => (
            <div key={f.key} style={{
              width: 7, height: 7, borderRadius: '50%',
              background: fields[f.key] ? f.color : 'var(--border)',
              opacity: fields[f.key] ? 1 : 0.3,
              transition: 'all 0.2s',
            }} title={f.label} />
          ))}
        </div>
      </div>

      {/* ── Body ── */}
      {open && (
        <div className="fade-in" style={{ borderTop: '1px solid var(--border)', padding: '16px' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 12,
          }} className="fields-grid">
            {FIELDS.map(f => (
              <FieldBox
                key={f.key}
                field={f}
                value={fields[f.key]}
                onChange={v => handleChange(f.key, v)}
              />
            ))}
          </div>

          {/* Actions */}
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 8, marginTop: 14 }}>
            <button
              onClick={handleReset}
              style={{
                fontSize: 12, padding: '7px 14px', borderRadius: 8,
                border: '1px solid var(--border)', background: 'transparent',
                color: 'var(--text3)', cursor: 'pointer', fontFamily: 'inherit',
                fontWeight: 500, transition: 'all 0.15s',
              }}
              onMouseEnter={e => { e.target.style.background = '#3B1F1F'; e.target.style.color = '#F87171'; }}
              onMouseLeave={e => { e.target.style.background = 'transparent'; e.target.style.color = 'var(--text3)'; }}
            >Reset</button>
            <button
              onClick={handleSave}
              style={{
                fontSize: 12, padding: '7px 18px', borderRadius: 8, border: 'none',
                background: saveFlash ? '#059669' : dirty ? 'var(--accent)' : 'var(--border2)',
                color: '#fff', cursor: 'pointer', fontFamily: 'inherit',
                fontWeight: 600, transition: 'all 0.2s', letterSpacing: '0.01em',
              }}
            >
              {saveFlash ? '✓ Tersimpan!' : dirty ? '💾 Simpan' : 'Simpan'}
            </button>
          </div>
        </div>
      )}

      <style jsx global>{`
        @media (max-width: 768px) {
          .fields-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  )
}

function FieldBox({ field, value, onChange }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      <div style={{
        display: 'flex', alignItems: 'center', gap: 5,
        fontSize: 10, fontWeight: 700, letterSpacing: '0.08em',
        textTransform: 'uppercase', color: field.color,
      }}>
        <span>{field.emoji}</span>
        {field.label}
      </div>
      <textarea
        value={value}
        onChange={e => onChange(e.target.value)}
        onClick={e => e.stopPropagation()}
        placeholder={field.placeholder}
        style={{
          width: '100%', minHeight: 120, padding: '10px 12px',
          border: `1px solid ${value ? field.color + '50' : 'var(--border)'}`,
          borderRadius: 8,
          fontFamily: 'inherit', fontSize: 12.5, lineHeight: 1.6,
          color: 'var(--text)',
          background: value ? field.color + '08' : 'var(--bg)',
          resize: 'vertical', outline: 'none',
          transition: 'all 0.2s',
        }}
        onFocus={e => {
          e.target.style.borderColor = field.color
          e.target.style.boxShadow = `0 0 0 3px ${field.color}20`
        }}
        onBlur={e => {
          e.target.style.borderColor = value ? field.color + '50' : 'var(--border)'
          e.target.style.boxShadow = 'none'
        }}
      />
    </div>
  )
}
