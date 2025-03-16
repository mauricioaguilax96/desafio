// Home.js: Página principal que muestra la lista de juegos, búsqueda y filtros
import { useState, useEffect } from 'react';
import axios from 'axios'; // Biblioteca para hacer peticiones HTTP
import GameList from '../components/GameList';
import SearchBar from '../components/SearchBar';
import Filters from '../components/Filters';
import backgroundImage from '../assets/gaming-background.jpg';

const Home = () => {
  // Estado para almacenar la lista de juegos obtenida de la API
  const [games, setGames] = useState([]);
  // Estado para la consulta de búsqueda ingresada por el usuario
  const [searchQuery, setSearchQuery] = useState('');
  // Estado para los filtros seleccionados (año, género, etc.)
  const [filters, setFilters] = useState({});

  useEffect(() => {
    // Función asíncrona para obtener los juegos de la API de RAWG
    const fetchGames = async () => {
      try {
        const response = await axios.get('https://api.rawg.io/api/games', {
          params: {
            // Clave de la API desde .env
            key: process.env.REACT_APP_RAWG_API_KEY,
            ordering: '-metacritic',
            search: searchQuery || undefined,
            ...filters,
          },
        });
        // Actualiza el estado con los resultados (o array vacío si no hay datos)
        setGames(response.data.results || []);
      } catch (error) {
        console.error('Error fetching games:', error);
      }
    };
    fetchGames();
  }, [searchQuery, filters]);

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)',
        backgroundImage: `url(${backgroundImage})`, // Imagen de fondo gaming
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#fff',
        padding: '20px',
      }}
    >
      <h1 style={{ textAlign: 'center', fontFamily: 'Arial, sans-serif', textShadow: '0 0 10px #00ffcc' }}>
        Videojuegos
      </h1>
      {/* Componente de búsqueda, pasa la función para actualizar searchQuery */}
      <SearchBar setSearchQuery={setSearchQuery} />
      {/* Componente de filtros, pasa la función para actualizar filters */}
      <Filters setFilters={setFilters} />
      {/* Condicional: muestra la lista de juegos o un mensaje si no hay resultados */}
      {games.length > 0 ? (
        <GameList games={games} />
      ) : (
        <p style={{ textAlign: 'center', fontStyle: 'italic' }}>No se encontraron videojuegos.</p>
      )}
    </div>
  );
};

export default Home; // Exporta el componente para usarlo en las rutas
