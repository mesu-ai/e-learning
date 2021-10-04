import React from 'react';
import { Card, Col } from 'react-bootstrap';
import Instructor from '../instructor/Instructor';

const Course = (props) => {
    const {title,picture,course_price,instructors,rating,description}=props.service;
    console.log(props.service);
    return (
            <Col>
                <Card>
                    <Card.Img variant="top" src={picture} />
                    <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        <h3>$ {course_price}</h3>
                        <h4><i>
                            {instructors.map(instructor=><Instructor instructor={instructor}></Instructor>)}
                            
                        </i></h4>
                        
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        {rating}
                    </Card.Footer>
                </Card>
                </Col>
    );
};

export default Course;