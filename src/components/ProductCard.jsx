import React from 'react'
import { Link} from 'react-router-dom'

export const ProductCard= ({detalle}) => {


  return (
     <div id={`${detalle.id}`} className="card w-25 col-3 m-2 d-flex">
            <img className="card-img-top img-fluid h-20 mt-2 " src={`${detalle.imagen}`} alt="$"/>
            <div className="card-body">
                <p className="card-title text-center">{`${detalle.nombre}`}</p>
                <p className="text-center">Precio: ${`${detalle.precio}`}</p>
                <button id= {`verDetalle${detalle.id}`} className="btn btn-outline-success w-100">
                  <Link to={`/product-detail/${detalle.id}`}>
                    Ver detalle
                  </Link>  
                </button>
            </div>
    </div>
  )
}
