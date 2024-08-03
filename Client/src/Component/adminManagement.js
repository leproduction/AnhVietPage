import React, { useState, useEffect, useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Table } from 'react-bootstrap';
import axios from 'axios';
import { MyContext } from './MyContext';
import NavBarComponent from './NavBar';
import { useNavigate } from 'react-router-dom';

export default function AdminManagementPage() {
  const { user, setUser, email, setEmail, name, setName, tel, setTel, info, setInfo, password, setPassword, toggle, setToggle, admin, setAdmin } = useContext(MyContext);
  const [users, setUsers] = useState([]);
  const navigate= useNavigate()
const NavigateHome = ()=> {
  setTimeout(()=>{
    navigate('/Home')
  })
}
  useEffect(() => {
    // Fetch users from the server
    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://anhvietapi.vercel.app/users');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
<Container>  {admin===true? (
  <>
      <h1>Registered Users</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Telephone</th>
            <th>Note</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user._id}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.tel}</td>
              <td>{user.note || 'N/A'}</td>
            </tr>
          ))}
        </tbody>
        <Button className='mx-0' onClick={NavigateHome}>Log Out</Button>
      </Table></>):null}

    </Container>

  );
}
