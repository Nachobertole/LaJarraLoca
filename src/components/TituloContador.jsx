import React from 'react'

export const TituloContador = ({contador, text}) => {
  return (
    <p>{text} <strong>{contador} </strong></p>
  )
}
