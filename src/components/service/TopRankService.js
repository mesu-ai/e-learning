
import Button from "@restart/ui/esm/Button";
import { useState } from "react";
import { Card, Col, Modal} from "react-bootstrap";
import Instructor from "../instructor/Instructor";

const ToprankService = (props) => {
    
    const {title,picture,course_price,rating,course_start,instructors}=props.service;

    // console.log(props.service);
    



    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    



    return (
            <Col>
                <Card style={{backgroundColor:'ghostwhite'}} className="h-100 p-2 shadow-md rounded-3">
                    <Card.Img variant="top" src={picture} />
                    <Card.Body style={{backgroundColor:'gainsboro'}}>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text className="fs-5">$ <span className="text-danger fw-bold ">{course_price}</span> </Card.Text>
                    <Card.Text><span className="fw-bold">Course Start: </span>{course_start} </Card.Text>
                        
                    
                    <Card.Footer>
                       <p>Rating : {rating} <i className="fas fa-star text-warning"></i></p> 
                    </Card.Footer>

                    

                    <Button variant="primary" onClick={handleShow} className="btn btn-primary mt-2">
                    Details
                    </Button>

                    <Modal
                        show={show}
                        onHide={handleClose}
                        backdrop="static"
                        keyboard={false}
                    >
                        <Modal.Header closeButton>
                        <Modal.Title>{title} </Modal.Title>
                        </Modal.Header>
                        <Modal.Body className="d-flex flex-column align-items-center">
                        <img src={picture} alt="" />
                        <p className="fs-5">$ <span className="text-danger fw-bold ">{course_price}</span> </p>
                        <p className="text-primary fw-bold"><span className="text-black">Course Start: </span>{course_start}</p>
                        <span className="fw-bold">Instructor:</span>
                        <ol>
                            <i>
                            {instructors.map(instructor=><li> <Instructor key={Math.random()} instructor={instructor}></Instructor></li>)}

                        </i></ol>

                        </Modal.Body>
                        <Modal.Footer>
                        <Button className="btn btn-danger text-white" variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        </Modal.Footer>
                    </Modal> 

                </Card.Body> 
                    
            </Card>
        </Col>  
    );
};

export default ToprankService;