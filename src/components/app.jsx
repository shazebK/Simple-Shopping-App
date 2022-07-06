import React,{useState} from "react";
import Header from "./header";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./home";
import ProductPage  from "./productPage";
import Checkout from "./checkout";

function App(){
   const [searchTerm,setSearchTerm] = useState("");
   const [thisProduct,setThisProduct] = useState({});
   const [addedProducts,setAddedProducts] = useState([]);
   const [checkoutCount,setCheckoutCount] = useState(addedProducts.length);

    function addCheckoutProducts(product){
        setAddedProducts((preValue) => [...preValue,product]);
        setCheckoutCount(checkoutCount + 1);
    }

   function handleSearch(Term){
       setSearchTerm(Term);
   }

   function handleClickedProduct(clickedProduct){
      setThisProduct(prevValue =>  ({...prevValue,...clickedProduct}));
   }

    function delItem(delId){
    setAddedProducts(preValue => preValue.filter(pro => pro.id!=delId && pro));
    setCheckoutCount(checkoutCount - 1);
   }

   return (
       <BrowserRouter>
       <Header onSearch = {handleSearch} count = {checkoutCount}/>
       <Routes>
       <Route path = "/" element = {<Home clickedProduct = {handleClickedProduct} searchText = {searchTerm}/>}/>
       <Route path = {"/product/" + thisProduct.id} element = {<ProductPage addCheckout = {addCheckoutProducts} product = {thisProduct}/> }/>
       <Route path = {"/checkout"} element = {<Checkout toCheckout = {addedProducts} removeItem = {delItem}/>}/>
       </Routes>
       </BrowserRouter>
   );
}

export default App;