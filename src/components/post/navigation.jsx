import React, { useEffect, useState } from "react";
import "./navigation.css"

import Header from "../header/header";
import { useNavigate } from "react-router-dom";
 const Navbar = () => {
    const navigate = useNavigate();

    if(!localStorage.getItem("token")) {
        navigate("/");
    }

    const [blogData, setdata] = useState([]);


    useEffect(() => {
        fetch("https://blog-server-2zb0.onrender.com/posts",{
        // fetch("http://localhost:9000/posts",{
            headers: {
            "Authorization": localStorage.getItem("token")
        }}).then(res => {
            return res.json();
        }).then(data => {
            setdata(data)
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
            <div className="content-container">
                {blogData.map((data, i) => {
                    return (
                        <>
                            <div className="content">
                                <b className="title">{data.title}</b> <br/>
                                <img className="image" src={data.image} height="200px" width="300px" alt="cover" />
                                <p className="description">{data.description}</p>
                                <p className="author">by {data.author}</p>
                                <p className="date" >{data.date}</p>
                                <p className="time" >{data.time}</p>
                            </div>
                        </>
                    )
                }).reverse()
                } 
            </div>
        </>
    )
}

export default Navbar;