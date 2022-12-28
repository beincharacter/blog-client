import logo from './logo.svg';
// import './App.css';
import Header from './componant/header/header';
import Login from './componant/login/login';
import Register from './componant/registertion/registeration';
import Navbar from './componant/post/navigation';
import CreatePost from './componant/post/postCreate';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path='/register' element={<Register/>} />
        </Routes>
      </BrowserRouter>
      <Login/>
    </div>
  );
}

export default App;
