import React from "react";
import { FaUser , FaLock } from "react-icons/fa";
import { IconContext } from "react-icons";
import { useState  } from "react";

const Login = ()=>{
  const [email , setEmail] = useState("");
  const [password , setPassword] = useState("");

  async function submitHandler(e)
  {
    e.preventDefault();

    const response = await fetch("http://localhost:5000/auth/login", {
      method:"POST",
      headers:{
        "content-type":"application-json"
      },
      body:{
        email,
        password
      }
    })

    const data = await response.json();

    console.log(data);
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

    </form>
  );
}

export default Login;