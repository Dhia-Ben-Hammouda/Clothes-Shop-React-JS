import React from "react";
import LandingPage from "./LandingPage/LandingPage.jsx";
import Products from "./Products/Products.jsx";
import { Routes , Route } from "react-router-dom";
import "./styles.scss";

const App = ()=>{
  return(
    <>
      <LandingPage/>
      <Products />
    </>
  );
}

export default App;