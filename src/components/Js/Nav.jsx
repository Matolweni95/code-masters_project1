import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../css/Nav.css'

const Navi = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className='w-100 p-3 p-sm-5'>
    <Container fluid className='p-0'>
      <Navbar.Brand href="#home" className='logo'>Logo</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />

      <Navbar.Collapse id="responsive-navbar-nav" className='justify-content-end'>
        <Nav className='ml-auto '>
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#about">About Us</Nav.Link>
          <Nav.Link href="#blog">Blog</Nav.Link>
          <Nav.Link href="#gallery">Gallery</Nav.Link>
          <Nav.Link href="#contact">Contact Us</Nav.Link>
          <Nav.Link href="#aps">APS Calculator</Nav.Link>
          <Nav.Link href="#support" className='support-link'>Support Us</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container> 
  </Navbar>
  );
}

export default Navi;