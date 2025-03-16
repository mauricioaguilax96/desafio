// GamePage.js: Página de detalle de un juego específico
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import backgroundImage from '../assets/gaming-background.jpg';

const GamePage = () => {
  const { id } = useParams(); // Extrae el ID del juego de la URL
  const [game, setGame] = useState(null); // Estado para almacenar los datos del juego

  useEffect(() => {
    const fetchGame = async () => {
      try {
        const response = await axios.get(`https://api.rawg.io/api/games/${id}`, {
          params: { key: process.env.REACT_APP_RAWG_API_KEY }, // Clave de la API
        });
        setGame(response.data);
      } catch (error) {
        console.error('Error fetching game details:', error);
      }
    };
    fetchGame();
  }, [id]);

  if (!game) return <p style={{ color: '#fff', textAlign: 'center' }}>Cargando...</p>;

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#fff',
        padding: '40px',
      }}
    >
      <h1 style={{ textShadow: '0 0 10px #00ffcc', fontSize: '36px' }}>{game.name}</h1>
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        <img
          src={game.background_image}
          alt={game.name}
          style={{ maxWidth: '400px', borderRadius: '10px', boxShadow: '0 0 20px rgba(0, 255, 204, 0.5)' }}
        />
        <div style={{ maxWidth: '600px' }}>
          <p><strong>Género:</strong> {game.genres.map((g) => g.name).join(', ')}</p>
          <p><strong>Puntuación Metacritic:</strong> {game.metacritic || 'N/A'}</p>
          <p><strong>Plataformas:</strong> {game.platforms.map((p) => p.platform.name).join(', ')}</p>
          <p><strong>Año de lanzamiento:</strong> {new Date(game.released).getFullYear()}</p>
          <p><strong>Desarrolladores:</strong> {game.developers?.map((d) => d.name).join(', ') || 'N/A'}</p>
          <p><strong>Descripción:</strong> {game.description_raw}</p>
        </div>
      </div>
    </div>
  );
};

export default GamePage; // Exporta el componente para usarlo en las rutas