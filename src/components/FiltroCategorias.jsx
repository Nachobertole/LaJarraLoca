import React, {useState} from 'react'
import { Link } from 'react-router-dom';

const FiltroCategorias = ({productos, refrescarProductosFiltrados}) => {

  
    const [optSeleccionada, setOptSeleccionada] = useState(0);
    
    // const handleCategoria = (e) => {
    //     setOptSeleccionada(e.target.value);

    //     if(e.target.value == 1){
    //       productos = productos.filter((producto)=> producto.tieneAlcohol == true)
    //     }else if(e.target.value == 2){
    //       productos = productos.filter((producto)=>producto.tieneAlcohol ==false)
    //     }
    //     refrescarProductosFiltrados(productos);
    // }

  return (
    <>
      {/* <button value={0} onClick={handleCategoria}>
        Todas las bebidas
      </button>
      <button value={1} onClick={handleCategoria}>
        Bebidas con alcohol
      </button>
      <button value={2} onClick={handleCategoria}>
        Bebidas sin alcohol
      </button> */}
      <Link to={`/category/0`} className="navbar-brand titulo">
        Todas las bebidas
      </Link>
      <Link to={`/category/1`} className="navbar-brand titulo">
        Bebidas con alcohol
      </Link>
      <Link to={`/category/2`} className="navbar-brand titulo">
        Bebidas sin alcohol
      </Link>
    </>
  )
}

export default FiltroCategorias