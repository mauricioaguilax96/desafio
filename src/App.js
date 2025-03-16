import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'; // Importa la página de inicio
import GamePage from './pages/GamePage'; // Importa la página de detalle del juego

function App() {
  return (
    <Router>
      <Routes>
        {/* Ruta raíz ("/") renderiza la página de inicio */}
        <Route path="/" element={<Home />} />
        {/* Ruta dinámica ("/game/:id") renderiza la página de detalle según el ID del juego */}
        <Route path="/game/:id" element={<GamePage />} />
      </Routes>
    </Router>
  );
}

export default App; // Exporta el componente para ser usado en index.js