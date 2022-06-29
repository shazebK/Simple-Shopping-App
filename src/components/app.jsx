import React,{useState} from "react";
import Header from "./header";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./home";
import ProductPage  from "./productPage";

function App(){
   const [searchTerm,setSearchTerm] = useState("");
   const [thisProduct,setThisProduct] = useState({});

   function handleSearch(Term){
       setSearchTerm(Term);
   }

   function handleClickedProduct(clickedProduct){
      setThisProduct(prevValue =>  ({...prevValue,...clickedProduct}));
   }



   return (
       <BrowserRouter>
       <Header onSearch = {handleSearch}/>
       <Routes>
       <Route path = "/" element = {<Home clickedProduct = {handleClickedProduct} searchText = {searchTerm}/>}/>
       <Route path = {"/product/" + thisProduct.id} element = {<ProductPage product = {thisProduct}/> }/>
       </Routes>
       </BrowserRouter>
   );
}

export default App;