import React from 'react'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({finder}) => {
  return (

    <>
    {finder.map((i)=> (

        <div key={i.id} className="card mb-3">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={i.img} className="img-fluid rounded-start" alt="..."/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{i.destino}</h5>
                        <p className="card-text">{i.descripcion}</p>
                        <p className="card-text"><small className="text-muted">{i.precio}</small></p>
                    </div>
                <ItemCount></ItemCount>
                </div>
            </div>
        </div>
    
      )) 
                       
    }        
</>     



  )
}

export default ItemDetail
