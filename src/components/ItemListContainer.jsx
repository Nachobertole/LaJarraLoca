import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { ProductCard } from './ProductCard';

const ItemListContainer = ({text, productos}) => {
    const params= useParams()
    const [productosFilt, setProductosFilt] = useState([]);
    
    useEffect(() => {
        setProductosFilt(productos);
    }, []);

    useEffect(() => {
        setProductosFilt(productos);
    }, [productos]); 

    useEffect(() => {
        
        if(params.idCategory !== undefined)
        {
            productos = productos.filter((p) => {
                if(params.idCategory == 0)
                    return p;
                if(params.idCategory == 1 && p.tieneAlcohol == true) //con alcohol
                    return p;
                if(params.idCategory == 2 && p.tieneAlcohol == false) //sin alcohol
                    return p;
            });
        }
        if(params.valorBusqueda !== undefined)
        {
            productos = productos.filter((p) => {
                if(params.valorBusqueda == p.nombre)
                    return p;
            });
        }

        setProductosFilt(productos);

    }, [params.idCategory, params.valorBusqueda, productos]);


    return (
        <div>
            <h1 className="tituloPrincipal mt-2"> {text}</h1>

            <div className="row justify-content-center">
                {
                productosFilt.length == 0 
                ?
                productos.map((producto)=>{
                    return (
                        <ProductCard
                            key={producto.id}
                            detalle={producto}
                        />
                    );
                }) 
                :
                productosFilt.map((producto)=>{
                    return (
                        <ProductCard
                            key={producto.id}
                            detalle={producto}
                        />
                    );
                }) 
                }
            </div>
        </div>
    )
}


export default ItemListContainer