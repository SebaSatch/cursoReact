import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({finder}) => {
    const {cartList, addToCart} = useContext(CartContext)
    const onAdd = (cant) => {
        addToCart({...finder, cant})
    }

    console.log(cartList)
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
                <ItemCount

                    onAdd={onAdd}
                    stock={11}
                    initial={1}
                ></ItemCount>
                </div>
            </div>
        </div>
    
</>     



  )
}

export default ItemDetail
