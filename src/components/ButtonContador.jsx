import React from 'react'
import { useState } from 'react'
import { Button } from './Button'

export const ButtonContador = ({valorInicial, setCantidad}) => {
    const [contador, setContador] = useState(valorInicial)

    const aumentaContador = (n) => {
        if(contador <= 4){
            setContador(contador + n);
            setCantidad(contador + n);
        }
    }
 
    const restaContador = (n) => {
        if(contador > 0){
            setContador(contador - n);
            setCantidad(contador - n);
        }
    }
 
    return (
    <div>
        <div className='divButtonContador'>
            <Button className='elemtentosDivContador'
            cambiaContador={()=>restaContador(1)}
            text={"-"}/>
            <h4 className='elemtentosDivContador'>{contador}</h4>
            <Button className='elemtentosDivContador'
            cambiaContador={()=>aumentaContador(1)}
            text={"+"}/>
        </div>
    </div>
  )
}
