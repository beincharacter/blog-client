import React from "react";
import { useState } from "react";
import Header from "../header/header";
import { useNavigate } from 'react-router-dom';

import "./login.css"

 const Login =() => {
    const [LoginData, setLoginData] = useState({email: "", password: ""});
    const navigate = useNavigate()
    console.log(LoginData)

    async function login() {
        try {
          const response = await fetch("https://blog-server-2zb0.onrender.com/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(LoginData),
          });
          console.log("res>> " + JSON.stringify(response));
          const data = await response.json();
          if (response.status === 200) {
            // User is valid, store the token in localStorage
            localStorage.setItem("token", data.token);
            navigate("/posts");
          } else {
            // User is not valid, handle the error
            console.error(data.message);
          }
        } catch (error) {
          console.error(error);
        }
      }
      
    return (
        <>
            <Header/>
            <div className="login-container">
                <section>
                    <p style={{fontWeight: "bolder"}}>Sign In : </p>
                <label className="input">Email: <br/>
                    <input type="text" onChange={(e) => setLoginData({...LoginData, email: e.target.value})} />
                </label> <br/>
                <label className="input">password: <br/>
                    <input type="password"  onChange={(e) => setLoginData({...LoginData, password: e.target.value})} />
                </label> <br/>

                <button onClick={() => login()}>Login</button>

                <p>Need to <span className="register-nav" style={{cursor: "pointer", textDecoration: "underline"}} onClick={() => navigate('/register')}>Sign up</span></p>
                </section>

            </div>
            

        </>
    )
 }

 export default Login;