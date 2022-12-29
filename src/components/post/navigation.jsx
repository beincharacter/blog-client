import React, { useEffect } from "react";
import "./navigation.css"

import Header from "../header/header";
 const Navbar = () => {


    // useEffect(() => {
    //     fetch("https://blog-server-2zb0.onrender.com/api/posts/api/posts").then(res => {
    //         return res.json();
    //     }).then(data => {
    //         title: data.post.title
    //     })
    // })
    return (
        <>
            <Header/>
            <div className="navbar" style={{float: "right", marginLeft: "10px"}}>
                <span style={{paddingRight: "50px"}}>Home</span>
                <span style={{paddingRight: "50px"}}>Create</span>
                <span style={{paddingRight: "50px"}}>Logout</span>
            </div>
        </>
    )
}

export default Navbar;