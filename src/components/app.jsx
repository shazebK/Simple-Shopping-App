import React from "react";
import Header from "./header";
import Product from "./product";
import rawData from "../product_dummy_data.json";

function App(){
   const products = rawData.products;
   return (
       <div>
       <Header/>
       {products.map(product => <Product key = {product.id} prod = {product}/>)}
       </div>
   );
}

export default App;