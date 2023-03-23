import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const LibraryPage = () => {
  // Replace the following array with the actual data fetched from the server
  const libraryItems = [
    { title: 'Sample PDF 1', author: 'Author 1', category: 'Tech', date: '2023-03-23' },
    { title: 'Sample PDF 2', author: 'Author 2', category: 'Sports', date: '2023-03-22' },
    // Add more items as needed
  ];

  return (
    <Container>
      <h1 className="text-center my-4">Library</h1>
      <Row>
        {libraryItems.map((item, index) => (
          <Col xs={12} sm={6} md={4} lg={3} key={index}>
            <Card className="my-2">
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>
                  Author: {item.author}<br />
                  Category: {item.category}<br />
                  Date: {item.date}
                </Card.Text>
                <Button variant="primary">View PDF</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default LibraryPage;
