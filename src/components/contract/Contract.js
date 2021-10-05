import React from 'react';
import { Container, Form, Row} from 'react-bootstrap';

const Contract = () => {
    return (

      


          <Container style={{backgroundColor:'ghostwhite'}} className="p-5 text-white shadow-lg rounded-3 m-4 mx-auto ">

          <Form>
            <Row className="row row-cols-lg-2 row-cols-1">
            
            <Form.Group className="mb-3" controlId="name">
              <Form.Label className="fw-bold fs-4 text-dark">Name</Form.Label>
              <Form.Control type="text" placeholder="enter name" />
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="email">
              <Form.Label className="fw-bold fs-4 text-dark">Email address</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            
            </Row>
            <Form.Group className="mb-3" controlId="textarea">
              <Form.Label className="fw-bold fs-4 text-dark">Example textarea</Form.Label>
              <Form.Control as="textarea" rows={4} />
            </Form.Group>
          </Form>
          
          <button type="submit" class="btn btn-primary px-5">Send</button>
          
          </Container>
                  
    );
};

export default Contract;