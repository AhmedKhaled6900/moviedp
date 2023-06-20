import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useSelector } from 'react-redux';

function ColorSchemesExample() {

  const data=useSelector((state)=>state.Favorite.movies)

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
            <Link to="favorite"   >

            <Nav.Item  className=' fw-bold  mx-lg-2 p-2 text-center  '  >
       FAVORITE {ddd.length}
            </Nav.Item>

            
            </Link>
          
          </Nav>

      </Navbar.Collapse>
    </Container>
  </Navbar>


// {/* <Navbar className='p-3' bg="dark" variant="dark">
  // <Link to="/" >
  // <Navbar.Brand className='fw-bolder'  >MOVIE DB  </Navbar.Brand>

  // </Link>
//           <Nav className="ms-lg-auto me-lg-auto">
//           <NavDropdown className='fw-bold mx-lg-2'  title="MOVIES" id="nav-dropdown">
// <NavDropdown.Item >
// <Link to ="movies" className='fw-bold  text-center  ' > 
// POPULAR
// </Link>
// </NavDropdown.Item>
// <NavDropdown.Item >
// <Link to ="topRated" className=' fw-bold  text-center  ' > 
// TOP RATED
// </Link>
// </NavDropdown.Item>
//             </NavDropdown>
//           <NavDropdown className='fw-bold dropitem   mx-lg-2'  title="TV" id="nav-dropdown ">
// <NavDropdown.Item className='' >
// <Link to ="TvShows" className='fw-bold  text-center  ' > 
// POPULAR
// </Link>
// </NavDropdown.Item>
// <NavDropdown.Item >
// <Link to ="topRatedTv" className=' fw-bold  text-center  ' > 
// TOP RATED
// </Link>
// </NavDropdown.Item>
//             </NavDropdown>
//             <Link to="favorite"   >

//             <Nav.Item  className=' fw-bold  mx-lg-2 p-2 text-center  '  >
//        FAVORITE {ddd.length}
//             </Nav.Item>

            
//             </Link>
          
//           </Nav>

//       </Navbar> */}

   

  );
}

export default ColorSchemesExample;