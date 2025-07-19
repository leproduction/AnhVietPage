import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, Container, Row, Col, Form } from 'react-bootstrap';
import NavBarComponent from './Component/NavBar.js';
import FooterPage from './Component/Footer.js';
import ProgressiveBar from './Component/ProgressBar.js';
import ContactEmer from './Component/Contact.js';
import {Link} from 'react-router-dom'

import { motion } from 'framer-motion';
import LandingPage from './LandingPage.js';
import ReviewPage from './Component/Review.js';
import Photos from './Component/NailsSearch.js';
import PeopleCount from './Component/PeopleCount.js';
function Home() {

  return (
    <Container fluid align="center" className=" flex shadow px-1 py-1 rounded " style={{ background: 'rgba(189,195,199, 0.8)' }}>
      <Row>
        <NavBarComponent />
      </Row>
      <Row>
        <h2>RM-Style Custom Straps – Premium Quality for All Watches</h2>
  <p>Upgrade your watch with our high-quality RM-style straps, <strong>custom-made to fit all branded and unbranded watches</strong>. Whether you're enhancing a luxury timepiece or elevating a daily wear watch, these straps deliver both style and durability.</p>

  <ul>
    <li><strong>Custom Fit:</strong> Made-to-order for your specific watch model and lug size.</li>
    <li><strong>Premium Materials:</strong> Inspired by Richard Mille aesthetics – durable, lightweight, and built for comfort.</li>
    <li><strong>Production Lead Time:</strong> 4–6 business days.</li>
    <li><strong>Shipping:</strong> Standard international shipping (30 days).</li>
    <li><strong>No Returns or Refunds:</strong> All sales are final, including straps with cosmetic defects. Please double-check sizing and specifications before ordering.</li>
  </ul>

  <p>Have questions? <strong>Contact us</strong> before placing your order — we're happy to assist.</p>

      </Row>

  
      <Row style={{ background: 'rgba(189,195,199, 0.3)' }} sm={1} md={1} className=" shadow mx-0 d-flex justify-content-start align-items-center rounded p-3 gap-1">
      <Card style={{ width: '18rem' }} className='mx-auto p-1'>
      <Card.Img variant="top" src="https://images.pexels.com/photos/14021260/pexels-photo-14021260.jpeg?auto=compress&cs=tinysrgb&w=400" />
      <Card.Body>
        <Card.Title> RM Velcro/SailCloth Strap </Card.Title>
        <Card.Text>
       Check out to Expedite Strap Making Process
        </Card.Text>
        <a href='https://buy.stripe.com/dRmcN54BbgTFcsI3sX53O08'><Button variant="primary"><span style={{ textDecoration: 'line-through' }} className='bg-dark'>$250</span>$189</Button></a>
      </Card.Body>
      </Card>

      </Row>

<PeopleCount/>
      <Container fluid className="d-flex justify-content-center align-items-center flex-wrap my-2">


      </Container>

      

      
    
      <ReviewPage/>



    <Container fluid className='p-2 shadow'>

</Container>
  <LandingPage/>
   <ContactEmer />

       <FooterPage />
  
    </Container>
  );
}

export default Home;
