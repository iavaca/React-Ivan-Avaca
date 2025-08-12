import React, { use, useState } from 'react';
import BotonMultiuso from './BotonMultiuso';
import { useEffect } from 'react';

const   NewCount=()=> {
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(count + 1);
    }

const [comprar, setComprar] = useState(false);
    const toggleComprar = () => {
        setComprar(!comprar);
    }

    useEffect(() => {
        
       console.log('me ejecuto siempre que se renderice el componente');
    });
   
    useEffect(() => {
        console.log('comprar ha cambiado:', comprar);
        
    }, [comprar]);
    

    return (
        <div className="card text-center mx-auto mt-5" style={{maxWidth: "350px"}}>
            <div className="card-header bg-primary text-white">
                <h5 className="mb-0">Contador</h5>
            </div>
            <div className="card-body">
                <p className="card-text display-6 mb-4">{count}</p>
                <div className="d-flex justify-content-between">
                    <button className="btn btn-danger" onClick={() => setCount(count - 1)}>
                        Decrementar
                    </button>
                    
                    <button className="btn btn-success" onClick={toggleComprar}>
                        Incrementar
                    </button>
                </div>
            </div>
        </div>
    )
}   
export default NewCount;