import React from 'react';

const Button = ({cambiaCategoria, text}) => {
    return (
        <button onClick={cambiaCategoria}>
            {text}
        </button>
    )
 }

 export default Button  