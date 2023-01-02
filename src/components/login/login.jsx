import React from "react";
import { useState } from "react";
import Header from "../header/header";
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa'

import "./login.css"

 const Login =() => {
    const navigate = useNavigate();
    const [LoginData, setLoginData] = useState({email: "", password: ""});
    const [hide, setHide] = useState(true)
    const [emailErr, setEmailError] = useState("");
    const [passErr, setPassError] = useState('');
    console.log(LoginData)

    async function login() {
        try {
          // const response = await fetch("https://blog-server-2zb0.onrender.com/login", {
          await fetch("https://blog-server-2zb0.onrender.com/login", {
          // await fetch("http://localhost:9000/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(LoginData),
          }).then(res => {
            return res.json();
          }).then(data => {
            // console.log(data.message + "status")
            if(data.status === 400) {
              setEmailError("wrong email!");
            } else if(data.status === 401){
              setEmailError("")
              setPassError("wrong password!")
            } else {
              localStorage.setItem("name", data.name);
              localStorage.setItem("token", data.token);
              navigate("/posts");
            }
            
          }).catch(e => {
            console.log("Error: " + e);
          })
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
                <label className="input">Email: <span style={{color: "red"}}>{emailErr}</span> <br/> 
                    <input type="text" onChange={(e) => setLoginData({...LoginData, email: e.target.value})} /> <br/>
                    
                </label> <br/>
                <label className="input">password: <span style={{color: "red"}}>{passErr}</span> <br/>
                    <input type={hide ? 'password' : 'text'}  onChange={(e) => setLoginData({...LoginData, password: e.target.value})} />
                    <span 
                      style={{marginLeft: '4px'}}
                    onClick={() => setHide(!hide)}>{hide ? <FaEye/> : <FaEyeSlash/>} </span> <br/>
                    
                </label> <br/>

                <button onClick={() => login()}>Login</button> 

                <p>Need to <span className="register-nav" style={{cursor: "pointer", textDecoration: "underline"}} onClick={() => navigate('/register')}>Sign up</span></p>
                </section>

            </div>
            

        </>
    )
 }

 export default Login;