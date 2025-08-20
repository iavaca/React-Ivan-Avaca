import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailsContainer from './components/ItemDetailsContainer';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column min-vh-100">
        <Navbar />
        <main className="flex-grow-1 main-content">
          <Routes>
            <Route path="/" element={<ItemListContainer texto="Catálogo de Vehículos" />} />
            <Route path="/item/:id" element={<ItemDetailsContainer />} />
            <Route path="/category/:categoryId" element={<ItemListContainer />} />
            <Route path="/motos/" element={<ItemListContainer categoryId="Motocicleta" texto="Motos" />} />
            <Route path="/autos/" element={<ItemListContainer categoryId="Automóvil" texto="Autos" />} />
            <Route path="/camionetas/" element={<ItemListContainer categoryId="Camioneta" texto="Camionetas" />} />


            <Route path="/cart" element={<div className="text-center mt-5"><h2>Carrito de Compras</h2><p>Aquí se mostrarán los productos agregados al carrito.</p></div>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App
