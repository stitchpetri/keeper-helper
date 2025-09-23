// src/pages/Diets.jsx
import { Link } from 'react-router-dom'
import { DIETS } from '../data/diets'

export default function Diets() {
  // unique, sorted area IDs (e.g., ["1","3A","3B","4",...])
  const areas = Array.from(new Set(DIETS.map(d => d.area))).sort((a, b) =>
    String(a).localeCompare(String(b), undefined, { numeric: true })
  )

  // count entries per area
  const countByArea = areas.reduce((acc, a) => {
    acc[a] = DIETS.filter(d => d.area === a).length
    return acc
  }, {})

  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-6">
      <div className="flex items-end justify-between mb-4 gap-3">
        <h1 className="text-2xl font-semibold">Diets</h1>
      </div>

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {areas.map(area => (
          <li key={area}>
            <Link
              to={`/diets/${area}`}
              className="block rounded-2xl border p-4 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-xs text-neutral-500">Area</div>
              <h2 className="font-medium text-lg">{area}</h2>
              <div className="text-xs text-neutral-500 mt-1">
                {countByArea[area]} diet entr{countByArea[area] === 1 ? 'y' : 'ies'}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  )
}
