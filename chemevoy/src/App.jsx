import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Item from './components/Item/Item';
import ItemList from './components/ItemList/ItemList';

function App() {


  return (
    <>
      <BrowserRouter>
      <NavBar></NavBar>
        <Routes>
            <Route path= "/" element={<ItemListContainer/>}/>
            <Route path= "/detail/:productId" element={<Item/>}/>
        </Routes>  
      </BrowserRouter>    
    </>
  )
}

export default App
  