import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../css/Nav.css'

const Navi = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className='w-100'>
    <Container fluid className='p-0'>
      <Navbar.Brand href="#home" className='logo'>Logo</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />

      <Navbar.Collapse id="responsive-navbar-nav" className='justify-content-end'>
        <Nav className='ml-auto'>
          <Nav.Link href="#features">Home</Nav.Link>
          <Nav.Link href="#features">About Us</Nav.Link>
          <Nav.Link href="#features">Blog</Nav.Link>
          <Nav.Link href="#features">Gallery</Nav.Link>
          <Nav.Link href="#features">Contact Us</Nav.Link>
          <Nav.Link href="#features">APS Calculator</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}

export default Navi;