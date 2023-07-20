import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@mui/material';
import { useEffect, useState } from 'react';
import { logoutuser } from '../reducers/loginreducer/loginreducer';

function ColorSchemesExample() {
const navigate=useNavigate()
  const dispatch=useDispatch()
  useEffect(()=>{
    localStorage.setItem("idauth","false")
  },[])

const isauth=localStorage.getItem("isauth")
  const data=useSelector((state)=>state.Favorite.movies)
  // const isauth =localStorage.getItem("isauth")
  // console.log(isauth)
  // const isauth=useSelector((state)=>state.login)
  // const isnotauth=useSelector((state)=>state.logoutuser)
  const handlelogout=()=>{

    localStorage.setItem("isauth","false")
    navigate("/")
// dispatch(logoutuser())
  }
const ddd=Array.from(data)

  return (

    <Navbar variant="dark" collapseOnSelect expand="lg" >
    <Container fluid className='text-center'>
    <Link to="/" >
  <Navbar.Brand className='fw-bolder'  >MOVIE DB  </Navbar.Brand>

  </Link>      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="ms-lg-auto me-lg-auto">
          <NavDropdown className='fw-bold mx-lg-2 text-center'  title="MOVIES" id="nav-dropdown">
<NavDropdown.Item className='fw-bold  text-center  ' >
<Link to ="movies" className='fw-bold  text-center  ' > 
POPULAR
</Link>
</NavDropdown.Item>
<NavDropdown.Item className='fw-bold  text-center  ' >
<Link to ="topRated" className=' fw-bold  text-center  ' > 
TOP RATED
</Link>
</NavDropdown.Item>
            </NavDropdown>
          <NavDropdown className='fw-bold dropitem    mx-lg-2'  title="TV" id="nav-dropdown ">
<NavDropdown.Item className=' text-center' >
<Link to ="TvShows" className='fw-bold  text-center  ' > 
POPULAR
</Link>
</NavDropdown.Item>
<NavDropdown.Item className='fw-bold  text-center  ' >
<Link to ="topRatedTv" className=' fw-bold  text-center  ' > 
TOP RATED
</Link>
</NavDropdown.Item>
            </NavDropdown>
{     isauth ==="true" &&        <Link to="favorite"   >
            <Nav.Item  className=' fw-bold  mx-lg-2 p-2 text-center  '  >
       FAVORITE {ddd.length}
            </Nav.Item>
            </Link>}

 
{   isauth ==="false" &&  <Link to="login"   >
            <Nav.Item  className=' fw-bold  mx-lg-2 p-2 text-center  '  >
     Login 
            </Nav.Item>
            </Link>}

{   isauth ==="false" &&      <Link to="signup"   >
            <Nav.Item  className=' fw-bold  mx-lg-2 p-2 text-center  '  >
 Sign up
            </Nav.Item>
            </Link>}
{      isauth ==="true" &&   <Button onClick={handlelogout} variant="outline-success">log out</Button>
}          
          </Nav>

      </Navbar.Collapse>
    </Container>
  </Navbar>



   

  );
}

export default ColorSchemesExample;