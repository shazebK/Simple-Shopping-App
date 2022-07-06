import React from "react";

function Checkout(props){



    var bill = 0;

    return (
        <div>
        {props.toCheckout.map((addedProduct) => {
            bill += addedProduct.price
        return <div className = "checkoutProduct" key = {addedProduct.id}>
            <div className = "checkoutImage">
                <img src = {addedProduct.thumbnail} />
            </div>

            <div className = "checkoutDetails">
                <h2>{addedProduct.title}</h2>
                <h3>${addedProduct.price}</h3>
            </div>
            <p onClick = {() => props.removeItem(addedProduct.id)} className = "delete"><span className="material-symbols-outlined">delete</span></p>
          </div> 
        })
        }
        <div className = "billDetails">
            <h2>Total</h2>
            <h2>${bill}</h2>
        </div>
        </div>
    );
}

export default Checkout;