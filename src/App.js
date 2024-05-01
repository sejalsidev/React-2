
import "./App.css";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import AddProduct from "./AddProduct";
import UpdateProduct from "./UpdateProduct";
import Login from "./Login";
import Register from "./Register";
import 'bootstrap/dist/css/bootstrap.min.css'
import Get from "./Component.js/Get";
import PostForm from "./PostForm";
function App() {
  return (
    <div className="App">
      
      {/* <Get/> */}
      <PostForm/>

     {/*  <BrowserRouter>
     
        
          <Routes>
            <Route path="/add" element={<AddProduct />} />
            <Route path="/update" element={<UpdateProduct />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
   
      </BrowserRouter> */}
    </div>
  );
}

export default App;
