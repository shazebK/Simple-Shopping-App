import React,{useState} from "react";
import { Link, useNavigate } from "react-router-dom";

function Header(props){
    const [searchTerm,setSearchTerm] = useState("");
    const navigate = useNavigate();

    function handleChange(event){
        const newSearchTerm = event.target.value;
        setSearchTerm(newSearchTerm);
    }

    function handleSubmit(event){
        navigate("/");
        props.onSearch(searchTerm);
        event.preventDefault();
    }

    return (
         <div className = "nav">
            <h1><Link to = "/">TakeIt</Link></h1>
            <form onSubmit = {handleSubmit}>
                <input type = "text" onChange = {handleChange} placeholder="Search product" value = {searchTerm} autoComplete="off"/>
                <button><span className="material-symbols-outlined">search</span></button>
            </form>
            <div className = "toSetCount">
            <Link to = "/checkout"><span className="material-symbols-outlined cart-icon">shopping_cart</span></Link>
            {props.count?<div className = "countCheckout">{props.count}</div> : null}
            </div>
         </div>
    );
}

export default Header;