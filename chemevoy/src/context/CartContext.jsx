import { createContext, useState} from "react";

export const CartContext = createContext([]);

export const CartContextProvider = ({children}) => {

        const [cartList,setCartList] = useState([])

        const addToCart = (finder) => {
            const idx = cartList.findIndex(produ => produ.id === finder.id) // findIndex si encuentra el producto que estamos buscando, nos devuelve su ID, y SI NO LO ENCUENTRA; nos devuelve un -1  (basicamente pq si nos devolviera cero, nos estaria dando una posición del array, entonces la unica manera de decirnos que no hay nada, es conn un valor negativo, puesto que no hay valores negativos en el indice del array)

            if (idx === -1)   // si no lo encuentra ... que lo agregue al carrito
                setCartList([...cartList, finder]) 
            else {
                // si lo encuentra, le agregamos la cantidad al producto encontrado (lo determinamos por la posición del index que nos devuelve el findIndex)
                cartList[idx].cant += finder.cant // lo cual es lo mismo q esto.........            cartList[idx].cant = cartList[idx].cant + finder.cant 
                setCartList([...cartList])
                
               console.log(cartList[idx]) // esto es el producto que estamos viendo en el carrito
            }
          
        }
        
        const deleteCarrito = () => {
            setCartList([])
        }


        // aca abajo, usamos el reduce para tomar las key q nos interesan de los objetos de nuestro carrito (el valor y la cantidad), y que nos devuelva un valor, el cual en este caso se va a inicializar le indicamos q inicialice en cero.

        const precioPaquete = () => cartList.reduce((contador, iterador) => contador = (iterador.precio * iterador.cant) , 0 )

        const precioTotal = () => cartList.reduce((contador, iterador) => contador += (iterador.precio * iterador.cant) , 0 )

        const cantidadTotal = () => cartList.reduce((contador, iterador) => contador += (iterador.cant) , 0 )

        const eliminarItem = (id) => {
            setCartList(cartList.filter((iterador) => iterador.id !== id))
        }


    return(
        <CartContext.Provider value={ // en la lista siempre se ponen las funciones abajo y los estados arriba
            {   cartList, 
                addToCart, 
                deleteCarrito, 
                precioTotal, 
                precioPaquete,
                cantidadTotal,
                eliminarItem
            }
         }>
            {children}
        </CartContext.Provider>

    )




 }
        
        















