import { createContext, useState } from "react";
import { productsList } from "../utils/products";

export const AppContext = createContext(null);
export const AppContextProvider = ({children}) => {
    const [focusable, setFocusable] = useState(true)
    const [products, setProducts] = useState(productsList)
    const itemsList = [1,2,3,4,5,6,7];

    return (
    <AppContext.Provider value={{products, setProducts,
                                focusable, setFocusable,
                                itemsList}}>
        {children}
    </AppContext.Provider>)
}