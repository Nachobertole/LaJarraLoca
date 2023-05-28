import React, {useEffect } from 'react'

export const ProductCardMin = ({detalle}) => {

  return (
    <div className="card w-25 col-3 m-2 d-flex">
        <img className="rounded float-left img-thumbnail mt-2" src={require(`../Imagenes/${detalle.imagen}`)} alt="$"/>
        <div className="card-body">
            <p className="card-title text-center">{`${detalle.nombre}`}</p>
            <p className="text-center">Precio: ${`${detalle.precio}`}</p>
        </div>
    </div>
  )
}