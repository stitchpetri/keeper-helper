import { useParams, Link } from 'react-router-dom'
import { SOP_SECTIONS } from '../data/sops'

export default function SOPDetail() {
  const { id } = useParams()
  const sop = SOP_SECTIONS.find(s => s.id === id)
console.log(sop.pdfUrl)
  if (!sop) {
    return (
      <main className="mx-auto max-w-3xl px-4 py-6">
        <p className="mb-4">SOP not found.</p>
        <Link className="underline" to="/sops">Back to SOPs</Link>
      </main>
    )
  }

  return (
    <main className="mx-auto max-w-5xl px-4 py-6">
      <Link to="/sops" className="text-sm text-neutral-600 underline">← Back to SOPs</Link>

      <div className="mt-2 text-xs text-neutral-500">
        Areas: {Array.isArray(sop.areas) && sop.areas.length ? sop.areas.join(', ') : '—'}
      </div>
      <h1 className="text-2xl font-semibold mt-1">{sop.title}</h1>
      {sop.summary && <p className="text-neutral-700 mt-2">{sop.summary}</p>}

      {/* Embedded PDF */}
      {sop.pdfUrl ? (
        <div className="mt-6 rounded-xl border bg-white shadow-sm overflow-hidden">
          <iframe
            title={`${sop.title} PDF`}
            src={sop.pdfUrl}
            className="w-full h-[75vh]"
          />
        </div>
      ) : (
        <p className="mt-6 text-sm text-neutral-600">No PDF attached.</p>
      )}

      {/* Optional: open in new tab */}
      {sop.pdfUrl && (
        <a
          href={sop.pdfUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-block text-sm underline"
        >
          Open PDF in new tab
        </a>
      )}
    </main>
  )
}
