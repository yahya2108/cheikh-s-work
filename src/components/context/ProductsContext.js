import { useState, createContext } from "react";
import productsData from "../products/ProductsData"

//import productsData from "../Task/ProductsData"

const ProductsContext = createContext();


export const ProductsProvider = ({children}) => {
  const [productList, setProductList] = useState(productsData);
  return(<ProductsContext.Provider value={{productList}}>{children}</ProductsContext.Provider>)
}

export default ProductsContext;