import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { ButtonContador } from './ButtonContador';


export const ProductDetail = ({productos}) => {
  const params= useParams()

  const [productodetail, setProductodetail] = useState({})  

  useEffect(()=>{
    const productodetail2 =  productos.find((producto)=>{
      if(producto.id == params.id)
        return producto; 
    });
    setProductodetail(productodetail2);
  })

  return (
    <div id={`${productodetail.id}`} className="card w-25 divProductDetail">
        <img className="card-img-top img-fluid h-25" src={`${productodetail.imagen}`} alt="$"/>
        <div className="card-body cardProductDetail">
            <p className="card-title tituloProductDetail">{`${productodetail.nombre}`}</p>
            <p className="">Precio: ${`${productodetail.precio}`}</p>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ea voluptate suscipit totam assumenda quidem corrupti consectetur repellat reprehenderit velit itaque illo, eveniet delectus cum repellendus expedita, eos magni voluptates!</p>
            <ButtonContador valorInicial={0}/>
            <button id= {`agregarAlCarro${productodetail.id}`} className="btn btn-outline-success buttonCarrito">Agregar al carrito</button>


        </div>
    </div>
  )
}
