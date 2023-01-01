import {useEffect, useState, useContext} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import {getDocs, query, where } from 'firebase/firestore'
import { ProdListContext } from '../../context/ProdListContext';


const ItemDetailContainer = () => {
    const [finder, setFinder] = useState([])
    const {productId} = useParams()
    const queryCollection = useContext(ProdListContext)


    useEffect(() => {

        const queryFilter = query(queryCollection, where ('categoryId', '==' , parseInt(productId)))
        getDocs(queryFilter)
        .then(info => setFinder(info.docs.map((pepe)=>({id:pepe.id, ...pepe.data()}))))
        console.log(finder)


    },[])
 
    console.log(finder)
return (

            <ItemDetail finder={finder}></ItemDetail>
               
    )
}


export default ItemDetailContainer