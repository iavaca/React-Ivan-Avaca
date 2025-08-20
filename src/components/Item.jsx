import React from 'react';
import { Link } from 'react-router-dom';
import { FaDollarSign } from 'react-icons/fa';

const Item = ({ item }) => { // El componente se llama Item, no Items
    return (
        <div className="card h-100 shadow-sm border-0 rounded-lg overflow-hidden">
            <div className="position-relative">
                <Link to={`/item/${item.id}`}>
                    <img
                        src={item.imagen}
                        className="card-img-top"
                        alt={`${item.marca} ${item.modelo}`}
                        style={{ height: '200px', objectFit: 'contain', padding: '1rem' }}
                    />
                </Link>
                <div className={`badge position-absolute top-0 end-0 m-3 p-2 text-uppercase fw-bold rounded-pill 
                    ${item.disponible ? 'bg-success-subtle text-success-emphasis' : 'bg-danger-subtle text-danger-emphasis'}`}>
                    {item.disponible ? 'Disponible' : 'No Disponible'}
                </div>
            </div>
            <div className="card-body d-flex flex-column p-3">
                <h5 className="card-title fw-bold text-dark mb-1">{item.tipo}</h5>
                <h6 className="card-subtitle text-muted mb-3">{`${item.marca} - ${item.modelo} (${item.anio})`}</h6>
                
                <div className="mt-auto d-flex justify-content-between align-items-center pt-3 border-top">
                    <h5 className="fw-bold text-primary mb-0">
                        <FaDollarSign className="text-secondary" /> {item.precioPorDia}<span className="text-secondary small fw-normal">/día</span>
                    </h5>
                    <Link to={`/item/${item.id}`} className="btn btn-primary btn-sm">Ver Detalles</Link>
                </div>
            </div>
        </div>
    );
}

export default Item;