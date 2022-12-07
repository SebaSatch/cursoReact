import {useEffect, useState} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from 'react-router-dom';

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

            <div key= {finder.id} className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={finder.image} className="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{finder.name}</h5>
                            <p className="card-text">{finder.description}</p>
                            <p className="card-text"><small className="text-muted">{finder.id}</small></p>
                        </div>
                    </div>
                </div>
            </div>
               
    )
}


export default ItemDetailContainer