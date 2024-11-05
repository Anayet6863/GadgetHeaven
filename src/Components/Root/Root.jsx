import React, { createContext, useContext, useEffect, useState } from 'react';
import NavBar from '../NavBar/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import { data } from 'autoprefixer';
export const allDataContext =  createContext();
export const cartContext = createContext();
const Root = () => {
    const [products, setProductId] = useState([]);
    console.log(products);
    
    const [allData,setAllData]=useState([])
    useEffect(()=>{
        fetch("./categoryData.json")
        .then(res=>res.json()
        .then(data=>setAllData(data)))
    },[])
   // console.log(allData);
    return (
        <div>
            <div>
                <cartContext.Provider value={{products,setProductId}}>
                <allDataContext.Provider value={allData}>
               <NavBar></NavBar>
                <Outlet></Outlet>
                <Footer></Footer>
               </allDataContext.Provider>
                </cartContext.Provider>
            </div>
        </div>
    );
};

export default Root;