import React from 'react';
import { Container, Table, Button } from 'react-bootstrap';

const StudentsPage = () => {
  // Replace the following array with the actual data fetched from the server
  const students = [
    { id: 1, name: 'Student 1', class: 'Class 1' },
    { id: 2, name: 'Student 2', class: 'Class 2' },
    // Add more students as needed
  ];

  return (
    <Container>
      <h1 className="text-center my-4">Students</h1>
      <Button className="mb-4">Add Student</Button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Class</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.class}</td>
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

export default StudentsPage;
