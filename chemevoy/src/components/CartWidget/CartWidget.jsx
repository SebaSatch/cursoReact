import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import cart from "../../assets/carticon.svg"
import { Link } from 'react-router-dom'

const CartWidget = () => {
  const {totalAmount} = useContext(CartContext)
  return (
    <div> 
        <Link className="nav-link" to="/carrito"> <img src={cart} alt=""/> Carrito  {totalAmount() !== 0 && totalAmount()} </Link>
    </div>
  )
}

export default CartWidget