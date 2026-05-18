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
        const hasYear = t.years.some(y => activeYears.has(y))
        if (!hasYear) return false
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
    // trigger save on all open cards — we'll re-count filled after
    setTimeout(() => setFilledCount(countFilled()), 300)
  }, [])

  return (
    <>
      <Header search={search} onSearch={setSearch} onSaveAll={handleSaveAll} />
      <div style={{ display: 'flex' }}>
        {/* Sidebar hidden on mobile via inline media trick */}
        <div className="sidebar-wrap">
          <Sidebar activeSys={activeSys} onSelect={setActiveSys} topicCounts={topicCounts} />
        </div>

        <main style={{ flex: 1, padding: '1.25rem 1.5rem', minWidth: 0, maxWidth: 920 }}>
          <div style={{ marginBottom: '0.5rem' }}>
            <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: '1.05rem',
              color: 'var(--muted)', fontWeight: 400, marginBottom: 8 }}>
              {activeSys === 'all' ? 'Semua Sistem Organ' :
                SYSTEMS.find(s => s.key === activeSys)?.label}
            </div>
            <div style={{ padding: '8px 12px', background: '#FEF9C3', border: '1px solid #FDE047',
              borderRadius: 8, fontSize: 12, color: '#713F12', marginBottom: 10 }}>
              <strong>⚠️ Koreksi Human Error Excel:</strong> Data telah disesuaikan —
              mis. ANC & Mastitis (dipindah ke Obgyn), Gizi Buruk/Cushing (→ Endokrin),
              Syok Anafilaksis (→ Hemato), Meniscus Tear (→ Musku), Dermatitis (→ Integumen), dll.
            </div>
          </div>

          <FilterBar
            activeYears={activeYears}
            onToggle={toggleYear}
            stats={{ total: filtered.total, multi: filtered.multi, filled: filledCount }}
          />

          {filtered.sections.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '3rem 1rem',
              color: 'var(--muted)', fontSize: 14 }}>
              😕 Tidak ada topik untuk filter ini.
            </div>
          ) : (
            filtered.sections.map(({ sys, topics }) => (
              <section key={sys.key} style={{ marginBottom: '1.75rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8,
                  marginBottom: '0.65rem', paddingBottom: '0.4rem',
                  borderBottom: '1.5px solid var(--border)' }}>
                  <span style={{ fontSize: 18 }}>{sys.icon}</span>
                  <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: '1.15rem',
                    fontWeight: 400 }}>{sys.label}</h2>
                  <span style={{ marginLeft: 'auto', fontSize: 12, color: 'var(--muted)' }}>
                    {topics.length} topik
                  </span>
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
        .sidebar-wrap { display: block; }
        @media (max-width: 680px) { .sidebar-wrap { display: none; } }
        main { max-width: 100%; }
      `}</style>
    </>
  )
}
