// GameCard.js: Componente que representa una tarjeta individual de un juego
import { Link } from 'react-router-dom';

const GameCard = ({ game }) => (
  <Link to={`/game/${game.id}`} style={{ textDecoration: 'none' }}>
    <div
      style={{
        background: '#333',
        borderRadius: '10px',
        padding: '10px',
        transition: 'transform 0.2s, box-shadow 0.2s',
        border: '1px solid #00ffcc',
        boxShadow: '0 0 15px rgba(0, 255, 204, 0.3)',
      }}
      // Efecto al pasar el ratón: agranda y aumenta la sombra
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.05)';
        e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 255, 204, 0.7)';
      }}
      // Vuelve al estado original al quitar el ratón
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1)';
        e.currentTarget.style.boxShadow = '0 0 15px rgba(0, 255, 204, 0.3)';
      }}
    >
      <img
        src={game.background_image}
        alt={game.name}
        style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '5px' }}
      />
      <h3 style={{ color: '#fff', fontSize: '18px', margin: '10px 0' }}>{game.name}</h3>
      <p style={{ color: '#00ffcc', fontSize: '14px' }}>
        Metacritic: {game.metacritic || 'N/A'}
      </p>
    </div>
  </Link>
);

export default GameCard; // Exporta el componente para usarlo en GameList