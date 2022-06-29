import React from "react";

function ProductPage(props){
    return (
    <div className = "productPage">
        <div className = "productImage">
            <img src = {props.product.images[0]}/>
        </div>
        <div className = "productDetails">
            <h1>{props.product.title}</h1>
            <h3>{props.product.brand} {props.product.category}</h3>
            <h5>{props.product.rating} <i className="material-symbols-outlined"> star</i> </h5>
            <h1>${props.product.price}</h1>
            <h4>{props.product.discountPercentage}% Off</h4>
            <h6>{props.product.description}</h6>
            <h2>Hurry ! only {props.product.stock} Left</h2>
            <br/>
            <button>ADD TO CART <span className="material-symbols-outlined cart-icon">shopping_cart</span> </button>
        </div> 
    </div>
    );
}

export default ProductPage;