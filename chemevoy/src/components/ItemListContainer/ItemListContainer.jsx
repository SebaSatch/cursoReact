import {createContext, useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { collection, getDocs, getFirestore, orderBy, query, where } from 'firebase/firestore'
export const Contexto = createContext([])

const ItemListContainer = () => {
        const [cargando, setCargando] = useState(true)
        const [prod, setProd] = useState([])
        const {id} = useParams() 

        useEffect(() => {
            const db = getFirestore()
            const queryCollection = collection(db, 'paquetes')

             if (id) {
                const queryFilter = query(queryCollection,where ('pais', '==' , 'Argentina'))
                getDocs(queryFilter)
                .then(info => setProd(info.docs.map((pepe)=>({id:pepe.id, ...pepe.data()}))))
                setCargando(false)  
            } else {

            // IMPORTANTE!!! --> el data() es una función que nos trae la info que cargamos adentro de nuestro id en firebase, como el id esta AFUERA, lo tenemos q incorporar adentro de nuestro objeto haciendo destructuring (le indicamos que id)
            // Hacemos un MAP para crear un nuevo array, el cual nos devuelva varios objetos pero con las cosas que necesitamos... es decir, el ID, y la info q cargamos, El MAP NOS DEVUELVE UN NUEVO ARRAY, con lo que le pedimos que nos retorne.

            getDocs(queryCollection)
            .then(info => setProd(info.docs.map((pepe)=>({id:pepe.id, ...pepe.data()}))))
            setCargando(false)
                 console.log(prod)
            }

        },[id])

        console.log(prod)

  return (
    <>  
        <Contexto.Provider value = {{
        prod,

        }}>
        {
        cargando ? 
            <h1> cargando ... </h1> 
        :
            // <ItemList prod={prod}> </ItemList>   
            <ItemList> </ItemList>   
        }    
        </Contexto.Provider>
    </>
  )
}
export default ItemListContainer
