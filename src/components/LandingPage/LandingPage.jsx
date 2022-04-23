import React from "react";
import img from "./illustration.webp";
import LoginForm from "./LoginForm/Form.jsx";

const LandingPage = ()=>{

  function clickHandler()
  {
    document.querySelector("#form").classList.toggle("hidden");
    document.querySelector(".text-container").classList.toggle("hidden");
  }

  return(
    <section className="landing-page">
      <div className="left">
        <div className="container">

          <div className="text-container">
            <h1>The best place to buy clothes</h1>
            <h3>
              experience the luxury of buying high quality 
              clothes from home with low prices and fast shipping!
            </h3>
            <button className="btn" onClick={ clickHandler } >Sign in</button>
          </div>

          <LoginForm/>

        </div>
      </div>

      <div className="right">
        <img src={img} style={ {width:"70%"} }/>
      </div>
    </section>
  );
}

export default LandingPage;