import React from 'react';
import Items from './Item';
const ItemList = ({ data }) => {
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
        <div className="row">
            {data.map((data) => (
                <div className="col-md-4" key={data.id}>
                    <Items item={data} />
                </div>     
                 
            ))}
        </div>
    );
}       

export default ItemList;