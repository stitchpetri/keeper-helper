// src/pages/DietArea.jsx
import { useParams, Link } from 'react-router-dom'
import { useMemo } from 'react'
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

  // only this area’s entries, stable-sorted by label
  const diets = useMemo(() => {
    return DIETS
      .filter(d => String(d.area) === String(area))
      .map(d => ({ ...d, _label: labelForDiet(d) }))
      .sort((a, b) => a._label.localeCompare(b._label, undefined, { numeric: true }))
  }, [area])

  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-6">
      <div className="flex items-center justify-between mb-4">
        <div>
          <Link to="/diets" className="text-sm text-neutral-600 underline">← Back to Diets</Link>
          <h1 className="text-2xl font-semibold mt-1">Area {area} — Diets</h1>
        </div>
      </div>

      {diets.length === 0 ? (
        <p className="text-neutral-600">No diet entries yet for this area.</p>
      ) : (
        <ul className="space-y-3">
          {diets.map((d, i) => {
            const key = d.animalId || d.label || `diet-${i}`
            return (
              <li key={key} className="rounded-2xl border p-4 shadow-sm">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="text-sm text-neutral-500 flex flex-wrap gap-1 mb-1">
                      {(d.schedule || []).map(s => (
                        <span key={s} className="text-xs rounded-full border px-2 py-0.5">{s}</span>
                      ))}
                      {d.prep ? (
                        <span className="text-xs rounded-full border px-2 py-0.5">Prep</span>
                      ) : null}
                    </div>
                    <h2 className="font-medium">{d._label}</h2>
                  </div>
                </div>

                {d.items?.length ? (
                  <table className="w-full text-sm mt-2">
                    <thead>
            
                      <tr className="text-left text-neutral-500">
                        
                        <th className="py-1 border-b">Item</th>
                        <th className="py-1 w-80 border-b">Qty</th>
                      </tr>
                    </thead>
                    <tbody>
                      {d.items.map((it, idx) => (
                        <tr key={idx} className="align-top">
                          <td className="py-1 text-neutral-600 pr-3 border-b">{it.name}</td>
                          <td className="py-1 text-neutral-600 border-b">{it.qty || '—'}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ) : null}

                {d.notes ? <p className="mt-3 text-sm text-neutral-700">{d.notes}</p> : null}
              </li>
            )
          })}
        </ul>
      )}
    </main>
  )
}
