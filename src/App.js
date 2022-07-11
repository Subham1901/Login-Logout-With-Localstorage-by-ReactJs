import logo from './logo.svg';
import './App.css';
import { Input, ListGroup, ListGroupItem } from 'reactstrap';
import React, { useEffect } from 'react';
import axios from 'axios';
import Signup from './components/Signup';
import Home from './components/Home'
import { BrowserRouter, Route, Routes, useNavigate,Navigate } from 'react-router-dom';
import Navbr from './components/Navbr';
import NotFound from './components/NotFound'
import Start from './components/Start';
import Register from './components/Register';
import Navigationbar from './components/Navigationbar';

function App() {
  const email =localStorage.getItem("email");
  const password = localStorage.getItem("password");
  const navigate = useNavigate();
  useEffect(()=>{
    if (email==null && password==null) {
        navigate('/Signup')
    }
  },[])
  return(
    <div>
      <Navigationbar/>
      <div style={{marginTop:40}}>
    
         <Routes>
         <Route path='*' element={<NotFound/>}></Route>
         {
          email&&password?<> <Route path='/Home' element={<Home/>}></Route>
          <Route path='/Start' element={<Start/>}></Route>
          
          </>:
          <>
          <Route path='/Signup' element={<Signup/>}></Route>    
          <Route path='/Register' element={<Register/>}></Route>    
          </> 
        }
         </Routes>
   

      </div>
    </div>

  );
}

export default App;
