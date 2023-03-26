
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import Footer from './Components/Footer/Footer';
import Cart from './Components/Cart/Cart';
import React from 'react';

//agregar acá lo de context
import CartProvider from './context/CartContext';




function App() {
  return (
    <div className="App">
      <BrowserRouter>



        <CartProvider>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/category/:categoryId' element={<ItemListContainer />} />
            <Route path='/itemdetail/:itemId' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>


        </CartProvider>


        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
