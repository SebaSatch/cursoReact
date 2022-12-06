import React from 'react'
import Item from '../Item/Item'
import { useParams } from 'react-router-dom'

const ItemList = (props) => {

  return (
        <>
            {props.prod.map((i)=> (
                <Item 
                    key={i.id}
                    nombre={i.name}
                    descripcion={i.description}
                    id={i.id}
                    imagen={i.image}    
                />
              )) 
                               
            }        
        </>                

    )
}

export default ItemList
