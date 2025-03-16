// SearchBar.js: Componente de la barra de búsqueda
const SearchBar = ({ setSearchQuery }) => {
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Busca un videojuego..."
      onChange={handleSearch}
      style={{
        display: 'block',
        margin: '20px auto',
        padding: '10px',
        width: '300px',
        borderRadius: '5px',
        border: '2px solid #00ffcc',
        background: '#333',
        color: '#fff',
        fontSize: '16px',
        boxShadow: '0 0 10px rgba(0, 255, 204, 0.5)',
      }}
    />
  );
};

export default SearchBar; // Exporta el componente para usarlo en Home