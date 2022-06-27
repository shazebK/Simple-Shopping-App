import React from "react";
import Product from "./product";
import rawData from "../product_dummy_data.json";

function Home(props){
    const products = rawData.products;
    var searchTerm = props.searchText;
    return (
        <div>
           {products.filter((product) => {
           if(searchTerm == "")
           return product;
           else if(product.title.toLowerCase().includes(searchTerm.toLowerCase()))
           return product;
       }).map((product,key) => <Product key = {product.id} prod = {product}/>)}
        </div>
    );
}

export default Home;