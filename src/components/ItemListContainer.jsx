import React, { useEffect } from 'react';
import { ProductCard } from './ProductCard';

const ItemListContainer = ({text, productos}) => {
    
    useEffect(() => {
        console.log(productos);
    }, [productos]);

    return (
        <div>
            <h1 className="tituloPrincipal mt-2"> {text}</h1>

            <div className="row justify-content-center">
                {
                productos.map((producto)=>{
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