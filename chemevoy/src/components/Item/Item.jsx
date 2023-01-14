import { Link } from 'react-router-dom'
import React from 'react'

const Item = (props) => {

  return (

              <div key= {props.id} className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={props.imagen} className="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{props.nombre}</h5>
                            <p className="card-text"> Dias: {props.dias}</p>
                            <p className="card-text"><big className="text-muted"> ${props.precio}</big></p>
                            {/* Este boton me va a llevar a la ruta asignada al link en App, en este caso, el valor que esta despues del detail, esta dado por el id del item  */}
                            <Link to={`/detail/${props.id}`}>
                                <button type="button" className="btn btn-primary">Detalle</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            
  )
}

export default Item
