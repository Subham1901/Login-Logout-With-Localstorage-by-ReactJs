import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import Register from './Register'
export default function Home() {
  const [logindata,setlogindata]=useState([]);
  const [token,setToken]=useState("");

  console.log(token);
 useEffect(()=>{
  axios.get('http://localhost:8080/RestAPI/GetAct')
  .then((res)=>{
    setlogindata(res.data);
  })
 },[])


 const handleSearch =(e)=>{
   setToken(e.target.value);
 }


    console.log(logindata);
  return (
    <div className='container'>
        <h1>Login Details</h1>
        <input type='search' onChange={handleSearch} placeholder='Search here..'></input>
      <Table striped bordered hover>  
  <thead>
    <tr>
      <th>Email</th>
      <th>Password</th>
      <th>AccessToken</th>
    </tr>
  </thead>
  {logindata.filter((item)=>item.email.toLowerCase().includes(token.toLowerCase())).map((item)=>(
  <tbody key={item.token}>
    <tr>
      <td>{item.email}</td>
      <td>{item.password}</td>
      <td>{item.token}</td>
    </tr>
  </tbody>
  ))}
</Table>
    </div>
  )
}
