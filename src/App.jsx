import './App.css'
import Navbar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';




function App() {
  const autos = [
    { id: 1, marca: 'Toyota', modelo: 'Corolla',km :'123.999',  año: 2020 },
    { id: 2, marca: 'Honda', modelo: 'Civic', km :'123.999',  año: 2019 },
    { id: 3, marca: 'Ford', modelo: 'Focus', km :'123.999',  año: 2021 }
  ];

  return (
    <>
      <Navbar />
      <ItemListContainer texto="Bienvenido a Alquileres" items={autos} />
      
    </>
  );
}

export default App
