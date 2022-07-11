import React from 'react'
import { BrowserRouter, Route, useNavigate,Navigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { Collapse,Nav,NavLink,
    UncontrolledDropdown,
    NavbarText,
     DropdownToggle, Navbar, NavbarBrand, 
     NavbarToggler, 
     NavItem,DropdownItem,DropdownMenu, Button } from 'reactstrap'
import Signup from './Signup';

export default function Navbr() {
    const email =localStorage.getItem("email");
    const password = localStorage.getItem("password");
  const navigate = useNavigate();
    function handleOut(){
       
        localStorage.clear();
        toast.success("Logged Out");
        setTimeout(() => {
          navigate("/Signup",{replace:true})
        }, 1000);
      

    }
  return (
    <div className='container'>
         <Navbar
    color="light"
    expand="md"
    light
  >
        {
            email&&password?<>
              <NavbarBrand href="/Home">
                Home
             </NavbarBrand>
             <NavbarBrand href="/Start">
                Start
             </NavbarBrand>
             <Collapse navbar>
      <Nav
        className="me-auto"
        navbar
      >
        <NavItem>
            
         
        </NavItem>
        <NavItem>
          <Button onClick={handleOut}>
            logout
          </Button>
        </NavItem>
      </Nav>
      <NavbarText>
        {email}
      </NavbarText>
    </Collapse>
            </>:

    <>
     
    </>
        }
 
  </Navbar>
  <ToastContainer/>
</div>
  )
}
