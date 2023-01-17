import {createContext, useEffect, useState,useContext} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import {getDocs, query, where } from 'firebase/firestore'
import { ProdListContext } from '../../context/ProdListContext';
export const Contexto = createContext([])

const ItemListContainer = () => {
        const [cargando, setCargando] = useState(true)
        const [prod, setProd] = useState([])
        const {id} = useParams() 
        const queryCollection = useContext(ProdListContext)

        useEffect(() => {

             if (id) {
                const queryFilter = query(queryCollection, where ('pais', '==' , 'Argentina'))
                getDocs(queryFilter)
                // IMPORTANTE mandar el ID adentro del objeto, pq en la colección de firebase, por defecto el ID esta afuera, hay q incorporarlo de la siguiente manera--->
                .then(info => setProd(info.docs.map((pepe)=>({id:pepe.id, ...pepe.data()}))))
                setCargando(false)  

            } else {

                getDocs(queryCollection)
                .then(info => setProd(info.docs.map((pepe)=>({id:pepe.id, ...pepe.data()}))))
                setCargando(false)
                }
            // IMPORTANTE!!! --> el data() es una función que nos trae la info que cargamos adentro de nuestro id en firebase, como el id esta AFUERA, lo tenemos q incorporar adentro de nuestro objeto haciendo destructuring (le indicamos que id)
            // Hacemos un MAP para crear un nuevo array, el cual nos devuelva varios objetos pero con las cosas que necesitamos... es decir, el ID, y la info q cargamos, El MAP NOS DEVUELVE UN NUEVO ARRAY, con lo que le pedimos que nos retorne.

        },[id])

        

  return (
    <>  
        <Contexto.Provider value = {{prod}}>
            {
            cargando ? 
                <h1> cargando ... </h1> 
            :  
                <ItemList> </ItemList>   
            }    
        </Contexto.Provider>
    </>
  )
}
export default ItemListContainer
