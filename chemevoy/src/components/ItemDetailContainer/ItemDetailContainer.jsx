import {useEffect, useState} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {
    const [finder, setFinder] = useState([])
    const {productId} = useParams()

    let traemeProdu = async () =>{
        const result = await axios.get("https://fakerapi.it/api/v1/products?_quantity=10&_taxes=12&_categories_type=uuid")
        setFinder(result.data.data.find(hola => hola.id === parseInt(productId)))
    }

    console.log(finder)
    
    useEffect(() => {
        traemeProdu() 
    },[])
 
return (

            <ItemDetail finder={finder}></ItemDetail>
               
    )
}


export default ItemDetailContainer