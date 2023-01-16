import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const RealCartContainer = () => {
    const {cartList, deleteCarrito, precioTotal, precioPaquete, eliminarItem} = useContext(CartContext)

    return (  
        <>    
            {cartList.length !== 0 ? 
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
                                                <h4 className="card-title">{iterador.destino}</h4>
                                                <p className="card-text">{iterador.descripcion}</p>
                                                <p className="card-text">
                                                    <big className="text-muted">  
                                                        Total paquete para {iterador.cant} persona/s por ${(iterador.cant)*(iterador.precio)}
                                                    </big>
                                                </p>
                                             <button onClick ={()=> eliminarItem(iterador.id)}> Eliminar Item </button>   
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                ))
                        }
                        <h2> PRECIO TOTAL = {precioTotal()} </h2>
                    </>  
                : 
                    <>
                        <h2> El carrito esta vacio Pa' </h2>
                    </>
  
            }     
        </>    
    )
}

export default RealCartContainer
