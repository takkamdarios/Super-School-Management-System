import React from 'react';
import LoginForm from '../components/LoginForm';
import { Container, Row, Col } from 'react-bootstrap';

const LoginPage = () => {
  return (
    <Container className="vh-100 d-flex align-items-center">
      <Row className="w-100">
        <Col xs={12} sm={8} md={6} lg={4} className="mx-auto">
          <h1 className="text-center mb-4">Welcome to the School Management System</h1>
          <LoginForm />
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
