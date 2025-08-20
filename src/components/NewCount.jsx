import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

const ItemCount = ({ stock = 10, initial = 1, onAdd }) => {
    const [count, setCount] = useState(initial);

    const increment = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    }

    const decrement = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    }

    const handleAddToCart = () => {
        if (stock > 0) {
            onAdd(count);
        }
    };

    return (
        <div className="d-flex flex-column align-items-center my-3">
            <div className="d-flex align-items-center mb-3">
                <button className="btn btn-outline-secondary btn-sm" onClick={decrement} disabled={count <= 1}>
                    <FaMinus />
                </button>
                <span className="mx-3 fs-5 fw-bold">{count}</span>
                <button className="btn btn-outline-secondary btn-sm" onClick={increment} disabled={count >= stock}>
                    <FaPlus />
                </button>
            </div>
            <button className="btn btn-primary w-100" onClick={handleAddToCart} disabled={stock === 0}>
                Agregar al carrito
            </button>
        </div>
    );
}
export default ItemCount;