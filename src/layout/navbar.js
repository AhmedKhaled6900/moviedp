import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';

function ColorSchemesExample() {
  return (
<Navbar className='p-3' bg="dark" variant="dark">
  <Link to="/" >
  <Navbar.Brand className='fw-bolder'  >MOVIE DB  </Navbar.Brand>

  </Link>
          <Nav className="ms-auto">
          <NavDropdown className='fw-bold'  title="MOVIES" id="nav-dropdown">
<NavDropdown.Item >
<Link to ="movies" className='fw-bold  text-center  ' > 
POPULAR
</Link>
</NavDropdown.Item>
<NavDropdown.Item >
<Link to ="topRated" className=' fw-bold  text-center  ' > 
TOP RATED
</Link>
</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>

      </Navbar>

   

  );
}

export default ColorSchemesExample;