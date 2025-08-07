import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/ItemListContainer.css';
import BotonMultiuso from '../examples/BotonMultiuso';
import React, { useState } from 'react';

const ItemListContainer = ({ texto, items }) => {

    const [oculta , setOculta] = useState(false);

const toggleOculta = () => {
    setOculta(!oculta);
}



    return (
        <div >     
        <BotonMultiuso onClickHandler={toggleOculta} pading="1rem" borderRadius="5px" color="black">Mostrar Catalogo
                                           </BotonMultiuso>
  
        
        <div className="container my-4" style={{ display: oculta ? 'none' : 'block' }}> 
            <h1 className="mb-4 text-center">{texto}</h1>
            <div className="row">
                {items && items.length > 0 ? (
                    items.map((item) => (
                        <div key={item.id} className="col-md-4 mb-4">
                            <div className="card h-100">
                                <div className="card-body">
                                    <h5 className="card-title">{item.marca} {item.modelo}</h5>
                                    <p className="card-text">Año: {item.km}</p>
                                    <p className="card-text">Año: {item.año}</p>
                                    <button className="btn btn-primary">Ver Detalles</button>
                                    
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="col-12">
                        <div className="card">
                            <div className="card-body">
                                No hay artículos disponibles.
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
        </div>
    );
}
export default ItemListContainer;