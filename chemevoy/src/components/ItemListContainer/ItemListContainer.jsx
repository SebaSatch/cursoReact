import {useEffect, useState} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = () => {
        const [cargando, setCargando] = useState(true)
        const [prod, setProd] = useState([])

        let traemeProdu = async () =>{
            const result = await axios.get("https://fakerapi.it/api/v1/products?_quantity=10&_taxes=12&_categories_type=uuid")
            setProd(result.data.data) 
            setCargando(false)           
        }
        console.log(prod)
  
        useEffect(() => {
            traemeProdu()   
        },[])
    
  return (
    <>
        {
        cargando ? 
            <h1> cargando ... </h1> 
        :
            <ItemList prod={prod}> </ItemList>   
        }    
    </>
  )
}
export default ItemListContainer
