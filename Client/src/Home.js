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
        <ol>
          <label>Phiên dịch tiếng Anh sang tiếng Việt và tiếng Việt sang tiếng Anh</label>
          <li>Cuộc hẹn với bác sĩ</li>
<li>Cuộc hẹn luật sư</li>
<li>Tuyển sinh vào trường</li>

<li>Phiên dịch Các tài liệu</li>
<li>Thuê nhà</li>
<li>Du lịch</li>
<li>Hoàn tiền, Trả lại, Khiếu nại</li>
<li>và các dịch vụ khác</li></ol>
      </Row>
<<<<<<< HEAD
=======
       
>>>>>>> origin/main
      <Row style={{ background: 'rgba(189,195,199, 0.3)' }} sm={1} md={1} className=" shadow mx-0 d-flex justify-content-start align-items-center rounded p-3 gap-1">
     <Card style={{ width: '18rem' }} className='mx-auto p-1'>
      <Card.Img variant="top" src="https://images.pexels.com/photos/6346795/pexels-photo-6346795.jpeg?auto=compress&cs=tinysrgb&w=400"/>
      <Card.Body>
        <Card.Title> 1 Tháng Thành Viên </Card.Title>
        <Card.Text>
<<<<<<< HEAD
        Thành viên được miễn phí dịch vụ phiên dịch  trong tháng đăng ký. Phiên dịch chỉ diễn ra trong giờ làm việc của chúng tôi ngoại trừ các cuộc hẹn trước.
        </Card.Text>
        <a  href='https://buy.stripe.com/9AQcQah1Jbvi5Ta149'><Button variant="primary"><span style={{ textDecoration: 'line-through' }} className='bg-dark'>$199</span> Free </Button></a>
=======
        Thành viên được miễn phí dịch vụ phiên dịch 5 lần với số phút và giờ không giới hạn trong tháng đăng ký. Phiên dịch chỉ diễn ra trong giờ làm việc của chúng tôi ngoại trừ các cuộc hẹn trước.
        </Card.Text>
        <a href='https://buy.stripe.com/9AQcQah1Jbvi5Ta149'><Button><span style={{ textDecoration: 'line-through' }} className='bg-dark'>$199</span> FREE </Button></a>
>>>>>>> origin/main
      </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }} className='mx-auto p-1'>
      <Card.Img variant="top" src="https://images.pexels.com/photos/6531913/pexels-photo-6531913.jpeg?auto=compress&cs=tinysrgb&w=400" />
      <Card.Body>
        <Card.Title> 6 Tháng Thành Viên </Card.Title>
        <Card.Text>
        Thành viên được nhận dịch vụ phiên dịch miễn phí với số phút và giờ không giới hạn trong thời gian đăng ký 6 tháng. Phiên dịch chỉ diễn ra trong giờ làm việc của chúng tôi ngoại trừ các cuộc hẹn trước
        </Card.Text>
<<<<<<< HEAD
        <a href='https://buy.stripe.com/fZe8zU8vd6aYftKaEH'><Button variant="primary"><span style={{ textDecoration: 'line-through' }} className='bg-dark'>$599</span> $399</Button></a>
=======
        <a href='https://buy.stripe.com/fZe8zU8vd6aYftKaEH'><Button variant="primary"><span style={{ textDecoration: 'line-through' }} className='bg-dark'>$599</span>$399</Button></a>
>>>>>>> origin/main
      </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }} className='mx-auto p-1'>
      <Card.Img variant="top" src="https://images.pexels.com/photos/14021260/pexels-photo-14021260.jpeg?auto=compress&cs=tinysrgb&w=400" />
      <Card.Body>
        <Card.Title> 1 năm  Thành Viên </Card.Title>
        <Card.Text>
        Thành viên được nhận dịch vụ phiên dịch miễn phí với số phút và giờ không giới hạn trong thời gian đăng ký 1 năm. Phiên dịch chỉ diễn ra trong giờ làm việc của chúng tôi ngoại trừ các cuộc hẹn trước.
        </Card.Text>
        <a href='https://buy.stripe.com/aEUaI26n5are0yQbIK'><Button variant="primary"><span style={{ textDecoration: 'line-through' }} className='bg-dark'>$1200</span>$899</Button></a>
      </Card.Body>
      </Card>

      </Row>

<PeopleCount/>
      <Container fluid className="d-flex justify-content-center align-items-center flex-wrap my-2">
<<<<<<< HEAD

      </Container>

      <ProgressiveBar />

=======
       <ProgressiveBar />
      </Container>

 
      
>>>>>>> origin/main
      <LandingPage/>
      <ReviewPage/>


    <Container fluid className='p-2 shadow d-flex justify-content-center align-items-center text-center'>

     <Row sm={1} md={1} className='mx-auto'>
      <Row className='col-md-12'><Col> Business Hours </Col></Row>
<<<<<<< HEAD
      <Row className='col-md-12'><Col>Monday	</Col><Col>9:00 A.M- 5 P.M</Col></Row>
      <Row className='col-md-12'><Col>Tuesday</Col><Col>	9:00 A.M- 5 P.M</Col>
=======
      <Row className='col-md-12'><Col>Monday	</Col><Col>By Appoinment</Col></Row>
      <Row className='col-md-12'><Col>Tuesday</Col><Col>By Appoinment</Col>
>>>>>>> origin/main




</Row>
<<<<<<< HEAD
      <Row className='col-md-12'><Col>Wednesday</Col><Col>	9:00 A.M- 5 P.M</Col></Row>
      <Row className='col-md-12'><Col>Thursday</Col>	<Col>9:00 A.M- 5 P.M</Col></Row>
      <Row className='col-md-12'><Col>Friday	</Col><Col>9:00 A.M- 5 P.M</Col></Row>
=======
      <Row className='col-md-12'><Col>Wednesday</Col><Col>By Appoinment</Col></Row>
      <Row className='col-md-12'><Col>Thursday</Col>	<Col>By Appoinment</Col></Row>
      <Row className='col-md-12'><Col>Friday	</Col><Col>By Appoinment</Col></Row>
>>>>>>> origin/main
      <Row className='col-md-12'><Col>Saturday</Col>	<Col>By Appoinment</Col></Row>
      <Row className='col-md-12'><Col>Sunday	</Col><Col>By Appoinment</Col></Row>
     </Row >
</Container>
    <Container fluid className='p-2 shadow'>

</Container>
  <ContactEmer />
       <FooterPage />

    </Container>
  );
}

export default Home;
