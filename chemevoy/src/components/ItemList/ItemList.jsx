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
                    // agregamos siempre una key con un id unico por objeto, sino la consola tira advertencia
                    key={i.id}
                    nombre={i.destino}
                    descripcion={i.descripcion}
                    precio={i.precio}
                    // el id de aca abajo, es el que se va a usar como referencia en el componente Item, y que va a ser enviado a traves del useParams
                    id={i.id}
                    imagen={i.img}  
                    dias={i.dias}  
                />
              ))                   
            }        
        </>                

    )
}

export default ItemList
