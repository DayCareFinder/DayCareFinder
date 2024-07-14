import React from 'react';
import { Form, Button, Container,Row ,Col } from 'react-bootstrap';

// const bg = [{
//   background: rgb(34,193,195),
// background: linear-gradient(0deg, rgba(34,193,195,1) 14%, rgba(47,15,163,1) 83%)
// }]

const Login = () => {
  return (
    <Container className="mt-5">

<Row>
<Col md={6}>

      <h2 style={{padding:'30px',color:'blue'}}>Login</h2>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button style={{marginTop: '3rem'}} className='position-relative bottom-0 start-50 translate-middle' variant="outline-primary" type="submit">
          Log in
        </Button>
      </Form>
</Col>

<Col md={5}>
<img style={{marginLeft:'5rem',height:'500px'}} src={process.env.PUBLIC_URL+ '/login.png'} alt='login' />

</Col>
  </Row>

    </Container>
  );
}

export default Login;
