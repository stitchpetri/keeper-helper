export default function Footer() {
return (
<footer className="mt-8 border-t">
<div className="mx-auto max-w-6xl px-4 py-3 text-xs text-neutral-400 flex items-center justify-between">
<span>© {new Date().getFullYear()} Keeper Helper</span>
<span>v0.1</span>
</div>
</footer>
)
}