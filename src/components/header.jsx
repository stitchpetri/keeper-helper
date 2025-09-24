import { NavLink } from 'react-router-dom'


function navClass({ isActive }) {
return [
'px-2 py-1 rounded-md text-sm transition-colors',
isActive ? 'bg-black text-white' : 'text-neutral-700 hover:bg-neutral-200'
].join(' ')
}


export default function Header() {
return (
    <header className="border-b">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
            <NavLink to="/" className="flex items-center gap-3">
                <span className="text-lg font-semibold tracking-wide">Keeper Helper</span>
            </NavLink>
            <nav className="flex items-center gap-2">
                <NavLink to="/sops" className={navClass}>SOPs</NavLink>
                <NavLink to="/diets" className={navClass}>Diets</NavLink>
            </nav>
        </div>
    </header>
)
}