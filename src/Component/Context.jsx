import { createContext,useState } from "react";

const myContext = createContext();
export default function Context({children}) {
   const [carts,setCart] = useState([]);
   const [cartsid,setCartsid] = useState([]);
   

   function can(id){
    return cartsid.includes(id); 
  }
   
  return (
    <>
     <myContext.Provider value={{carts,setCart,cartsid,setCartsid,can}}>
        {children}
     </myContext.Provider>
    </>
  )
}

export  {myContext};