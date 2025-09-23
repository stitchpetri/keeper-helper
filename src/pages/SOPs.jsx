import { Link, useSearchParams } from 'react-router-dom'
import { SOP_SECTIONS } from '../data/sops'


export default function SOPs() {
    const [params, setParams] = useSearchParams()
    const areaFilter = params.get('area') || ''
    const filtered = areaFilter
    ? SOP_SECTIONS.filter(s => s.area.toLowerCase() === areaFilter.toLowerCase())
    : SOP_SECTIONS


    return (
        <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-6">
        <div className="flex items-end justify-between mb-4 gap-3">
            <h1 className="text-2xl font-semibold">Standard Operating Procedures</h1>
            
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map(sop => (
            <li key={sop.id}>
                <Link
                to={`/sops/${sop.id}`}
                className="block rounded-2xl border p-4 shadow-sm hover:shadow-md transition-shadow"
                >
                    <div className="text-xs text-neutral-500 mb-1"> Areas {Array.isArray(sop.areas) && sop.areas.length > 0
                  ? sop.areas.join(', ')
                  : '—'}</div>
                    <h2 className="font-medium">{sop.title}</h2>
                    <p className="text-sm text-neutral-600 mt-1 line-clamp-2">{sop.summary}</p>
                </Link>
            </li>
            ))}
        </ul>
        </main>
    )
}