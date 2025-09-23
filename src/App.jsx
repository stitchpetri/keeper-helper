import Header from './components/header'
import Footer from './components/Footer'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import SOPs from './pages/SOPs'
import SOPDetail from './pages/SOPDetail'
import Diets from './pages/Diets'
import DietArea from './pages/DietArea'
//import DietsAll from './pages/DietsAll' 
 


export default function App() {
return (
<div className="min-h-dvh">
  <Header />
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/sops" element={<SOPs />} />
    <Route path="/sops/:id" element={<SOPDetail />} />
    <Route path="/diets/:area" element={<DietArea />} />
    <Route path="/diets" element={<Diets />} />
    <Route path="*" element={<div className="mx-auto max-w-3xl px-4 py-6">Not found</div>} />
  </Routes>
  <Footer />
</div>
)
}