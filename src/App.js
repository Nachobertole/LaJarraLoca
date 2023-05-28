
import './App.css';
import { useState, useEffect } from 'react';
import {BrowserRouter, Routes, Route, createMemoryRouter} from "react-router-dom";
import NavBar from './components/NavBar';
import ItemListContainer  from './components/ItemListContainer';
import { ProductDetail } from './components/ProductDetail';
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc } from 'firebase/firestore'
import { CartWidget } from './components/CartWidget';

export const App = () => {
    const [productosFiltrados, setProductosFiltrados] = useState([]);
    

  const firebaseConfig = {
    apiKey: "AIzaSyBg3uC-r9tqS3itlzWZxqP1VW34CMbvxy8",
    authDomain: "entregafinalcoder-b70c2.firebaseapp.com",
    projectId: "entregafinalcoder-b70c2",
    storageBucket: "entregafinalcoder-b70c2.appspot.com",
    messagingSenderId: "84699097415",
    appId: "1:84699097415:web:f462e8e8c9d4dc53fd8462"
  };
  
  const app = initializeApp(firebaseConfig);

 
  const [productos, setProductos] = useState([])
  
  useEffect(() => {
    const db = getFirestore()
    const productosDB = collection(db, 'Items',)

    getDocs(productosDB)
    .then(productos =>{
      setProductos(productos.docs.map(doc => ({id:doc.id,...doc.data()})))
      setProductosFiltrados(productos.docs.map(doc => ({id:doc.id,...doc.data()})))
    })
  }, [])

    return (
    <BrowserRouter>
      <NavBar productos={productos} setProductosFiltrados={setProductosFiltrados}/>
      <Routes>
        <Route path="/" element={<ItemListContainer text={'Bienvenido a la tienda'} productos={productosFiltrados} />} />
        <Route path="/:valorBusqueda" element={<ItemListContainer text={'Bienvenido a la tienda'} productos={productosFiltrados} />} />
        <Route path="/category/:idCategory" element={<ItemListContainer text={'Bienvenido a la tienda'} productos={productosFiltrados} />} />
        <Route path="/product-detail/:id" element={<ProductDetail productos={productos} />} />
        <Route path="/cart-widget" element={<CartWidget productos={productos} getFirestore={getFirestore} collection={collection} addDoc={addDoc} />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
