import React from 'react';
import Login from './components/login/login';
import './App.css';
import {BrowserRouter , Routes , Route} from "react-router-dom";
import Register from './components/registertion/registeration';
import Navbar from './components/post/navigation';
import CreatePost from './components/post/postCreate';


function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Login/>}/>
    <Route path='/register' element={<Register/>} />
    <Route path='/posts' element={<Navbar/>} />
    <Route path="/createpost" element={<CreatePost/>}/>
  </Routes>
  </BrowserRouter>
  );
}

export default App;
