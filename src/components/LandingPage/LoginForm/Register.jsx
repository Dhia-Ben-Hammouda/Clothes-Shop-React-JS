import React from "react";
import { FaPhoneAlt , FaUser , FaLock } from "react-icons/fa";
import { IconContext } from "react-icons";
import { useState } from "react";

const Register = ()=>{
  const [ email , setEmail ] = useState("");
  const [ password , setPassword ] = useState("");
  const [ phone , setPhone] = useState("");  
  const [ res , setRes ] = useState("");

  async function submitHandler(e)
  {
    e.preventDefault();

    const response = await fetch("https://clothes-shop-react-js.herokuapp.com/auth/register",{
      method:"POST",
      headers:{
        "content-type":"application/json"
      },
      body: JSON.stringify({
        email,
        phone,
        password
      })
    })

    const data = await response.json();

    if(data.status === "exists")
    {
      setRes("user already exists");
    }
    else if(data.status === "ok")
    {
      setRes("user created succesfully");
      document.getElementById("res").style.color = "green";
    }

  }

  return(
    <form onSubmit={ submitHandler } id="register-form" className="translated">
      <IconContext.Provider value={ {color:"#555"} }>
        <div>
          <FaPhoneAlt />
          <input 
            placeholder="Enter phone..." 
            value={phone}
            required
            onChange={ (e)=>{setPhone(e.target.value)} }  
          />
        </div>
        
        <div>
          <FaUser />
          <input 
            placeholder="Enter email..." 
            value={email}
            type="email"
            required
            onChange={ (e)=>{setEmail(e.target.value)} }
          />
        </div>

        <div>
          <FaLock />
          <input 
            placeholder="enter password..." 
            value={password}
            type="password"
            required
            onChange={ (e)=>{setPassword(e.target.value)} }
          />
        </div>
      </IconContext.Provider>
      <button>Sign Up</button>
      <h4 id="res" style={ {  color:"red" , marginTop:".3rem"   } }>{res}</h4>
    </form>
  );
}

export default Register;