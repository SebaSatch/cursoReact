import {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import {getFirestore, getDoc, doc } from 'firebase/firestore'


const ItemDetailContainer = () => {
    const [finder, setFinder] = useState({})
    const {id} = useParams()

    useEffect(() =>{
        const db = getFirestore()
        const queryDoc = doc(db, 'paquetes', id)
        getDoc(queryDoc)
        .then(resp => setFinder({id: resp.id, ...resp.data()}))
        .catch(err=> console.log(err))
    }, [])

return (
            <ItemDetail finder={finder}></ItemDetail>
               
    )
}

export default ItemDetailContainer