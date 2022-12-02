import React from 'react'
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer'

const ItemList = (props) => {
        let {id, image, name, description} = props
  return (
    
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={image} className="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{name}</h5>
                            <p className="card-text">{description}</p>
                            <p className="card-text"><small className="text-muted">{id}</small></p>
                            <ItemDetailContainer
                                itemdescription={description}
                            
                            
                            
                            />
                        </div>
                    </div>
                </div>
            </div>
   
  )
}

export default ItemList
