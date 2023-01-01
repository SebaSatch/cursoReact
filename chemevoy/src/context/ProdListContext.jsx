import { createContext} from "react";
import { getFirestore, collection } from "firebase/firestore";

export const ProdListContext = createContext();

export const ProdListContextProvider = ({children}) => {

    const db = getFirestore()
    const queryCollection = collection(db, 'paquetes')
    return(
        
        <ProdListContext.Provider value={queryCollection}>
                {children}
        </ProdListContext.Provider>
    )
}