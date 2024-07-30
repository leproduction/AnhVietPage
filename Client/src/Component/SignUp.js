import React, { useState, useEffect, useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Form, Row } from 'react-bootstrap';
import axios from 'axios';
import { MyContext } from './MyContext';
import { useNavigate } from 'react-router-dom';

export default function SignUpPage() {
  const { user, setUser, email, setEmail, name, setName, tel, setTel, info, setInfo, password, setPassword, toggle, setToggle } = useContext(MyContext);
 const navigate=useNavigate()
  useEffect(() => {
    axios.defaults.withCredentials = true;
      handleSubmit();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://anhvietapi.vercel.app/signup', {
        name,
        email,
        tel,
        password,
      });

      if (response.status === 200) {
        console.log("Submitted Successfully All information");
        setInfo("Submitted Successfully");
        setTimeout(() => {
          navigate('/home')
        }, 2000);
      } else {
        console.log("Server Error");
        setInfo("Server Error");
        console.log("Response:", response);
      }
    } catch (error) {
      console.error("Submission problems", error);
      setInfo("Submission Problems");
    }

    // Reset form fields
    setName('');
    setEmail('');
    setTel('');
    setPassword('');
  };

  return (

    <Container fluid className='p-1 text-dark top-50 start-0 mx-1'>
      <Container className='mx-auto' style={{ backgroundImage: `url('https://images.pexels.com/photos/2341290/pexels-photo-2341290.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')` }}>
        <br />
        <Row><h1>{info}</h1></Row>
        <Form onSubmit={handleSubmit} className='p-4 rounded' variant="outline-dark mx-auton">
          <Form.Label className='text-dark'>
            Nếu bạn có bất kỳ câu hỏi nào, vui lòng điền thông tin chi tiết bên dưới, chúng tôi sẽ liên hệ lại với bạn trong thời gian sớm nhất
          </Form.Label>
          <Form.Group controlId="formName">
            <Form.Control
              type="text"
            id="text2"
            alt="current label"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group controlId="formEmail">
            <Form.Control
              type="email"
              id="email2"
              alt="current email"
              placeholder="example@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group controlId="formTel">
            <Form.Control
              type="tel"
              phone="phone2"
              alt="current phone"
              pattern="[0-9]{10}"
              placeholder="954-123-4567"
              value={tel}
              onChange={(e) => setTel(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group controlId="text">
            <Form.Control
              type="password"
              id="current-password2"
              alt="current password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Button variant="outline-dark" id="submit2" className='my-2' type="submit">Submit</Button>
          <Form.Text className="text-dark mx-1">
            By submitting, you agree to our policy.
          </Form.Text>
        </Form>
      </Container>
    </Container>
  );
}
