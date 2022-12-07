import React from 'react'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({finder}) => {
  return (
    <div key= {finder.id} className="card mb-3">
    <div className="row g-0">
        <div className="col-md-4">
            <img src={finder.image} className="img-fluid rounded-start" alt="..."/>
        </div>
        <div className="col-md-8">
            <div className="card-body">
                <h5 className="card-title">{finder.name}</h5>
                <p className="card-text">{finder.description}</p>
                <p className="card-text"><small className="text-muted">{finder.id}</small></p>
            </div>
        <ItemCount></ItemCount>
        </div>
    </div>
</div>
  )
}

export default ItemDetail
