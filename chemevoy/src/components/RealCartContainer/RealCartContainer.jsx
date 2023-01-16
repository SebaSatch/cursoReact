import { addDoc, collection, getFirestore } from 'firebase/firestore'
import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const RealCartContainer = () => {
    const [dataForm, setFormData] = useState({
        name:'',
        email:'',
        phone:''
    })
    const {cartList, deleteCarrito, precioTotal, precioPaquete, eliminarItem} = useContext(CartContext)

            const agregarOrden = (e) => {
                e.prevent.Default() 
                const order ={}
                order.buyer = dataForm
                order.price = precioTotal()
                order.items = cartList.map(({id, price, name}) => ({id, price, name}))

                const db = getFirestore()
                const queryCollection = collection(db,'orders')

                addDoc(queryCollection, order)
                .then(resp => console.log(resp))
                .catch(err => console.log(err))
                .finally(()=>deleteCarrito())
            }    

            const handleOnChange = (e) => {
                setFormData({
                    ...dataForm,
                    [e.target.name]:e.target.value
                })
            }
        
            console.log(dataForm)
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
                        
                        <form onSubmit={agregarOrden}>
                            <input type="text" onChange={handleOnChange} name='name' placeholder='Ingrese el nombre' value={dataForm.name}/>
                            <input type="text" onChange={handleOnChange}  name='phone' placeholder='Ingrese su telefono' value={dataForm.phone} />
                            <input type="text" onChange={handleOnChange}  name='email'  placeholder='Ingrese su email' value={dataForm.email}/>
                            <button> Terminar compra </button>
                        </form>
                        
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
