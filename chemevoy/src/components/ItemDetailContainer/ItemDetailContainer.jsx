import {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import { collection, getDocs, getFirestore, orderBy, query, where } from 'firebase/firestore'


const ItemDetailContainer = () => {
    const [finder, setFinder] = useState([])
    const {productId} = useParams()


    // let traemeProdu = async () =>{
    //     const result = await axios.get("https://fakerapi.it/api/v1/products?_quantity=10&_taxes=12&_categories_type=uuid")
    //     setFinder(result.data.data.find(hola => hola.id === parseInt(productId)))
    // }

    console.log(finder)
    
    useEffect(() => {
        const db = getFirestore()
        const queryCollection = collection(db, 'paquetes')

        const queryFilter = query(queryCollection, where ('categoryId', '==' , parseInt(productId)))
        console.log(queryFilter)
        getDocs(queryFilter)
        .then(info => setFinder(info.docs.map((pepe)=>({id:pepe.id, ...pepe.data()}))))



        // getDocs(queryCollection)
        // .then(info => setFinder(info.docs.find(hola => hola.id === parseInt(productId))))
        //      console.log(finder)
        

    },[])
 
return (

            <ItemDetail finder={finder}></ItemDetail>
               
    )
}


export default ItemDetailContainer