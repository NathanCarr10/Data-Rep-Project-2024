import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import SearchBar from './SearchBar';
import {Link} from "react-router-dom"

function NavScroll() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand href="#">Navbar</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={Link} to ="/Content">Home</Nav.Link>
            <Nav.Link as={Link} to ="/Top-Rated">Top Rated Games</Nav.Link>
            <NavDropdown title="Library" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">My Games</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Wishlist
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Completed Games
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="https://store.playstation.com/en-ie/pages/latest">
              Playstation Store
            </Nav.Link>
            <Nav.Link href="https://www.xbox.com/en-GB/microsoft-store?msockid=3ed76640c8886dce31c272b5c9f76c3a">
              Xbox Marketplace
            </Nav.Link>
            <Nav.Link href="https://store.steampowered.com/games/">
              Steam 
            </Nav.Link>
          </Nav>
          <SearchBar />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScroll;