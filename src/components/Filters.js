// Filters.js: Componente para los filtros de búsqueda
const Filters = ({ setFilters }) => {
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value || undefined }));
  };

  const selectStyle = {
    margin: '0 10px',
    padding: '8px',
    borderRadius: '5px',
    border: '1px solid #00ffcc',
    background: '#222',
    color: '#fff',
    fontSize: '14px',
    cursor: 'pointer',
  };

  return (
    <div style={{ textAlign: 'center', margin: '20px 0' }}>
      {/* Filtro por año */}
      <select name="dates" onChange={handleFilterChange} style={selectStyle}>
        <option value="">Año</option>
        <option value="2023-01-01,2023-12-31">2023</option>
        <option value="2022-01-01,2022-12-31">2022</option>
        <option value="2021-01-01,2021-12-31">2021</option>
      </select>
      {/* Filtro por género */}
      <select name="genres" onChange={handleFilterChange} style={selectStyle}>
        <option value="">Género</option>
        <option value="action">Acción</option>
        <option value="adventure">Aventura</option>
        <option value="rpg">RPG</option>
      </select>
      {/* Filtro por plataforma */}
      <select name="platforms" onChange={handleFilterChange} style={selectStyle}>
        <option value="">Plataforma</option>
        <option value="4">PC</option>
        <option value="1">Xbox One</option>
        <option value="18">PlayStation 4</option>
      </select>
      {/* Filtro por tags */}
      <select name="tags" onChange={handleFilterChange} style={selectStyle}>
        <option value="">Tags</option>
        <option value="singleplayer">Un jugador</option>
        <option value="multiplayer">Multijugador</option>
      </select>
      {/* Filtro por desarrollador */}
      <select name="developers" onChange={handleFilterChange} style={selectStyle}>
        <option value="">Desarrollador</option>
        <option value="rockstar-games">Rockstar Games</option>
        <option value="cd-projekt-red">CD Projekt Red</option>
      </select>
    </div>
  );
};

export default Filters; // Exporta el componente para usarlo en Home