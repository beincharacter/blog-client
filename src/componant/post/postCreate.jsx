import React, { useState } from "react";
import Header from "../header/header";
import "./postCreate.css"
import { useNavigate } from 'react-router-dom';

const CreatePost = () => {
    const [postData, setPostData] = useState({title: '', image: null, description: '', username: localStorage.getItem("username")})
    const navigate = useNavigate()
    return (
        <>
            <Header/>
            <div className="create-post-container">
                <section>
                    <div>
                <label >Title:  
                    <input type="text" onChange={(e) => setPostData({...postData, title: e.target.value})} />
                </label> <br/>
                </div>
                 <div>
                <label >photo:  
                    <input type="file" onChange={(e) => setPostData({...postData, image: e.target.value})} />
                </label> <br/>
                </div>
                 <div>
                <label >Description:  
                    <input type="text" onChange={(e) => setPostData({...postData, description: e.target.value})} />
                </label> <br/>
                </div>
                 
                </section>
            </div>
            
        </>
    )
}

export default CreatePost;