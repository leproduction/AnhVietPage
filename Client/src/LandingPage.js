import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Form, Row } from 'react-bootstrap';
import axios from 'axios';

export default function LandingPage() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [tel, setTel] = useState('');
  const [toggle, setToggle] = useState(true);
  const [info, setInfo] = useState('');
  const [note, setNote] = useState('');
  const [load, setLoad] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();

    try { 
      const response = await axios.post('https://anhvietapi.vercel.app/submit', {
        name,
        email,
        tel,
        note
      });
          setLoad('Loading...');
      if (response.status === 200) {
        console.log('Submitted Successfully All information');
        setInfo('Submitted Successfully');
      } else {
        console.log('Server Error');
        setInfo('Server Error');
      }
    } catch (error) {
      console.log('Submission problems', error);
      setInfo('Submission Problems');
    } finally {
      setLoad('');
    }

    setName('');
    setEmail('');
    setTel('');
    setNote('');
  };
    useEffect(() => {
    axios.defaults.withCredentials = true;
     handleSubmit();
  }, []);


  return (
    toggle ? (
      <Container fluid className='p-1 text-dark top-50 start-0 mx-1'>
        <Container
          className='mx-auto'
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/2341290/pexels-photo-2341290.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <br />
          <Row><h1>{load}</h1></Row>
          <Row><h1>{info}</h1></Row>
          <Form onSubmit={handleSubmit} className='p-4 rounded' variant='outline-dark mx-auto'>
            <Form.Label className='text-dark'>Nếu bạn có bất kỳ câu hỏi nào, vui lòng điền thông tin chi tiết bên dưới, chúng tôi sẽ liên hệ lại với bạn trong thời gian sớm nhất</Form.Label>
            <Form.Group controlId='formName'>
              <Form.Control
                type='text'
                placeholder='Full Name'
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group controlId='formEmail'>
              <Form.Control
                type='email'
                placeholder='example@gmail.com'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group controlId='formTel'>
              <Form.Control
                type='tel'
                pattern='[0-9]{10}'
                placeholder='954-123-4567'
                value={tel}
                onChange={(e) => setTel(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group controlId='formNote'>
              <Form.Control
                type='text'
                placeholder='Ghi chú'
                value={note}
                onChange={(e) => setNote(e.target.value)}
                style={{ height: '5rem' }}
              />
            </Form.Group>
            <Button variant='outline-dark' className='my-2' type='submit'>
              Submit
            </Button>
            <Form.Text className='text-dark mx-1'>
              By submitting, you agree to our policy.
            </Form.Text>
          </Form>
        </Container>
      </Container>
    ) : null
  );
}
