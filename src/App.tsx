import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { supabase } from './lib/supabase';

function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 grid place-items-center">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-emerald-400">TropelCare</h1>
        <p className="text-slate-400">Checkpoint 0 funcionando</p>
        <p className="text-xs text-slate-500">
          Supabase: {supabase ? 'cliente creado ✅' : '❌'}
        </p>
        <Link to="/otra-ruta" className="underline text-sky-400">
          Probar otra ruta
        </Link>
      </div>
    </main>
  );
}

function OtraRuta() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 grid place-items-center">
      <p>Si recargas aquí en el deploy y no da 404, el rewrite funciona.</p>
    </main>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/otra-ruta" element={<OtraRuta />} />
      </Routes>
    </BrowserRouter>
  );
}