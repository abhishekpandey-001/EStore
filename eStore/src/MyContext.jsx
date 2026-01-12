import { createContext, useContext, useState } from "react";

const MyContext = createContext();

export const useMyContext = () => useContext(MyContext);

export const MyContextProvider = ({ children }) => {

    const [cart, setCart] = useState(0)

    const increaseCartValue = ()=>{
        setCart(prev=>prev+1)
    }

    const decreaseCartValue = ()=>{
        setCart(prev => (prev > 0 ? prev - 1 : 0));
    }

    const value = {
        cart,
        increaseCartValue,
        decreaseCartValue
    }


    return (
        <MyContext.Provider value={value}>
            {children}
        </MyContext.Provider>
    );
};
