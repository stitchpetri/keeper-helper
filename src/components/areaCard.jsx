export default function AreaCard(area) {
    console.log(area)
return (
<button className="group rounded-2xl border bg-slate-700 p-4 text-center shadow-sm hover:shadow-md transition-shadow focus:outline-none focus:ring-2 focus:ring-black/10"
onClick={() => onClick?.(area)}
>
    <div className="flex items-center gap-2">
        <div className="text-2xl md:text-3xl">{area.area.emoji}</div>
        <div className="flex-1">
            <div className="font-medium md:text-lg text-center">{area.area.id}</div>
            <div className="text-gray-400">{area.area.name}</div>
        </div>
        <div className="opacity-0 group-hover:opacity-100 transition-opacity text-neutral-400">→</div>
    </div>
</button>
)
}