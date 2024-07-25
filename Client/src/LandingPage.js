import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Form, Row } from 'react-bootstrap';
import axios from 'axios';

export default function LandingPage() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [tel, setTel] = useState('');
<<<<<<< HEAD
  const [toggle, setToggle]= useState(true);
  const [info, setInfo]= useState("");
  const [note, setNote] = useState('')
=======
  const [toggle, setToggle] = useState(true);
  const [info, setInfo] = useState("");
  const [note, setNote] = useState('');
>>>>>>> origin/main

  useEffect(() => {
    axios.defaults.withCredentials = true;
  }, []);
<<<<<<< HEAD
=======

>>>>>>> origin/main
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
<<<<<<< HEAD
      const response = await axios.post('http://localhost:3001/submit', {
=======
      const response = await axios.post('https://anh-viet-page-gx18.vercel.app/submit', {
>>>>>>> origin/main
        name,
        email,
        tel,
        note
      });

      if (response.status === 200) {
<<<<<<< HEAD
        console.log("Submitted Successfully All information");
        setInfo("Submitted Successfully");

      } else {
        console.log("server Error");
        setInfo("Server Error");
      }
    } catch (error) {
      console.log("submission problems", error);
      setInfo("Submission Problems");
    }
=======
        setInfo("Submitted Successfully");
      } else {
        setInfo("Server Error");
      }
    } catch (error) {
      console.error("Submission problems", error);
      setInfo("Submission Problems");
    }

>>>>>>> origin/main
    setName('');
    setEmail('');
    setTel('');
    setNote('');
  };

  return (
<<<<<<< HEAD
    toggle?
    <Container fluid className='p-1 text-dark  top-50 start-0 mx-1'>    <Container className='mx-auto' style={{backgroundImage:`url('https://images.pexels.com/photos/2341290/pexels-photo-2341290.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`}}>

  <br></br>
    <Row><h1>{info}</h1></Row>
      <Form onSubmit={handleSubmit} className=' p-4 rounded' variant="outline-dark mx-auton">
        <Form.Label className='text-dark'>Nếu bạn có bất kỳ câu hỏi nào, vui lòng điền thông tin chi tiết bên dưới, chúng tôi sẽ liên hệ lại với bạn trong thời gian sớm nhất</Form.Label>
        <Form.Group controlId="formName">
          <Form.Control type="text" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} required />
        </Form.Group>
        <Form.Group controlId="formEmail">
          <Form.Control type="email" placeholder="example@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </Form.Group>
        <Form.Group controlId="formTel">
          <Form.Control type="tel" pattern='[0-9]{10}' placeholder="954-123-4567" value={tel} onChange={(e) => setTel(e.target.value)} required />
        </Form.Group>
        <Form.Group controlId="text">
          <Form.Control type="text" placeholder="Ghi chú" value={note} onChange={(e) => setNote(e.target.value)} style={{height:"5rem"}} />
        </Form.Group>
        <Button variant="outline-dark" className='my-2' type="submit">Submit</Button>

        <Form.Text className="text-dark mx-1">
          By submitting, you agree to our policy.
        </Form.Text>
      </Form>

  </Container></Container>:null

=======
    toggle ? (
      <Container fluid className='p-1 text-dark top-50 start-0 mx-1'>
        <Container className='mx-auto' style={{ backgroundImage: `url('https://images.pexels.com/photos/2341290/pexels-photo-2341290.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')` }}>
          <br />
          <Row><h1>{info}</h1></Row>
          <Form onSubmit={handleSubmit} className='p-4 rounded' variant="outline-dark mx-auton">
            <Form.Label className='text-dark'>Nếu bạn có bất kỳ câu hỏi nào, vui lòng điền thông tin chi tiết bên dưới, chúng tôi sẽ liên hệ lại với bạn trong thời gian sớm nhất</Form.Label>
            <Form.Group controlId="formName">
              <Form.Control type="text" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} required />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Control type="email" placeholder="example@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </Form.Group>
            <Form.Group controlId="formTel">
              <Form.Control type="tel" pattern='[0-9]{10}' placeholder="954-123-4567" value={tel} onChange={(e) => setTel(e.target.value)} required />
            </Form.Group>
            <Form.Group controlId="text">
              <Form.Control type="text" placeholder="Ghi chú" value={note} onChange={(e) => setNote(e.target.value)} style={{ height: "5rem" }} />
            </Form.Group>
            <Button variant="outline-dark" className='my-2' type="submit">Submit</Button>
            <Form.Text className="text-dark mx-1">
              By submitting, you agree to our policy.
            </Form.Text>
          </Form>
        </Container>
      </Container>
    ) : null
>>>>>>> origin/main
  );
}
