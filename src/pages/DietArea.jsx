// src/pages/DietArea.jsx
import { useParams, Link } from 'react-router-dom'
import { useMemo, useState } from 'react'
import { DIETS } from '../data/diets'
import { ANIMALS } from '../data/animals'

function labelForDiet(d) {
  if (d.label) return d.label
  if (d.animalId) {
    const a = ANIMALS.find(x => x.id === d.animalId)
    return a ? `${a.name} — ${a.species}` : d.animalId
  }
  return 'Diet'
}

export default function DietArea() {
  const { area } = useParams()
  const diets = useMemo(() => {
    return DIETS
      .filter(d => String(d.area) === String(area))
      .map(d => ({ ...d, _label: labelForDiet(d) }))
      .sort((a, b) => a._label.localeCompare(b._label, undefined, { numeric: true }))
  }, [area])

  // Collapsible state (store keys of open items)
  const [open, setOpen] = useState(() => new Set())
  const keyFor = (d, i) => d.animalId || d.label || `diet-${i}`
  const isOpen = k => open.has(k)
  const toggle = k =>
    setOpen(prev => {
      const n = new Set(prev)
      n.has(k) ? n.delete(k) : n.add(k)
      return n
    })
  const expandAll = () => setOpen(new Set(diets.map((d, i) => keyFor(d, i))))
  const collapseAll = () => setOpen(new Set())

  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-6">
      <div className="flex items-center justify-between mb-4">
        <div>
          <Link to="/diets" className="text-sm text-neutral-600 underline">← Back to Diets</Link>
          <h1 className="text-2xl font-semibold mt-1">Area {area} — Diets</h1>
        </div>
        {diets.length > 0 && (
          <div className="hidden sm:flex gap-2">
            <button onClick={expandAll} className="text-sm underline">Expand all</button>
            <button onClick={collapseAll} className="text-sm underline">Collapse all</button>
          </div>
        )}
      </div>

      {diets.length === 0 ? (
        <p className="text-neutral-600">No diet entries yet for this area.</p>
      ) : (
        <ul className="space-y-3">
          {diets.map((d, i) => {
            const k = keyFor(d, i)
            const openNow = isOpen(k)

            return (
              <li key={k} className="rounded-2xl border  shadow-sm">
                {/* Header button */}
                <button
                  type="button"
                  aria-expanded={openNow}
                  onClick={() => toggle(k)}
                  className="w-full text-left p-4 flex items-start justify-between gap-4"
                >
                  <div className="min-w-0"> {/* ensures wrapping on mobile */}
                    <div className="text-sm text-neutral-500 flex flex-wrap gap-1 mb-1">
                      {(d.schedule || []).map(s => (
                        <span key={s} className="text-xs rounded-full border px-2 py-0.5">
                          {s}
                        </span>
                      ))}
                      {d.prep ? (
                        <span className="text-xs rounded-full border  px-2 py-0.5">Prep</span>
                      ) : null}
                    </div>
                    <h2 className="font-medium break-words whitespace-normal">
                      {d._label}
                    </h2>
                  </div>
                  <div className="shrink-0 text-neutral-400">{openNow ? '▴' : '▾'}</div>
                </button>

                {/* Body */}
                {openNow && (
                  <div className="px-4 pb-4">
                    {/* Mobile layout: stacked list (full-width, wraps nicely) */}
                    <ul className="sm:hidden mt-1 space-y-1">
                      {d.items?.map((it, idx) => (
                        <li key={idx} className="rounded-lg border px-3 py-2">
                          <div className="text-sm font-medium break-words whitespace-normal">
                            {it.name}
                          </div>
                          <div className="text-xs text-neutral-500 mt-0.5 break-words whitespace-normal">
                            {it.qty || '—'}
                          </div>
                        </li>
                      ))}
                    </ul>

                    {/* Desktop layout: table with safe overflow */}
                    {d.items?.length ? (
                      <div className="hidden sm:block overflow-x-auto -mx-4 px-4 mt-1">
                        <table className="w-full text-sm">
                          <thead>
                            <tr className="text-left text-neutral-500 border-b">
                              <th className="py-1 pr-3">Item</th>
                              <th className="py-1 w-56 md:w-80">Qty</th>
                            </tr>
                          </thead>
                          <tbody>
                            {d.items.map((it, idx) => (
                              <tr key={idx} className="align-top border-b">
                                <td className="py-1 pr-3 break-words whitespace-normal text-neutral-500">
                                  {it.name}
                                </td>
                                <td className="py-1 break-words whitespace-normal text-neutral-500">
                                  {it.qty || '—'}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    ) : null}

                    {d.notes ? (
                      <p className="mt-3 text-sm text-neutral-700 break-words whitespace-normal">
                        {d.notes}
                      </p>
                    ) : null}
                  </div>
                )}
              </li>
            )
          })}
        </ul>
      )}
    </main>
  )
}
