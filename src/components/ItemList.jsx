import React from 'react';
import Item from './Item';

const ItemList = ({ data }) => {
    // La lógica de carga y de "no hay resultados" se maneja mejor en el componente padre (ItemListContainer)
    return (
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {data.map((item) => (
                <div className="col" key={item.id}>
                    <Item item={item} />
                </div>
            ))}
        </div>
    );
}       

export default ItemList;