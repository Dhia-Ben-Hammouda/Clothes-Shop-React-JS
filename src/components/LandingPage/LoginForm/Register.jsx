import React from "react";
import { FaPhoneAlt , FaUser , FaLock } from "react-icons/fa";
import { IconContext } from "react-icons";
import { useState } from "react";

const Register = ()=>{
  const [ email , setEmail ] = useState("");
  const [ password , setPassword ] = useState("");
  const [ phone , setPhone] = useState("");  

  async function submitHandler(e)
  {
    e.preventDefault();

    const response = await fetch("http://localhost:5000/auth/register",{
      method:"POST",
      headers:{
        "content-type":"application-json"
      },
      body:{
        email,
        phone,
        password
      }
    })

    const data = await response.json();

    console.log(data);

  }

  return(
    <form onSubmit={ submitHandler } id="register-form" className="translated">
      <IconContext.Provider value={ {color:"#555"} }>
        <div>
          <FaPhoneAlt />
          <input 
            placeholder="Enter phone..." 
            value={phone}
            onChange={ (e)=>{setPhone(e.target.value)} }  
          />
        </div>
        
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
            onChange={ (e)=>{setPassword(e.target.value)} }
          />
        </div>
      </IconContext.Provider>
      <button>Sign Up</button>
    </form>
  );
}

export default Register;