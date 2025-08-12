// En tu componente Item.js

import React from 'react';

const Item = ({ item }) => {
    return (
        <div className="card mb-4">
            <img
                src={item.imagen}
                className="card-img-top img-fluid"
                alt={item.marca}
                // Cambia 'cover' por 'contain'
                style={{ height: '200px', objectFit: 'contain' }}
            />
            <div className="card-body">
                <h5 className="card-title">{item.tipo}</h5>
                <p className="card-text">{item.marca}</p>
                <p className="card-text">{item.modelo}</p>
                <p className="card-text">{item.anio}</p>
                <p className="card-text">{item.disponible ? "No disponible" : 'Disponible'}</p>
                <p className="card-text"><strong>Precio:</strong> ${item.precioPorDia}</p>
                <a href={`/item/${item.id}`} className="btn btn-primary">Ver Detalles</a>
            </div>
        </div>
    );
}

export default Item;