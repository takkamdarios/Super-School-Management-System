import React from 'react';
import RegisterForm from '../components/RegisterForm';
import { Container, Row, Col } from 'react-bootstrap';

const RegisterPage = () => {
  return (
    <Container className="vh-100 d-flex align-items-center">
      <Row className="w-100">
        <Col xs={12} sm={8} md={6} lg={4} className="mx-auto">
          <h1 className="text-center mb-4">Create a new account</h1>
          <RegisterForm />
        </Col>
      </Row>
    </Container>
  );
};

export default RegisterPage;
