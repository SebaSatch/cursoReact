import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Item from './components/Item/Item';
import ItemList from './components/ItemList/ItemList';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {CartContext} from './context/CartContext'

function App() {


  return (
    <>
      <CartContext.Provider value = {{


      }}>
        <BrowserRouter>
        <NavBar></NavBar>
          <Routes>
            <Route path= "/" element={<ItemListContainer/>}/>
              <Route path= "/categoria/:id" element={<ItemListContainer/>}/>
              <Route path= "/detail/:productId" element={<ItemDetailContainer/>}/>
              <Route path= "*" element={<Navigate to="/"/>}/>
          </Routes>  
        </BrowserRouter> 
      </CartContext.Provider>   
    </>
  )
}

export default App
  