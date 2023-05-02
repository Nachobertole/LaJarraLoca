
import './App.css';
import { useState } from 'react';
import {BrowserRouter, Routes, Route, createMemoryRouter} from "react-router-dom";
import NavBar from './components/NavBar';
import ItemListContainer  from './components/ItemListContainer';
import { ProductDetail } from './components/ProductDetail';
import { useEffect } from 'react';

export function App() {
    const [productos, setProductos] = useState([]); 
    const [sinAlcohol, setSinAlcohol] = useState([]); 
    const [conAlcohol, setConAlcohol] = useState([]); 

    const [productosFiltrados, setProductosFiltrados] = useState([]);
    
    useEffect(()=>{
      fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic') //llamada a api
        .then(response => response.json())
        .then((response) => {
            let bebidas = [];

            response.drinks.forEach((bebida) => {
                const rand = Math.floor(Math.random() * (1500 - 150) + 150);

                bebidas.push({
                    id: bebida.idDrink, 
                    tieneAlcohol: true, 
                    nombre: bebida.strDrink,
                    precio: rand,
                    imagen: bebida.strDrinkThumb,
                    cantidad: 1
                });
            });

            setConAlcohol(productos.concat(bebidas));
        })
        .catch(err => console.error(err));

      fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic') //llamada a api
        .then(response => response.json())
        .then((response) => {
            let bebidas = [];

            response.drinks.forEach((bebida) => {
                const rand = Math.floor(Math.random() * (1500 - 150) + 150);

                bebidas.push({
                    id: bebida.idDrink, 
                    tieneAlcohol: false, 
                    nombre: bebida.strDrink,
                    precio: rand,
                    imagen: bebida.strDrinkThumb,
                    cantidad: 1
                });
            });

            setSinAlcohol(productos.concat(bebidas));
        })
        .catch(err => console.error(err));

    },[]);

    useEffect(() => {
      if(sinAlcohol.length > 0 && conAlcohol.length > 0){
        setProductos(sinAlcohol.concat(conAlcohol));
        setProductosFiltrados(sinAlcohol.concat(conAlcohol));
      }
    }, [sinAlcohol, conAlcohol])

    return (
    <BrowserRouter>
      <NavBar productos={productos} refrescarProductosFiltrados={setProductosFiltrados}/>
      <Routes>
        <Route path="/" element={<ItemListContainer text={'Bienvenido a la tienda'} productos={productosFiltrados} />} />
        <Route path="/product-detail/:id" element={<ProductDetail productos={productos} />} />
        <Route path="/*" element={<ItemListContainer text={'Bienvenido a la tienda'} productos={productosFiltrados} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
