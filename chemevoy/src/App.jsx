import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { ProdListContextProvider } from './context/ProdListContext';
import { CartContextProvider } from './context/CartContext';
import CartContainer from './components/CartContainer/CartContainer';

function App() {


  return (
    <>
            <BrowserRouter>
            <CartContextProvider>
                 <ProdListContextProvider>
                    <NavBar></NavBar>
                        <Routes>
                          <Route path= "/" element={<ItemListContainer/>}/>
                            <Route path= "/categoria/:id" element={<ItemListContainer/>}/>
                            {/* Aca ajoba, vamos a hacer referencia al link que nos tiene q llevar efectivamente el boton que esta en Item */}
                            <Route path= "/detail/:id" element={<ItemDetailContainer/>}/>
                            <Route path= "/carrito" element={<CartContainer/>}/>
                            <Route path= "*" element={<Navigate to="/"/>}/>
                        </Routes>  
                  </ProdListContextProvider>
            </CartContextProvider>
            </BrowserRouter>  
    </>
  )
}

export default App
  