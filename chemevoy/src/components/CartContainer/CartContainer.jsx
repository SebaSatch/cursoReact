import { addDoc, collection, getFirestore } from 'firebase/firestore'
import React from 'react'
import { useState, useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

const CartContainer = () => {
    const [dataForm, setFormData] = useState({
        name:'',
        phone:'',
        email:'',
        email2:'' })

    const {cartList, deleteCarrito, precioTotal, eliminarItem} = useContext(CartContext)

            const agregarOrden = (e) => {
                e.preventDefault() 
                const order ={}
                order.buyer = dataForm
                order.precio = precioTotal()
                order.items = cartList.map((objeto) => ({id: objeto.id, precio:objeto.precio, nombre: objeto.destino}))
                

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
                    [e.target.name]: e.target.value
                })
            }
        
            
    return (  
        <>    
            {cartList.length !== 0 ? 
                    <>
                
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
                                             <button className="btn btn-danger" onClick ={()=> eliminarItem(iterador.id)}> Eliminar Item </button>   
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
                            <input type="text" onChange={handleOnChange}  name='email'  placeholder='Ingrese su mail' value={dataForm.email}/>
                            <input type="text" onChange={handleOnChange}  name='email'  placeholder='Ingrese su mail de nuevo' value={dataForm.email2}/>
                            <button className="btn btn-success"> Terminar compra </button>
                            <Link to="/">
                                <button className="btn btn-outline-primary">Seguir comprando</button>    
                            </Link>
                        </form>

                        <br/>
                        <button className="btn btn-outline-danger" onClick={()=> deleteCarrito()}> VACIAR CARRITO BRO </button>
                        <br/>
                        <br />
                        
                    </>  
                : 
                    <>
                        <h2> El carrito esta vacio Pa' </h2>
                    </>
  
            }     
        </>  
    )
}

export default CartContainer
