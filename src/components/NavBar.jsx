import React from "react";
import CartWidget from "./CartWidget";

const NavBar = () => {    
    return (
        <nav className="navbar bg-body-tertiary navbar-dark bg-dark">
            <div className="container-fluid">
                <h3 className="navbar-brand titulo">LA JARRA LOCA</h3>
            </div>
            <div className="text-white buttonRadio">
                <input type="radio" id="category0" name="category" value="Todas las bebidas"  />
                <label htmlFor="category0">Todas las bebidas</label>

                <input type="radio" id="category1" name="category" value="Con alcohol" />
                <label htmlFor="category1">Con alcohol</label>

                <input type="radio" id="category2" name="category" value="Sin alcohol" />
                <label htmlFor="category2">Sin alcohol</label>          

            </div>
            <ul className="ordenaStyle">
                <select className="selectOrdenaStyle" name="" id="">
                    <option>Ordenar bebidas por precio</option>
                    <option value={1}>Mayor precio</option>
                    <option value={2}>Menor precio</option>
                </select>
            </ul>
            <li>
                <CartWidget/>
            </li>
        </nav>
    )
}
export default NavBar