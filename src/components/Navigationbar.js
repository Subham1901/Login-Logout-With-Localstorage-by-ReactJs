import { Box, CircularProgress } from '@mui/material';
import React, { useState } from 'react'
import { Container, Navbar,NavbarBrand,Link,Nav,NavDropdown } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

export default function Navigationbar() {
    const email =localStorage.getItem("email");
    const password = localStorage.getItem("password");
    const [load,setLoad] = useState(true);

  const navigate = useNavigate();

    function handleOut(){
      localStorage.clear();
      setLoad(false);
        setTimeout(() => {
          toast.success("Logged out");
          navigate("/Signup");
          setLoad(true);
        }, 1000);
    }
  return (
    load?
    <div>
 {
    email&&password?
  
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="/Home">CDX89</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="/Home">Home</Nav.Link>
        <Nav.Link href="/Start">About</Nav.Link>
        
      </Nav>
      <Nav>
      <NavDropdown title="Profile" id="collasible-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">{email}</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item onClick={handleOut}>Logout</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>
 :<> </>
  
  }
  
   <ToastContainer/>
  </div>:<Box justifyContent='center'sx={{ display: 'flex' ,marginTop:30}}>
  <CircularProgress sx={{height:200,width:200}} />
  <ToastContainer/>
    </Box>
  )
}
