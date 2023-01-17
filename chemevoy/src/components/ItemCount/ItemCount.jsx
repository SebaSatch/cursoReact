import {useState} from 'react'

const ItemCount = ({stock, initial=1, onAdd}) => {
    const [count, setCount] = useState (1)
    const sumar = () => {
    if(count < stock) {
        setCount(count+1)
    }
    }
    const restar = () => {
        if (count > initial){
            setCount(count-1)
        }
    }
    const handleOnAdd = () => {
        onAdd(count)
        
    }
  
  return (
    <div className="card m-5">
        <div className="card-header">
            <label htmlFor="">{count}</label>
        </div>
        <div className="card-body">
            <button onClick={restar} className="btn btn-outline-primary"> - </button>
            <button onClick={sumar} className="btn btn-outline-primary"> + </button>
        </div>
        <div className="card-footer">
            <button className="btn btn-outline-success btn-block" onClick={handleOnAdd}>Agregar al carrito</button>
        </div>
    </div>
  )
}

export default ItemCount














// import React from 'react'
// import { useState } from 'react'

// const ItemCount = () => {
//     const [cuenta, setCuenta] = useState(1)

    
//     const moreHandler = () => {
//         if (cuenta < 10) { 
//         setCuenta(cuenta + 1)}
//     }

//     const lessHandler = () => {
//         if (cuenta > 1) { 
//         setCuenta(cuenta - 1)}
//     }
//   return (
//     <div> Personas
//         <div> {cuenta}
//             <button onClick={moreHandler} > + </button>
//             <button onClick={lessHandler}> - </button>
//         </div>
//     </div>
//   )
// }

// export default ItemCount
