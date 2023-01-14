import React from 'react'
import cart from "../../assets/carticon.svg"
import { Link } from 'react-router-dom'

const CartContainer = () => {

  return (
    <div> 
        <Link className="nav-link" to="/carrito"> <img src={cart} alt="" /> Carrito </Link>
    </div>
  )
}

export default CartContainer