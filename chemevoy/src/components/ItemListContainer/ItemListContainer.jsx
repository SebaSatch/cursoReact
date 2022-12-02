import {Children, useEffect, useState} from 'react';
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
        {/* aca lo q hacemos es mapear nuestro array, y por cada objeta que esta en el array, nos devuelve el codigo que ponemos en su interior. En este caso, solo le pedimos que nos devuelva los values correspondientes a las key image, name, description y id*/}
        {
        cargando ? <h1> cargando ... </h1> :
        prod.map((i)=> (

                <ItemList
                    key={i.id}
                    name={i.name} 
                    id={i.id} 
                    image={i.image} 
                    description={i.description}>
                </ItemList>
            )
        )}    
    </>





  )

}
export default ItemListContainer
