'use client'
import { useState, useMemo, useCallback, useEffect } from 'react'
import { SYSTEMS, buildTopics } from '@/data/oscData'
import Sidebar from '@/components/Sidebar'
import Header from '@/components/Header'
import FilterBar from '@/components/FilterBar'
import TopicCard from '@/components/TopicCard'

const ALL_TOPICS = buildTopics()
const YEARS = [2022, 2023, 2024, 2025]

function countFilled() {
  if (typeof window === 'undefined') return 0
  let n = 0
  for (const sys of SYSTEMS) {
    for (const t of (ALL_TOPICS[sys.key] || [])) {
      try {
        const note = JSON.parse(localStorage.getItem(`osce_v2_${t.id}`)) || {}
        if (note.ss || note.dd || note.tx) n++
      } catch {}
    }
  }
  return n
}

export default function Home() {
  const [activeSys, setActiveSys] = useState('all')
  const [activeYears, setActiveYears] = useState(new Set(YEARS))
  const [search, setSearch] = useState('')
  const [filledCount, setFilledCount] = useState(0)
  const [sidebarOpen, setSidebarOpen] = useState(false)

  useEffect(() => { setFilledCount(countFilled()) }, [])

  const toggleYear = useCallback((yr) => {
    setActiveYears(prev => {
      if (prev.size === 1 && prev.has(yr)) return prev
      const next = new Set(prev)
      next.has(yr) ? next.delete(yr) : next.add(yr)
      return next
    })
  }, [])

  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim()
    const systems = activeSys === 'all' ? SYSTEMS : SYSTEMS.filter(s => s.key === activeSys)
    const result = []
    let total = 0, multi = 0
    for (const sys of systems) {
      const topics = (ALL_TOPICS[sys.key] || []).filter(t => {
        if (!t.years.some(y => activeYears.has(y))) return false
        if (!q) return true
        return [t.name, t.ss, t.dd, t.tx].join(' ').toLowerCase().includes(q)
      })
      if (topics.length > 0) {
        result.push({ sys, topics })
        total += topics.length
        multi += topics.filter(t => t.years.length > 1).length
      }
    }
    return { sections: result, total, multi }
  }, [activeSys, activeYears, search])

  const topicCounts = useMemo(() => {
    const counts = {}
    for (const sys of SYSTEMS) {
      counts[sys.key] = (ALL_TOPICS[sys.key] || []).filter(t =>
        t.years.some(y => activeYears.has(y))
      ).length
    }
    return counts
  }, [activeYears])

  const handleSaveAll = useCallback(() => {
    setTimeout(() => setFilledCount(countFilled()), 300)
  }, [])

  const handleSysSelect = (sys) => {
    setActiveSys(sys)
    setSidebarOpen(false)
  }

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)' }}>
      <Header search={search} onSearch={setSearch} onSaveAll={handleSaveAll} />

      <div style={{ display: 'flex' }}>
        {/* Desktop Sidebar */}
        <div className="desktop-sidebar">
          <Sidebar activeSys={activeSys} onSelect={handleSysSelect} topicCounts={topicCounts} />
        </div>

        {/* Mobile Sidebar Overlay */}
        {sidebarOpen && (
          <div style={{ position: 'fixed', inset: 0, zIndex: 200 }}>
            <div onClick={() => setSidebarOpen(false)} style={{
              position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)'
            }} />
            <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 260, zIndex: 201 }}>
              <Sidebar activeSys={activeSys} onSelect={handleSysSelect} topicCounts={topicCounts} />
            </div>
          </div>
        )}

        <main style={{ flex: 1, padding: '16px 20px', minWidth: 0, maxWidth: 960 }}>
          {/* Mobile header row */}
          <div className="mobile-menu-row" style={{ display: 'none', marginBottom: 12 }}>
            <button onClick={() => setSidebarOpen(true)} style={{
              display: 'flex', alignItems: 'center', gap: 8, padding: '8px 14px',
              background: 'var(--surface)', border: '1px solid var(--border)',
              borderRadius: 8, color: 'var(--text2)', cursor: 'pointer',
              fontFamily: 'inherit', fontSize: 13, fontWeight: 500,
            }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
              </svg>
              {activeSys === 'all' ? 'Semua Sistem' : SYSTEMS.find(s => s.key === activeSys)?.label}
            </button>
          </div>

          <FilterBar
            activeYears={activeYears}
            onToggle={toggleYear}
            stats={{ total: filtered.total, multi: filtered.multi, filled: filledCount }}
          />

          {filtered.sections.length === 0 ? (
            <div style={{
              textAlign: 'center', padding: '60px 20px',
              color: 'var(--text3)', fontSize: 14,
            }}>
              <div style={{ fontSize: 48, marginBottom: 12 }}>🔍</div>
              <div style={{ fontWeight: 600, marginBottom: 6 }}>Tidak ada topik ditemukan</div>
              <div style={{ fontSize: 12 }}>Coba ubah filter tahun atau kata kunci pencarian</div>
            </div>
          ) : (
            filtered.sections.map(({ sys, topics }) => (
              <section key={sys.key} style={{ marginBottom: '24px' }}>
                {/* Section header */}
                <div style={{
                  display: 'flex', alignItems: 'center', gap: 10,
                  marginBottom: 10, padding: '10px 14px',
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius)',
                }}>
                  <span style={{ fontSize: 20 }}>{sys.icon}</span>
                  <h2 style={{ fontSize: 15, fontWeight: 700, color: 'var(--text)', letterSpacing: '-0.01em' }}>
                    {sys.label}
                  </h2>
                  <span style={{
                    marginLeft: 'auto', fontSize: 11, padding: '2px 8px',
                    borderRadius: 20, background: 'var(--surface2)',
                    color: 'var(--text3)', fontWeight: 600,
                  }}>{topics.length} topik</span>
                </div>

                {topics.map(topic => (
                  <TopicCard key={topic.id} topic={topic} />
                ))}
              </section>
            ))
          )}
        </main>
      </div>

      <style jsx global>{`
        .desktop-sidebar { display: block; }
        .mobile-menu-row { display: none !important; }
        @media (max-width: 768px) {
          .desktop-sidebar { display: none !important; }
          .mobile-menu-row { display: flex !important; }
        }
      `}</style>
    </div>
  )
}
