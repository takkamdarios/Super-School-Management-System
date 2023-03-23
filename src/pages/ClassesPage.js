import React from 'react';
import { Container, Table, Button } from 'react-bootstrap';

const ClassesPage = () => {
  // Replace the following array with the actual data fetched from the server
  const classes = [
    { id: 1, name: 'Class 1', students: 30, teachers: 3 },
    { id: 2, name: 'Class 2', students: 25, teachers: 2 },
    // Add more classes as needed
  ];

  return (
    <Container>
      <h1 className="text-center my-4">Classes</h1>
      <Button className="mb-4">Add Class</Button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Students</th>
            <th>Teachers</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {classes.map((classItem) => (
            <tr key={classItem.id}>
              <td>{classItem.id}</td>
              <td>{classItem.name}</td>
              <td>{classItem.students}</td>
              <td>{classItem.teachers}</td>
              <td>
                <Button variant="warning" className="mr-2">Edit</Button>
                <Button variant="danger">Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default ClassesPage;
