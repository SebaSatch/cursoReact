import React, { useState } from 'react'
import { Link } from 'react-router-dom' 


const ItemDetailContainer = (props) => {
    // const [prueba,setPrueba] = useState(false)
    const ClickHandler = () => {
            // setPrueba(true)
    }

  return (
    <div>
        <Link to="/detail">
          <button type="button" className="btn btn-primary" onClick={ClickHandler}>Detalle</button>
        </Link>
        {/* {prueba ? 
              <h1> {props.itemdescription} </h1>
        : 
              <h1></h1>} */}

    </div>
  )
}

export default ItemDetailContainer
