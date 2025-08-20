import React from 'react';
import { FaDollarSign, FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import ItemCount from './NewCount'; // Asumiendo que NewCount.jsx ahora exporta ItemCount

const ItemDetails = ({ item }) => {
    const handleAddToCart = (quantity) => {
        // Lógica para agregar al carrito
        console.log(`Agregando ${quantity} de ${item.modelo} al carrito.`);
        // Aquí podrías, por ejemplo, actualizar un estado global o contexto del carrito.
    };

    return (
        <div className="card h-100 shadow-sm border-0 rounded-lg overflow-hidden transition-transform transform-hover">
            <div className="position-relative">
             <img
    src={item.imagen}
    className="card-img-top img-fluid"
    alt={`${item.tipo} ${item.marca} ${item.modelo}`}
    style={{ height: '220px', objectFit: 'contain' }}
/>
                <div className={`badge position-absolute top-0 end-0 m-3 p-2 text-uppercase fw-bold rounded-pill
                    ${item.disponible ? 'bg-success text-white' : 'bg-danger text-white'}`}>
                    {item.disponible ? 'Disponible' : 'No Disponible'}
                </div>
            </div>
            <div className="card-body d-flex flex-column p-4">
                <h5 className="card-title fw-bold text-dark mb-1">{item.tipo}</h5>
                <h6 className="card-subtitle text-muted mb-3">{`${item.marca} - ${item.modelo} (${item.anio})`}</h6>
                
                <p className="card-text text-secondary small mb-2">{item.detalles}</p>
                
                <div className="mt-auto pt-3">
                    <div className="d-flex align-items-center mb-3">
                        <h4 className="fw-bold text-primary mb-0 me-2">
                            <FaDollarSign className="text-secondary" /> {item.precioPorDia}
                        </h4>
                        <span className="text-secondary small">/día</span>
                    </div>
                    {item.disponible && <ItemCount stock={10} initial={1} onAdd={handleAddToCart} />}
                </div>
            </div>
        </div>
    );
};
export default ItemDetails;