import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const BlogPage = () => {
  // Replace the following array with the actual data fetched from the server
  const blogPosts = [
    { title: 'Blog Post 1', author: 'Author 1', content: 'Sample content...', date: '2023-03-23' },
    { title: 'Blog Post 2', author: 'Author 2', content: 'Sample content...', date: '2023-03-22' },
    // Add more blog posts as needed
  ];

  return (
    <Container>
      <h1 className="text-center my-4">Blog</h1>
      <Button className="mb-4">Create Blog Post</Button>
      <Row>
        {blogPosts.map((post, index) => (
          <Col xs={12} sm={6} md={4} lg={3} key={index}>
            <Card className="my-2">
              <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text>
                  Author: {post.author}<br />
                  Date: {post.date}<br />
                  Content: {post.content}
                </Card.Text>
                <Button variant="primary">View Post</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default BlogPage;
