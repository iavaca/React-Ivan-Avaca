import { useState, useEffect } from 'react';
import { getVehiculos } from '../mock/mock';
import ItemList from './ItemList';

const Filter = () => {
  const [allVehicles, setAllVehicles] = useState([]);
  const [filteredVehicles, setFilteredVehicles] = useState([]);
  const [filterText, setFilterText] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getVehiculos()
      .then(data => {
        setAllVehicles(data);
        setFilteredVehicles(data);
      })
      .catch(err => {
        console.error("Error al obtener los vehículos:", err);
        setError("No se pudieron cargar los vehículos. Intente más tarde.");
      })
      .finally(() => setLoading(false));
  }, []);

  const handleFilterChange = (e) => {
    const newFilter = e.target.value;
    setFilterText(newFilter);

    if (newFilter.trim() === '') {
      setFilteredVehicles(allVehicles);
    } else {
      const lowercasedFilter = newFilter.toLowerCase();
      const filtered = allVehicles.filter(vehicle =>
        vehicle.marca.toLowerCase().includes(lowercasedFilter) ||
        vehicle.modelo.toLowerCase().includes(lowercasedFilter) ||
        vehicle.tipo.toLowerCase().includes(lowercasedFilter)
      );
      setFilteredVehicles(filtered);
    }
  };

  if (loading) {
    return <div className="text-center mt-5"><p>Cargando vehículos...</p></div>;
  }

  if (error) {
    return <div className="text-center mt-5 text-danger"><p>{error}</p></div>;
  }

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Filtrar Vehículos</h2>
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="filter-container mb-4">
            <input
              type="text"
              value={filterText}
              onChange={handleFilterChange}
              placeholder="Buscar por marca, modelo o tipo..."
              className="form-control form-control-lg"
            />
          </div>
        </div>
      </div>

      <ItemList data={filteredVehicles} />

      {filteredVehicles.length === 0 && !loading && (
        <p className="text-center mt-4">No se encontraron vehículos que coincidan con la búsqueda.</p>
      )}
    </div>
  );
};

export default Filter;