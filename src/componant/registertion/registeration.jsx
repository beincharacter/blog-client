import React, { useState } from "react";
import Header from "../header/header";
import "./registeration.css";


const Register = () => { 

    const [registerationData, setregisterationData] = useState({username: "", email: "", password: ""});
    console.log(registerationData)
    function registeration() {

    }


    return (
        <>
            <Header/>
            <div className="registeration-container">
                <section>
                <label className="input">Name: <br/>
                    <input type="text" onChange={(e) => setregisterationData({...registerationData, username: e.target.value})} />
                </label> <br/>
                <label className="input">Email: <br/>
                    <input type="text" onChange={(e) => setregisterationData({...registerationData, email: e.target.value})} />
                </label> <br/>
                <label className="input">Password: <br/>
                    <input type="password"  onChange={(e) => setregisterationData({...registerationData, password: e.target.value})} />
                </label> <br/>
                <label className="input">Confirm password: <br/>
                    <input type="password"  onChange={(e) => setregisterationData({...registerationData, password: e.target.value})} />
                </label> <br/>

                <button onClick={() => registeration()}>Register</button>
                </section>

            </div>
        </>
    )
}

export default Register;