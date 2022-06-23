import React,{useState} from "react";

function Header(props){
    const [searchTerm,setSearchTerm] = useState("");

    function handleChange(event){
        const newSearchTerm = event.target.value;
        setSearchTerm(newSearchTerm);
    
        props.onSearch(newSearchTerm);
    }

    return (
         <div className = "nav">
            <h1>TakeIt</h1>
            <form>
                <input type = "text" onChange = {handleChange} placeholder="Search product" value = {searchTerm} autoComplete="off"/>
                <button type = "submit"><span className="material-symbols-outlined">search</span></button>
            </form>
            <a><span className="material-symbols-outlined cart-icon">shopping_cart</span></a>
         </div>
    );
}

export default Header;