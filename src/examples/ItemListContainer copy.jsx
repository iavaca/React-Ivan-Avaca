import 'bootstrap/dist/css/bootstrap.min.css';
import { getVehiculos } from '../mock/mock';
import { useEffect, useState } from 'react';



const dataListContainer = ({ texto }) => {
    // Estado para controlar la visibilidad de TODO el catálogo
const [data, setData] = useState([]);
  useEffect(() => {
    getVehiculos()
    .then((res) => setData(res))
    .catch((error) => console.error('Error al obtener los datos:', error));
    getVehiculos().then((data) => {
      console.log('Datos obtenidos:', data);
    }).catch((error) => {
      console.error('Error al obtener los datos:', error);
    });
  }, []);
  
   
      
      // Estado que guarda el ID del data seleccionado, o null si no hay ninguno.
      const [selecteddata, setSelecteddata] = useState(null);
      console.log(selecteddata);  
  
    
      
      // Depuración: La función ahora simplemente alterna el estado
      // de 'selecteddata'. Si el ID que se recibe es el mismo que ya está,
      // se pone a 'null' para ocultar los detalles. Si es diferente, se
      // guarda la nueva ID para mostrar los detalles del nuevo ítem.
      const toggleDetalles = (dataId) => {
          setSelecteddata(selecteddata === dataId ? null : dataId);
      }
      
  
    // Mostrar spinner mientras se cargan los datos
    if (data.length === 0) {
      return (
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '300px' }}>
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Cargando...</span>
        </div>
        </div>
      );
    }

    return (
     <div>
         
  
         
            <div className="container my-4">
                <h1 className="mb-4 text-center">{texto}</h1>
                <div className="row">
                  
                 
                   {data.map((data) => 
                        <div key={data.id} className="col-md-4 mb-4">
                         
                          <div className="card h-100">
                            <img src={data.imagen} alt={data.modelo} className="card-img-top" />
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title">{data.tipo} {data.marca}</h5>
                                <p className="card-text">Año: {data.año}</p>
                                <p className="card-text">Precio por día: ${data.precioPorDia}</p>
                                <p className="card-text">Disponibilidad: {data.disponible ? 'Disponible' : 'No disponible'}</p>
                                
                                {/* Los detalles solo se muestran si el ID del data es el que está guardado en el estado */}
                                {selecteddata == data.id && (
                                  <p className="card-text">
                                    <strong>Detalles:</strong> {data.detalles}
                                  </p>
                                )}
  
                                {/* El botón ahora llama a la función con el ID del data actual */}
                                {/* El texto del botón también depende de si este data está seleccionado */}
                                <button className="btn btn-primary mt-auto" onClick={() => toggleDetalles(data.id)}>
                                  {selecteddata === data.id ? 'Ocultar Detalles' : 'Mostrar Detalles'}
                                </button>
                            </div>
                          </div>
                        </div>
                    )}
                  
                </div>
            </div>
          
        </div>
    );
  }
  
  export default dataListContainer;
  