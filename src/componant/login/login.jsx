import React from "react";
import { useState } from "react";
import Header from "../header/header";
import { useNavigate } from 'react-router-dom';

import "./login.css"

 const Login =() => {
    const [LoginData, setLoginData] = useState({email: "", password: ""});
    const navigate = useNavigate()
    console.log(LoginData)

    async  function login() {
        await fetch("https://blog-server-2zb0.onrender.com/api/posts/api/posts", {
            method: "POST"
        }).then(res => {
                    return res.json();
                }).then(data => {
                })

    }
    return (
        <>
            <Header/>
            <div className="login-container">
                <section>
                <label className="input">Email: <br/>
                    <input type="text" onChange={(e) => setLoginData({...LoginData, email: e.target.value})} />
                </label> <br/>
                <label className="input">password: <br/>
                    <input type="password"  onChange={(e) => setLoginData({...LoginData, password: e.target.value})} />
                </label> <br/>

                <button onClick={() => login()}>Login</button>

                <p>Need to <p onClick={() => navigate('/register')}>Sign up</p></p>
                </section>

            </div>
            

        </>
    )
 }

 export default Login;