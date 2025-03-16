// GameList.js: Componente que muestra una cuadrícula de tarjetas de juegos
import GameCard from './GameCard';

const GameList = ({ games }) => (
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
      gap: '20px',
      padding: '20px',
    }}
  >
    {/* Mapea los juegos y renderiza una tarjeta por cada uno */}
    {games.map((game) => (
      <GameCard key={game.id} game={game} />
    ))}
  </div>
);

export default GameList; // Exporta el componente para usarlo en Home