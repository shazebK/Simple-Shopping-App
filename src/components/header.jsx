import React from "react";

function Header(){
    return (
         <div className = "nav">
            <h1>TakeIt</h1>
            <form>
                <input type = "text" placeholder="Search product" autoComplete="off"/>
                <button type = "submit"><span className="material-symbols-outlined">search</span></button>
            </form>
            <a><span className="material-symbols-outlined cart-icon">shopping_cart</span></a>
         </div>
    );
}

export default Header;