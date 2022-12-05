import React from 'react'
import Item from '../Item/Item'

const ItemList = (props) => {

  return (
        <>
            {props.map((i)=> (
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
