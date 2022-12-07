import React from 'react'
import { useState } from 'react'

const ItemCount = () => {
    const [cuenta, setCuenta] = useState(1)

    
    const moreHandler = () => {
        if (cuenta < 10) { 
        setCuenta(cuenta + 1)}
    }

    const lessHandler = () => {
        if (cuenta > 1) { 
        setCuenta(cuenta - 1)}
    }
  return (
    <div> ITEMCOUNT
        <div> {cuenta}
            <button onClick={moreHandler} > + </button>
            <button onClick={lessHandler}> - </button>
        </div>
    </div>
  )
}

export default ItemCount
