import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

function BasicExample() {
    const [ email, setEmail ] = useState('');
    const [ senha, setSenha ] = useState('');

    const addUser = () => {
        if(email.trim() && senha.trim() !== ''){
            setEmail('');
            setSenha('');
        }
    };

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="password" placeholder="Password" onChange={(e) => setSenha(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit" onSubmit={addUser}>
        <Link to={"/app"}>Submit</Link>
      </Button>
    </Form>
  );
}

export default BasicExample;