import { Button, Grid, Link, TextField, Typography,CircularProgress } from '@mui/material'
import Box from '@mui/material/Box';
import { width } from '@mui/system';
import React, { useState } from 'react'
import HowToRegIcon from '@mui/icons-material/HowToReg';
import EmailIcon from '@mui/icons-material/Email';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
export default function Register() {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [load,setLoad] = useState(true);
    const navigate=useNavigate();

    console.log(email,password);

    function handlePost(){
        if (email.length==0 && password.length==0) {
            toast.warning('email and password are required');
            navigate('/Register');
        }else{
        axios.post('http://localhost:8080/RestAPI/Register',null,{
            params:{
                email,
                password
            }
        }).then((res)=>{
            console.log(res);
            if(res.data.length==0){
              toast.warning('email already exist! try other');
            }else  navigate('/Signup');
           
        },(err)=>{
            console.log(err);
        })
    }}
 
    function gotoUp(){
      setLoad(false);
      setTimeout(() => {
        navigate('/Signup');
      }, 500);
        
    }
  return (
    
      load?
    <Grid container spacing={7}
    sx={{width:900,height:500,margin:'auto', boxShadow:3,padding:5}}
    direction='row'
    
    >
  <Grid item xs="auto">
  <img src='register.png'
   style={{height:350,width:350}}>
  </img>
  </Grid>
  <Grid item xs={6} sx={{marginTop:5}} >
  <TextField required sx={{width:200}}  id="input-with-sx" label="Email" variant="standard"onChange={(e)=>setEmail(e.target.value)} />
<TextField required sx={{width:200}}  id="input-with-sx" label="Password" type='password' variant="standard" onChange={(e)=>setPassword(e.target.value)}/>
<Button sx={{marginTop:3,width:200}} onClick={handlePost} variant="contained">Register</Button>
<Typography sx={{marginTop:3}} >Already have an account?!&nbsp;&nbsp;<Link sx={{textDecoration:'none'}} onClick={gotoUp}>Signin</Link ></Typography>
  </Grid>
  <ToastContainer/>
</Grid>:<Box justifyContent='center'sx={{ display: 'flex' ,marginTop:30}}>
<CircularProgress sx={{height:200,width:200}} />

  </Box>
    

  )
}
