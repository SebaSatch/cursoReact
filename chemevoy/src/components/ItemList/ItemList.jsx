import React from 'react'
import Item from '../Item/Item'
import {useContext} from 'react'
import { Contexto } from '../ItemListContainer/ItemListContainer'



const ItemList = () => {
  const {prod} = useContext(Contexto)
  return (
        <>
            {prod.map((i)=> (
                <Item 
                    key={i.id}
                    nombre={i.destino}
                    descripcion={i.descripcion}
                    precio={i.precio}
                    id={i.categoryId}
                    imagen={i.img}  
                    dias={i.dias}  
                />
              )) 
                               
            }        
        </>                

    )
}

export default ItemList
