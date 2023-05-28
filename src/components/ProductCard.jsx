import React from 'react'
import { Link} from 'react-router-dom'

export const ProductCard = (props) => {


  return (
     <div id={`${props.detalle.id}`} className="card w-25 col-3 m-2 d-flex">
            <img className="card-img-top img-fluid h-20 mt-2 " src={require(`../Imagenes/${props.detalle.imagen}`)} alt="$"/>
            <div className="card-body">
                <p className="card-title text-center">{`${props.detalle.nombre}`}</p>
                <p className="text-center">Precio: ${`${props.detalle.precio}`}</p>
                <button id= {`verDetalle${props.detalle.id}`} className="btn btn-outline-success w-100">
                  <Link to={`/product-detail/${props.detalle.id}`}>
                    Ver detalle
                  </Link>  
                </button>
            </div>
    </div>
  )
}
