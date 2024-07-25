import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBarComponent from './NavBar'
import FooterPage from './Footer'
import { Container, Row, Col } from 'react-bootstrap'
import ContactEmer from './Contact'
export default function BackEnd() {
  return (
    <div>
      <NavBarComponent/>

    <Container className='w-100 h-100 p-5 d-flex justify-content-center'>
<label>Customer information</label>
<Row>
  <Col></Col>
</Row>
    </Container>
    <ContactEmer/>
    <FooterPage/>
    </div>
  )
}
