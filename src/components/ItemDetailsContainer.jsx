import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getItem } from '../mock/mock';
import ItemDetails from './ItemDetails';

const ItemDetailsContainer = () => {
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { id } = useParams(); // Extrae el 'id' de la URL. ej: /item/5 -> id = '5'

    useEffect(() => {
        setLoading(true); // Opcional: mostrar loading si el id cambia
        getItem(id)
            .then((res) => {
                setItem(res);
            })
            .catch((err) => {
                console.error('Error al obtener los datos:', err);
                setError(err);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [id]); // Se ejecuta cada vez que el 'id' de la URL cambia.

    if (loading) {
        return <div className="text-center mt-5"><p>Cargando detalles del vehículo...</p></div>;
    }

    if (error) {
        return <div className="text-center mt-5 text-danger"><p>Error al cargar los detalles. Por favor, intente más tarde.</p></div>;
    }

    if (!item) {
        return <div className="text-center mt-5"><p>No se encontró el vehículo.</p></div>;
    }

    return (
        <>
            <h2 className="text-center mt-4">Detalles del Vehículo</h2>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <ItemDetails item={item} />
                    </div>
                </div>
            </div>
        </>
    );
}
export default ItemDetailsContainer;
