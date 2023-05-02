import React, {useState} from 'react'

const FiltroCategorias = ({productos, refrescarProductosFiltrados}) => {

    const [optSeleccionada, setOptSeleccionada] = useState(0);
    
    const handleCategoria = (e) => {
        setOptSeleccionada(e.target.value);

        if(e.target.value == 1){
          productos = productos.filter((producto)=> producto.tieneAlcohol == true)
        }else if(e.target.value == 2){
          productos = productos.filter((producto)=>producto.tieneAlcohol ==false)
        }
        refrescarProductosFiltrados(productos);
    }

  return (
    <>
        <label>Filtrar bebidas</label>
        <select onChange={handleCategoria}>
            <option value={0}>Todas las bebidas </option>
            <option value={1}>Bebidas con alcohol</option>
            <option value={2}>Bebidas sin alcohol</option>
        </select>
    </>
  )
}

export default FiltroCategorias