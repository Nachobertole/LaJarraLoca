import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { ButtonContador } from './ButtonContador';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export const ProductDetail = ({productos}) => {
  const params= useParams()

  const [productodetail, setProductodetail] = useState({});
  const [productoListo, setProductoListo] = useState(false);

  const [cantidad, setCantidad] = useState(0);

  useEffect(()=>{
    const productodetail2 =  productos.find((producto)=>{
      if(producto.id == params.id)
        return producto; 
    });

    setProductodetail(productodetail2);
    
    setTimeout(() => {
      setProductoListo(true);
    }, (1500));

    //console.log(productodetail2)
    console.log(localStorage.getItem("productos"));
  });

  const handleAgregarCarrito = (idProducto) => {

    let currentListadoProductos = localStorage.getItem("productos");
    if(currentListadoProductos == null)
      currentListadoProductos = "[]";

    let auxListado = JSON.parse(currentListadoProductos);
    auxListado.push([idProducto, cantidad])

    localStorage.setItem('productos', JSON.stringify(auxListado));
    toast.success('¡Su producto ha sido agregado al carrito!')

  }

  return (
    <div>
      {productoListo
      ? <div className="card w-25 divProductDetail">
            <img className="card-img-top img-fluid h-25" src={require(`../Imagenes/${productodetail.imagen}`)} alt="$"/>
            <div className="card-body cardProductDetail">
                <p className="card-title tituloProductDetail">{`${productodetail.nombre}`}</p>
                <p className="">Precio: ${`${productodetail.precio}`}</p>

                <p>{`${productodetail.desc}`}</p>
                <ButtonContador valorInicial={0} setCantidad={setCantidad}/>
                <button onClick={() => handleAgregarCarrito(productodetail.id)} className="btn btn-outline-success w-100 buttonCarrito">Agregar al carrito
                <ToastContainer autoClose={800}/></button>
            </div>
        </div>
        :
        <div className="text-center mt-5">
          <div className="spinner-grow" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      }
    </div>
  )
}
