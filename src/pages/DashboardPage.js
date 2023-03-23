import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const DashboardPage = () => {
  return (
    <Container>
      <h1 className="text-center my-4">Dashboard</h1>
      <Row>
        <Col xs={12} sm={6} md={4} lg={3}>
          <Card className="my-2">
            <Card.Body>
              <Card.Title>Classes</Card.Title>
              <Card.Text>Manage classes and view schedules.</Card.Text>
              <Button variant="primary">Go to Classes</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={4} lg={3}>
          <Card className="my-2">
            <Card.Body>
              <Card.Title>Students</Card.Title>
              <Card.Text>View and manage student data.</Card.Text>
              <Button variant="primary">Go to Students</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={4} lg={3}>
          <Card className="my-2">
            <Card.Body>
              <Card.Title>Staff</Card.Title>
              <Card.Text>View and manage staff data.</Card.Text>
              <Button variant="primary">Go to Staff</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={4} lg={3}>
          <Card className="my-2">
            <Card.Body>
              <Card.Title>Calendar</Card.Title>
              <Card.Text>View and manage school events and schedules.</Card.Text>
              <Button variant="primary">Go to Calendar</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default DashboardPage;
