import React from 'react';
import { Link } from 'react-router-dom';


const CartButton = () => {
  return (
    <Link to={`/cart-widget`}>
      <i className="fas fa-shopping-cart fa-1x"></i> 
    </Link>  
  )
}

export default CartButton
