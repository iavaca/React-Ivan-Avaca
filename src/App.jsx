import './App.css'
import Navbar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import NewCount from './examples/NewCount';




function App() {
  
  
  return (
    <>
      <Navbar />
       <NewCount />
       <ItemListContainer texto="Catálogo de Vehículos" />
     
      
    </>
  );
}

export default App
