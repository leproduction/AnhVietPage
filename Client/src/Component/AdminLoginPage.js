import React, { useContext, useState } from 'react';
import { Navbar, Nav, NavDropdown, Container, Image, Row, Col, Button, Modal, Form, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nails from './AV-interpreters.png';
import { MyContext } from './MyContext';

import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import AdminManagementPage from './adminManagement';

export default function AdminLoginPage() {
  const {user, setUser, email, setEmail, name, setName, tel, setTel, info, setInfo, password,setPassword, toggle, setToggle, admin, setAdmin} = useContext(MyContext)
  const [isShowed, setIsShowed] = useState(false)
  const handleClosed =()=> { setIsShowed(false)}
  const handleOpened= ()=> { setIsShowed(true)}

const navigate = useNavigate();
const logOutButton=()=>{
  setToggle(false)
}
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://ap-ifor-anh-viet-p-age.vercel.app/admin", {
        email,
        password,

      });
      if (response.status === 200) {
        setInfo("Sign in successfully");

        setTimeout(()=>{
        setAdmin(true);
          setToggle(true);
          setPassword('')
          setEmail('')
          setInfo('')
          handleClosed();
        navigate('/management')
        },2000)

      } else {
        alert("Error");
      }
    } catch (error) {
      alert(error);
    }
  };
  return (
    <div>
      <Navbar style={{ background: "rgba(189,195,199, 0.2)" }} expand="lg" className="shadow rounded w-100">
        <Container>
          <Navbar.Brand href="#home" className="d-flex align-items-center">

              <Image
              src={Nails}
              alt="Nails and Lashes Logo"
              roundedCircle
              className="img-fluid"
              style={{ maxWidth: '60px', marginRight: '10px' }} // Ensure image does not stretch disproportionately
            />

          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"  />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="Menu" id="basic-nav-dropdown">
                <NavDropdown.Item href="#">Home</NavDropdown.Item>
                <NavDropdown.Item href="#">About</NavDropdown.Item>
                <NavDropdown.Item href="#footer">Contact</NavDropdown.Item>
                <NavDropdown.Item href="#">Career</NavDropdown.Item>
                <NavDropdown.Item href="#"><Button onClick={logOutButton}>Log Out</Button></NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        <Row>

          <Modal show={isShowed} onHide={handleClosed}>
          <Row className='mx-0'>{info}</Row>
        <Modal.Header closeButton>

          <Modal.Title>Sign In</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form onSubmit={handleSubmit} className=' p-4 rounded' variant="outline-dark mx-auton">
        <Form.Label className='text-dark'>Sign In</Form.Label>

        <Form.Group controlId="formEmail">
          <Form.Control type="email" placeholder="example@gmail.com" value={email} id="email3" onChange={(e) => setEmail(e.target.value)} required />
        </Form.Group>

        <Form.Group controlId="text">
          <Form.Control type="password" placeholder="password" value={password} id="password3" onChange={(e) => setPassword(e.target.value)} />
        </Form.Group>
        <Button variant="outline-dark" className='my-2' type="submit">Submit</Button>

        <Form.Text className="text-dark mx-1">
          By submitting, you agree to our policy.
        </Form.Text>
      </Form>



        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClosed}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClosed}>
            Save Changes
          </Button>
          <Link to='/Signup'><Button variant='none'>Sign Up</Button></Link>
        </Modal.Footer>
      </Modal>
        </Row>
        {!toggle?(
          <>
        <Button variant='none'onClick={handleOpened}  >Sign In</Button>
        <Link to='/Signup'><Button variant='none'>Sign Up</Button></Link>
       </>):(<>  <Image src={user.image}

alt="Icon"
roundedCircle
className='img-fluid border border-dark' // Use 'img-fluid' for responsive image scaling
style={{ maxWidth: '50px', maxHeight:"50px", marginRight: '10px' }} // Adjust size and spacing as needed

>
{console.log(user.name)}
</Image>Hello User</>)}

        </Container>
      </Navbar>
    </div>
  );
}
