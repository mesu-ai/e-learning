import React, { useState } from 'react';
import { Card, Col } from 'react-bootstrap';
import Instructor from '../instructor/Instructor';

const Course = (props) => {
    const {id,title,picture,course_price,instructors,rating,description,course_start}=props.service;
    // console.log(props.service);
   

    



    return (
            <Col>
                <Card style={{backgroundColor:'ghostwhite'}} className="h-100 p-2 shadow-md rounded-3">
                    <Card.Img variant="top" src={picture} />
                    <Card.Body style={{backgroundColor:'gainsboro'}}>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text className="fs-4">$ <span className="text-danger fw-bold ">{course_price}</span> </Card.Text>
                    <Card.Text><span className="fw-bold">Course Start: </span>{course_start} </Card.Text>
                        
                        {/* <p> Instructor:<i>
                            {instructors.map(instructor=><Instructor instructor={instructor}></Instructor>)}
                            
                        </i></p> */}
                        
                    
                    <Card.Footer>
                        {rating}
                    </Card.Footer>

                    <button onClick={()=>props.enrollHandeler(props.service)} className="btn btn-primary mt-2">Enroll Now</button>
                    </Card.Body>
                    
                </Card>
                </Col>
    );
};

export default Course;