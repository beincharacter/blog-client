import React, { useEffect, useState } from "react";
import "./navigation.css"

import Header from "../header/header";
import { useNavigate } from "react-router-dom";
 const Navbar = () => {
    const navigate = useNavigate();
    const [data, setdata] = useState([]);


    useEffect(() => {
        fetch("https://blog-server-2zb0.onrender.com/posts",{
            headers: {
            "autherization": localStorage.getItem("token")
        }}).then(res => {
            return res.json();
        }).then(data => {
            console.log(data)
        })
    })

    const logoutFunc = () => {
        console.log(("Inside logout func"));
        localStorage.removeItem("token");
        navigate("/")
    }
    return (
        <>
            <Header/>
            <div className="navbar" style={{float: "right", marginLeft: "10px"}}>
                <span style={{paddingRight: "50px"}}>Home</span>
                <span style={{paddingRight: "50px"}} onClick={() => navigate("/createpost")}>Create</span>
                <span style={{paddingRight: "50px"}} onClick={() => logoutFunc()}>Logout</span>
            </div>
        </>
    )
}

export default Navbar;