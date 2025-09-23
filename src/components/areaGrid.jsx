import { AREAS } from '../data/areas'
import AreaCard from './areaCard'


export default function AreaGrid() {
    const handleSelect = (area) => {
    // placeholder: route later or open drawer
    alert(`Open ${area.name}`)
    }
    return (
        <section aria-label="Areas">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {AREAS.map((a) => (
                <AreaCard key={a.id} area={a} onClick={handleSelect} />)
                
                )}
            </div>
        </section>
    )
}