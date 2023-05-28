import React, {useEffect, useState} from "react";
import CartButton from "./CartButton";
import FiltroCategorias from './FiltroCategorias';
import { Link} from 'react-router-dom';

const NavBar = ({productos, setProductosFiltrados}) => {    

    const [buscados, setBuscados] = useState('')
    const handleFilterChange = (e) => {
        setBuscados(e.target.value);
    };

    useEffect(() => {
        if(buscados.length == 0)
            handleSearch();
    }, [buscados])

    const handleSearch = () => {
        const prodFiltrados = productos.filter((p)=>{
            if(p.nombre.toLowerCase().includes(buscados.toLowerCase()))
                return p;
        });

        setProductosFiltrados(prodFiltrados);
    };

    return (
        <nav className="navbar bg-body-tertiary navbar-dark bg-dark navegador">
            <div className="container-fluid contenedor">
                <Link to={`/`} className="navbar-brand titulo">
                    LA JARRA LOCA
                </Link>
    
                <div className="busqueda">
                    <input id="resultadoBuscar" className="form-control me-2 inputBusqueda" onChange={handleFilterChange} type="search" placeholder="Inserte su bebida" aria-label="Search"/>
                    <button onClick={handleSearch} className="btn btn-outline-success">Buscar</button>
                </div>
                <ul>
                    <FiltroCategorias productos={productos} refrescarProductosFiltrados={setProductosFiltrados}/>
                </ul>
                <li>
                    <CartButton/>
                </li>
            </div>
        </nav>
    )
}
export default NavBar