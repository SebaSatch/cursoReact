import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Item from './components/Item/Item';
import ItemList from './components/ItemList/ItemList';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {


  return (
    <>
      <BrowserRouter>
      <NavBar></NavBar>
        <Routes>
           <Route path= "/" element={<ItemListContainer/>}/>
            <Route path= "/categoria/:id" element={<ItemListContainer/>}/>
            <Route path= "/detail/:productId" element={<ItemDetailContainer/>}/>
            <Route path= "*" element={<Navigate to="/"/>}/>
        </Routes>  
      </BrowserRouter>    
    </>
  )
}

export default App
  