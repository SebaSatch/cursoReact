import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import cart from "../../assets/carticon.svg"
import { Link } from 'react-router-dom'

const CartWidget = () => {
  const {cantidadTotal} = useContext(CartContext)
  return (
    <div> 
        <Link className="nav-link" to="/carrito"> <img src={cart} alt=""/> Carrito  {cantidadTotal() !== 0 && cantidadTotal()} </Link>
    </div>
  )
}

export default CartWidget