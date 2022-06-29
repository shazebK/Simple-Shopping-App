import React from "react";
import {useNavigate} from "react-router"

function Product(props){
    const navigate  = useNavigate();

   function handleClick(){
      props.productIs(props.prod);
      navigate("/product/" + props.prod.id);
   }

    return (
        <div onClick = {handleClick} className = "product">
        <div className="content">
        <div>
            <img className = "product-thumbnail" src = {props.prod.thumbnail} alt = {props.prod.title}/>
        </div>
        <div className = "details">
        <h1>{props.prod.title}</h1>
        <h5>{props.prod.description}</h5>
        <h4>Discount Applied : <span>{props.prod.discountPercentage}%</span></h4>
        <h4>Ratings : {props.prod.rating} <i className="material-symbols-outlined"> star</i></h4>
        </div>
        </div>
        <h3>${props.prod.price}</h3>
        </div>
    );
}

export default Product;