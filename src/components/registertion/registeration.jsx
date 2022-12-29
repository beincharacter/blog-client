import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../header/header";
import "./registeration.css";


const Register = () => { 

    const [registerationData, setregisterationData] = useState({name: "", email: "", password: ""});
    const [confirmPassword, setConfirmPassword] = useState("")
    const [error, setError] = useState("")
    const navigate = useNavigate()
    console.log(registerationData)
    async function registeration() {
        if(registerationData.password !== confirmPassword) return setError("password not match")

        if(registerationData.name && registerationData.email && registerationData.password)
        await fetch("https://blog-server-2zb0.onrender.com/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(registerationData),
        }).then(res => {
            console.log(res)
            navigate("/")
        }).catch(e => {
            console.log("errr>>> " + e.message);
        })
    }


    return (
        <>
            <Header/>
            <div className="registeration-container">
                <section>
                    <p style={{fontWeight: "bolder"}}>Sign Up : </p>
                <label className="input">Name: <br/>
                    <input type="text" onChange={(e) => setregisterationData({...registerationData, name: e.target.value})} />
                </label> <br/>
                <label className="input">Email: <br/>
                    <input type="text" onChange={(e) => setregisterationData({...registerationData, email: e.target.value})} />
                </label> <br/>
                <label className="input">Password: <br/>
                    <input type="password"  onChange={(e) => setregisterationData({...registerationData, password: e.target.value})} />
                </label> <br/>
                <span style={{color: "red", fontSize: "small"}}>{error} </span><br/>
                <label className="input">Confirm password: <br/>
                    <input type="password"  onChange={(e) => setConfirmPassword(e.target.value)} />
                </label> <br/>
                <span style={{color: "red", fontSize: "small"}}>{error} </span><br/>

                <button onClick={() => registeration()}>Register</button>
                </section>

            </div>
        </>
    )
}

export default Register;