import React from "react";
import CartWidget from "./CartWidget";
import FiltroCategorias from './FiltroCategorias';

const NavBar = ({productos, refrescarProductosFiltrados}) => {    
    return (
        <nav className="navbar bg-body-tertiary navbar-dark bg-dark navegador">
            <div className="container-fluid contenedor">
                <a className="navbar-brand titulo" href="/">LA JARRA LOCA</a>
    
                <div className="busqueda">
                    <input id="resultadoBuscar" className="form-control me-2 inputBusqueda" type="search" placeholder="Inserte su bebida" aria-label="Search"/>
                    <button className="btn btn-outline-success">Buscar</button>
                </div>
                <ul>
                    <FiltroCategorias productos={productos} refrescarProductosFiltrados={refrescarProductosFiltrados}/>
                </ul>
                <li>
                    <CartWidget/>
                </li>
            </div>
        </nav>
    )
}
export default NavBar