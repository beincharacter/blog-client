import React, { useState } from "react";
import Header from "../header/header";
import "./postCreate.css"
import { useNavigate } from 'react-router-dom';

const CreatePost = () => {
  
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  console.log(title, image, author, description);


  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(("In handleSubmit>>> "));

    
    const formData = new FormData();
    formData.append('title', title);
    formData.append('image', image);
    formData.append('description', description);
    formData.append('author', author);

    // try{
        await fetch('https://blog-server-2zb0.onrender.com/posts', {
        // await fetch('http://localhost:9000/posts', {
      method: 'POST',
      headers: {
        "Authorization":localStorage.getItem('token')
      },
      body: formData
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        navigate("/posts")
      }).catch(e => {
        console.log("err>>>> " + e);
      });

      // navigate("/posts")

    // }catch (e) {
    //     console.log("error: " + e)

    // }
      
  
  };



    return (
        <>
            <Header/>
            <div className="create-post-container">
                <section>
                    <div>
                <label >Title:  
                    <input type="text" onChange={(e) => setTitle(e.target.value)} />
                </label> <br/>
                </div>
                 <div>
                <label >photo:  
                    <input type="file" onChange={(e) =>  setImage(e.target.files[0])} />
                </label> <br/>
                </div>
                 <div>
                <label >Description:  
                    <input type="text" onChange={(e) =>  setDescription(e.target.value)} />
                </label> <br/>
                <label >Author:  
                    <input type="text" onChange={(e) =>  setAuthor(e.target.value)} />
                </label> <br/>
                <button onClick={(e) => handleSubmit(e)}>Create</button>
                </div>
                 
                </section>
            </div>
            
        </>
    )
}

export default CreatePost;