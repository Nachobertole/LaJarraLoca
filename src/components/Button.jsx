import React from 'react'

export const Button = ({cambiaContador, text}) => {
  return (
    <button onClick={cambiaContador}>
        {text}
    </button>
  )
}
