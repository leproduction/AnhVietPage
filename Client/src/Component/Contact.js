import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import {Container, Row, Col } from 'react-bootstrap';
const contact = [ {

    phone: "754-444-6941",
    email: "rmstraps@gmail.com"

}]
export default function ContactEmer() {
  return (

    <Container  id="footer" style={{ background: "rgba(189,195,199, 0.3)" }}  align="center" fluid className='shadow rounded mx-0 my-1 py-3'>
        { contact.map(mycontact => (<Row key={mycontact.phone}>

            <Col ><a className='text-decoration-none' href="tel:754-444-6941"><p className='text-black'>{mycontact.phone}</p></a>
            </Col>

            <Col><a className='text-decoration-none' href="rmstraps2025@gmail.com"><p className='text-dark'>{mycontact.email}</p></a>
            </Col>
        </Row>))}
    </Container>

  )
}

