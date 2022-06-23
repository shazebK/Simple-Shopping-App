import React from "react";

function Product(props){
    return (
        <div className = "product">
        <div>
            <img className = "product-thumbnail" src = {props.prod.thumbnail} alt = {props.title}/>
        </div>
        <div className = "details">
        <h1>{props.prod.title}</h1>
        <h5>{props.prod.description}</h5>
        <h4>Discount Applied : <span>{props.prod.discountPercentage}%</span></h4>
        <h4>Ratings : {props.prod.rating} <i className="material-symbols-outlined"> star</i></h4>
        </div>
        <h3>${props.prod.price}</h3>
        </div>
    );
}

export default Product;