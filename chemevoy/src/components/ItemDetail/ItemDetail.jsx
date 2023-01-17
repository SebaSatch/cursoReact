import React from 'react'
import { useContext,useState } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({finder}) => {
    const [isInCart, setIsInCart] = useState(false)
    const {cartList, addToCart} = useContext(CartContext)

    const onAdd = (cant) => {
        addToCart({...finder, cant})
        setIsInCart(true)
    }

    (cartList)
  return (      

    <>
        <div key={finder.id} className="card mb-3">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={finder.img} className="img-fluid rounded-start" alt="..."/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{finder.destino}</h5>
                        <p className="card-text">{finder.descripcion}</p>
                        <p className="card-text"><small className="text-muted">{finder.precio}</small></p>
                    </div>
                {
                    isInCart ?
                        <>
                            <Link to="/carrito">
                                <button>Ir al carrito </button>    
                            </Link>
                            <Link to="/">
                                <button>Seguir comprando</button>    
                            </Link>
                        </>
                    :
                        <>
                            <ItemCount
                                onAdd={onAdd}
                                stock={finder.stock}
                                initial={1}
                            ></ItemCount>
                         </>
                }
                </div>
            </div>
        </div>
    
</>     



  )
}

export default ItemDetail
