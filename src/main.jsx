import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "../components/pages/Home.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  
} from "react-router-dom";
import ProductList from "../components/pages/ProductList.jsx";
import Cart from "../components/pages/Cart.jsx";
import Product from "../components/pages/Product.jsx";
import Principal from "../components/Principal/Principal.jsx";
import App from "./App.jsx";
 export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
   {/*  <Route element ={<Layout/>}> */}
      <Route path="/" element={<Principal />}>
        <Route index element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product" element={<Product />} />
        <Route path="/products" element={<ProductList />} />
      </Route>
    {/*   </Route> */}
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);
