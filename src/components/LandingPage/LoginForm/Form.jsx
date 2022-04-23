import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import Login from "./Login.jsx";
import Register from "./Register.jsx";

const LoginForm = ()=>{

  function a()
  {
    document.getElementById("login-btn").classList.toggle("active",true);
    document.getElementById("register-btn").classList.toggle("active",false);
    document.getElementById("login-form").classList.toggle("translated",false);
    document.getElementById("register-form").classList.toggle("translated",true);
  }

  function b()
  {
    document.getElementById("login-btn").classList.toggle("active",false);
    document.getElementById("register-btn").classList.toggle("active",true);
    document.getElementById("login-form").classList.toggle("translated",true);
    document.getElementById("register-form").classList.toggle("translated",false);
  }


  return(
    <div id="form" className="hidden">
      <div className="btn-container">
        <div id="login-btn" onClick={ a } className="active" style={ {cursor:"pointer"} }>Sign in</div>
        <div id="register-btn" onClick={ b } className="" style={ {cursor:"pointer"} } >Sign up</div>
      </div>

      <div className="form-container">
        <Login/>
        <Register/>
      </div>
    </div>
  );
}

export default LoginForm;