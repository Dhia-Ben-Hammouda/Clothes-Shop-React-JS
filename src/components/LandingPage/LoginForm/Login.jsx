import React from "react";
import { FaUser , FaLock } from "react-icons/fa";
import { IconContext } from "react-icons";
import { useState  } from "react";

const Login = ()=>{
  const [email , setEmail] = useState("");
  const [password , setPassword] = useState("");
  const [res , setRes] = useState("");

  async function submitHandler(e)
  {
    e.preventDefault();

    const response = await fetch("https://clothes-shop-react-js.herokuapp.com/auth/login", {
      method:"POST",
      headers:{
        "content-type":"application/json"
      },
      body: JSON.stringify({
        email,
        password
      })
    })

    const data = await response.json();

    if(data.status === "doesn't exist")
    {
      setRes("user doesn't exist");
    }
    else if(data.status === "wrong info")
    {
      setRes("wrong info");
    }
    else if(data.status === "ok")
    {
      localStorage.setItem("token" , data.token );
      localStorage.setItem("email" , data.email);
      window.location.href = "/";
    }
  }

  return(
    <form onSubmit={ submitHandler } id="login-form" >
      <IconContext.Provider value={ { color:"#555" } }>
        <div>
          <FaUser />
          <input 
            placeholder="Enter email..." 
            value={email}
            type="email"
            onChange={ (e)=>{setEmail(e.target.value)} }
          />
        </div>

        <div>
          <FaLock />
          <input 
            placeholder="enter password..." 
            value={password}
            type="password"
            onChange={ (e)=>{ setPassword(e.target.value) } }
          />
        </div>

      </IconContext.Provider>

      <button>Sign in</button>
      <h4 style={ {  color:"red" , marginTop:"1rem"  } }>{res}</h4>
    </form>
  );
}

export default Login;