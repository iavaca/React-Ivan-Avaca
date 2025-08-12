import 'bootstrap/dist/css/bootstrap.min.css';
import { getVehiculos } from '../mock/mock';
import { useEffect, useState } from 'react';
import ItemList from './ItemList';



const ItemListContainer = ({ texto }) => {
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
  
   
    // Simulación de una llamada a la API para obtener los datos

    return (
     <div>
         
  
        <h2 className="text-center mt-4">{texto}</h2>
        <ItemList data={data} />
        </div>
    );
  }
  
  export default ItemListContainer;
  