import React , {useState} from "react";

function ProductPage(props){
    const [imageN,setImageN] = useState(0);
    const imageNumber = props.product.images.length;

    function showPrevious(){
        if(imageN==0)
        setImageN(imageNumber-1);
        else
        setImageN(imageN-1);
    }

    function showNext(){
        if(imageN===imageNumber-1)
        setImageN(0);
        else
        setImageN(imageN+1);
    }

    function addProduct(){
      props.addCheckout(props.product);
    }

    return (
    <div className = "productPage">
        <div className = "productImage">
            <img src = {props.product.images[imageN]}/>
            <div className = "preNext">
            <button onClick = {showPrevious}>&#60;</button>
            <button onClick = {showNext}>&#62;</button>
            </div>
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
            <button onClick = {addProduct}>ADD TO CART <span className="material-symbols-outlined cart-icon">shopping_cart</span> </button>
        </div> 
    </div>
    );
}

export default ProductPage;