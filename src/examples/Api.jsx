import React, { use } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const Api = () => {     
    const [data, setData] = useState([]);
    const [link,setLink]=useState([])
    useEffect(() => {
        fetch('https://dragonball-api.com/api/characters')
            .then(response => response.json())
            .then(data => setData(data.items))
            .then(data => setLink(data.links))

            .catch(error => console.error('Error fetching data:', error));
    }, []);
    console.log(data);
    console.log(link);

    return (
        <div>
            <h1 className="text-center my-4">Personajes de Dragon Ball</h1>
            <div className="container">
                <div className="row">
                    {data.map((character) => (
                        <div key={character.id} className="col-md-4 mb-4">
                            <div className="card h-100 shadow-sm">
                                <img 
                                    src={character.image} 
                                    className="card-img-top" 
                                    
                                    alt={character.name} 
                                    style={{ objectFit: 'cover', height: '300px' }}
                                />
                                <div className="card-body">
                                    <h5 className="card-title">{character.name}</h5>
                                    <p className="card-text mb-1"><strong>Especie:</strong> {character.species}</p>
                                    <p className="card-text"><strong>Género:</strong> {character.gender}</p>
                                    <button 
                                        className="btn btn-primary"
                                        onClick={() => alert(`¡Hola, ${character.name}!`)}
                                    >
                                        Saludar
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
export default Api;