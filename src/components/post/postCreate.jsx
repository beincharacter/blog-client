import React, { useState } from "react";
import Header from "../header/header";
import "./postCreate.css"
import { useNavigate } from 'react-router-dom';

const CreatePost = () => {
    const [postData, setPostData] = useState({title: '', image: null, description: '', author: ""})
    console.log(postData)
    const navigate = useNavigate();


    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(("In handleSubmit>>> "));
    
        
        const formData = new FormData();
        formData.append('title', postData.title);
        formData.append('author', postData.author);
        formData.append('description', postData.description);
        formData.append('image', postData.image);
    
        try{
            await fetch('https://blog-server-2zb0.onrender.com/posts', {
          method: 'POST',
          headers: {
            "authorization":localStorage.getItem('token'),
            'Content-Type': 'multipart/form-data'
          },
          body: formData
        })
          .then(response => response.json())
          .then(data => {
            console.log(data);
          }).catch(e => {
            console.log("err>>>> " + e);
          });
    
          navigate("/posts")

        }catch (e) {
            console.log("error: " + e)

        }
       
    
      };



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
                <label >Author:  
                    <input type="text" onChange={(e) => setPostData({...postData, author: e.target.value})} />
                </label> <br/>
                <button onClick={(e) => handleSubmit(e)}>Create</button>
                </div>
                 
                </section>
            </div>
            
        </>
    )
}

export default CreatePost;