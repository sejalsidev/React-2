import "./App.css";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import AddProduct from "./AddProduct";
import UpdateProduct from "./UpdateProduct";
import Login from "./Component/Login";
import Register from "./Register";
import "bootstrap/dist/css/bootstrap.min.css";
import Get from "./Component/Get";
import PostForm from "./PostForm";
import Counter from "./Counter";
import HookCounter from "./HookCounter";
import HookCounterTwo from "./HookCounterTwo";
import HookObject from "./HookObject";
import HookCounterFour from "./HookCounterFour";
import HookCounterEffectDemo from "./HookCounterEffectDemo";
import DataFetching from "./DataFetching";
function App() {
  return (
    <div className="App">
      <Login/>
      {/*   <HookCounterFour/> */}
      {/*   <Counter/> */}
      {/* <HookCounter/> */}
      {/*   <HookCounterTwo/> */}
      {/*  <HookObject/> */}

      {/* <Get/> */}
      {/*   <PostForm/>
       */}
      {/* <HookCounterEffectDemo/> */}
    {/*   <DataFetching/> */}

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
