import React from 'react'
import { Link } from 'react-router-dom'
// import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer'

const Item = (props) => {
  return (
    <div>
              <div id={props.id} className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={props.imagen} className="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{props.nombre}</h5>
                            <p className="card-text">{props.descripcion}</p>
                            <p className="card-text"><small className="text-muted">{props.id}</small></p>
                            <Link to="/detail">
                                <button type="button" className="btn btn-primary">Detalle</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            
    </div>
  )
}

export default Item
