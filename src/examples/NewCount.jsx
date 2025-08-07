import React, { useState } from 'react';
import BotonMultiuso from './BotonMultiuso';

const   NewCount=()=> {
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(count + 1);
    }

    return (
        <div>
            <h1>Contador: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Incrementar</button>
            <button onClick={() => setCount(count - 1)}>Decrementar</button>
            <button onClick={() => setCount(0)}>Reiniciar</button>
            <button onClick={increment}>Incrementar con función</button>
            <BotonMultiuso move={increment} color="green" padding="1rem" borderRadius="5px">
                Incrementar con Botón Multiuso
            </BotonMultiuso>
        </div>
    )
}   
export default NewCount;