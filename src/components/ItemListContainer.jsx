import 'bootstrap/dist/css/bootstrap.min.css';
import { getVehiculos } from '../mock/mock';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';

const ItemListContainer = ({ texto, categoryId: propCategoryId }) => {
    const [vehicles, setVehicles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [title, setTitle] = useState(texto);
    const { categoryId: paramCategoryId } = useParams();

    const categoryId = propCategoryId || paramCategoryId;

    useEffect(() => {
        setLoading(true);
        setError(null);

        getVehiculos()
            .then((res) => {
                if (categoryId) {
                    const filteredData = res.filter(item => item.categoria === categoryId);
                    setVehicles(filteredData);
                    setTitle(categoryId);
                } else {
                    setVehicles(res);
                    setTitle(texto || "Catálogo de Vehículos");
                }
            })
            .catch((err) => {
                console.error('Error al obtener los datos:', err);
                setError('No se pudieron cargar los vehículos. Intente más tarde.');
            })
            .finally(() => {
                setLoading(false);
            });
    }, [categoryId, texto]);

    if (loading) {
        return (
            <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '300px' }}>
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Cargando...</span>
                </div>
            </div>
        );
    }

    if (error) {
        return <div className="text-center mt-5 text-danger"><p>{error}</p></div>;
    }

    return (
        <div>
            <h2 className="text-center mt-4">{title}</h2>
            <ItemList data={vehicles} />
            {vehicles.length === 0 && <p className="text-center mt-4">No se encontraron vehículos en esta categoría.</p>}
        </div>
    );
  }
  
  export default ItemListContainer;