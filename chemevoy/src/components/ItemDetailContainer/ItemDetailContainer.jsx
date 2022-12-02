import React, { useState } from 'react'


const ItemDetailContainer = (props) => {
    const [prueba,setPrueba] = useState(false)
    const ClickHandler = () => {
            setPrueba(true)
    }

  return (
    <div>
        <button type="button" className="btn btn-primary" onClick={ClickHandler}>Detalle</button>
        {prueba ? <h1> {props.itemdescription} </h1> : <h1></h1>}
    </div>
  )
}

export default ItemDetailContainer
