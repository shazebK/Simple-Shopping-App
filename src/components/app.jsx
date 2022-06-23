import React,{useState} from "react";
import Header from "./header";
import Product from "./product";
import rawData from "../product_dummy_data.json";

function App(){
   const products = rawData.products;

   const [searchTerm,setSearchTerm] = useState("");

   function handleSearch(Term){
       setSearchTerm(Term);
   }

   return (
       <div>
       <Header onSearch = {handleSearch}/>
       {products.filter((product) => {
           if(searchTerm == "")
           return product;
           else if(product.title.toLowerCase().includes(searchTerm.toLowerCase()))
           return product;
       }).map((product,key) => <Product key = {product.id} prod = {product}/>)}
       </div>
   );
}

export default App;