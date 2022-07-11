import React, { useRef, useState } from 'react'
import { Button, Grid, TextField,CircularProgress,LinearProgress } from '@mui/material'
import  { Navigate, useNavigate } from 'react-router-dom'
import { WindowSharp } from '@mui/icons-material';
import { toast, ToastContainer } from 'react-toastify';
import axios from 'axios';
import { Link, Typography } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import Box from '@mui/material/Box';
export default function Signup() {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [token,setToken]=useState('');
    const [load,setLoad] = useState(true);
    const navigate = useNavigate();
  function handleLogin() {

      setLoad(false);
      setTimeout(() => {
        axios.get(`http://localhost:8080/RestAPI/Login?email=${email}&password=${password}`)
      .then((res)=>{
        setLoad(true);
        console.log(res);
        if (res.data.length) {
          console.log(res.data);
          toast.success("Logged-in");
          localStorage.setItem("email",email);
        localStorage.setItem("password",password);
        console.log(res.data[0].token);
        localStorage.setItem("token",res.data[0].token);
        
        navigate('/', { replace: true });
        }else toast.error("Please enter valid data");
      },(error)=>{
        setLoad(true);
        console.log(error);
          })
      }, 1000);

        // if (email==="admin@gmail.com"&&password==="admin") {
        //     localStorage.setItem("email",email);
        // localStorage.setItem("password",password);
        // toast.success("Logged in")
        // navigate('/', { replace: true });
        // }else{
        //   toast.error("Please enter valid data")
        // }
        
    }
    function gotoUp(){
     
      setLoad(false);
      setTimeout(() => {
        navigate('/Register', { replace: true });
      }, 500);
    }

  return (
    load?
    <Grid container spacing={7}
    sx={{width:900,height:500,margin:'auto', boxShadow:3,padding:1}}
    direction='row'
    
    >
     
  <Grid item xs={6}>
  {/* <LoginIcon sx={{height:150,width:200}}/> */}

  <img src='login.png'
   style={{height:400,width:400}}>
  </img>
  </Grid>
  <Grid item xs={4} sx={{marginTop:5}}>
  <Typography variant='h3' sx={{fontWeight:600,fontFamily:'Rubik',padding:3}}>Login</Typography>
  <TextField required sx={{width:200}}  id="input-with-sx" label="Email" variant="standard"onChange={(e)=>setEmail(e.target.value)} />
<TextField required sx={{width:200}}  id="input-with-sx" label="Password" type='password' variant="standard" onChange={(e)=>setPassword(e.target.value)}/>
<Button sx={{marginTop:3,width:200}} onClick={handleLogin} variant="contained">Login</Button>
<Typography sx={{marginTop:3}} >New User!!&nbsp;&nbsp;<Link onClick={gotoUp}>Create an account</Link ></Typography>
  </Grid>
  <ToastContainer/>
</Grid>:<><Box justifyContent='center'sx={{ display: 'flex' ,marginTop:30}}>
      <CircularProgress sx={{height:200,width:200}} />
    
    </Box>
   
 </>
  )
}
