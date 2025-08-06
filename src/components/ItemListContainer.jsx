import '../css/ItemListContainer.css';


const ItemListContainer = ({ texto, items }) => {
    return (
        <div className="container-lista">
            <h1>{texto}</h1>
            <ul>
                {items && items.length > 0 ? (
                    items.map((item) => (
                        <li key={item.id}>
                            {item.marca} {item.modelo} ({item.año})
                        </li>
                    ))
                ) : (
                    <li>No hay artículos disponibles.</li>
                )}
            </ul>
        </div>
    );
}
export default ItemListContainer;