import React from "react";
import Product from "./product";
import rawData from "../product_dummy_data.json";
import { Navigate } from "react-router-dom";

function Home(props){
    const products = rawData.products;
    var searchTerm = props.searchText;

    function handleProductClick(clickedProduct){
         props.clickedProduct(clickedProduct);
    }

    return (
        <div>
           {products.filter((product) => {
           if(searchTerm == "")
           return product;
           else if(product.title.toLowerCase().includes(searchTerm.toLowerCase()))
           return product;
       }).map((product,key) => <Product productIs = {handleProductClick} key = {product.id} prod = {product}/>)}
        </div>
    );
}

export default Home;