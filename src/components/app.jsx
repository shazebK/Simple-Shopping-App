import React,{useState} from "react";
import Header from "./header";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./home";

function App(){
   const [searchTerm,setSearchTerm] = useState("");

   function handleSearch(Term){
       setSearchTerm(Term);
   }

   return (
       <BrowserRouter>
       <Header onSearch = {handleSearch}/>

       <Routes>
       <Route path = "/" element = {<Home searchText = {searchTerm}/>}/>
       </Routes>

       </BrowserRouter>
   );
}

export default App;