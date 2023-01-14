import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const RealCartContainer = () => {
    const {cartList, deleteCarrito, precioTotal, precioPaquete} = useContext(CartContext)

    return (      
        
    <>
         <br/>
         <button onClick={()=> deleteCarrito()}> VACIAR CARRITO BRO </button>
         <br/>
         <br />

         {cartList.map((iterador) =>  

                (
                <div key={iterador.id} className="card mb-3">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={iterador.img} className="img-fluid rounded-start" alt="..."/>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{iterador.destino}</h5>
                                <p className="card-text">{iterador.descripcion}</p>
                                <p className="card-text">
                                    <big className="text-muted">  
                                        Total paquete para {iterador.cant} persona/s por ${(iterador.cant)*(iterador.precio)}
                                    </big>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                ))
        }
        <span> <big> PRECIO TOTAL = {precioTotal()} </big> </span>
    </>     
  )
}

export default RealCartContainer
