import React, {useState} from 'react'
import { Link } from 'react-router-dom';

const FiltroCategorias = ({productos, refrescarProductosFiltrados}) => {

  
    const [optSeleccionada, setOptSeleccionada] = useState(0);
    

  return (
    <>
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