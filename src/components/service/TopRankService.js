
import { Card, Col} from "react-bootstrap";

const ToprankService = (props) => {
    
    const {title,picture,course_price,rating,course_start}=props.service;

    // console.log(props.service);
    


    const topserviceHandeler=(props)=>{
        
    }

    



    return (
            <Col>
                <Card style={{backgroundColor:'ghostwhite'}} className="h-100 p-2 shadow-md rounded-3">
                    <Card.Img variant="top" src={picture} />
                    <Card.Body style={{backgroundColor:'gainsboro'}}>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text className="fs-5">$ <span className="text-danger fw-bold ">{course_price}</span> </Card.Text>
                    <Card.Text><span className="fw-bold">Course Start: </span>{course_start} </Card.Text>
                        
                        {/* <p> Instructor:<i>
                            {instructors.map(instructor=><Instructor instructor={instructor}></Instructor>)}
                            
                        </i></p> */}
                        
                    
                    <Card.Footer>
                       <p>Rating : {rating} <i className="fas fa-star text-warning"></i></p> 
                    </Card.Footer>

                    <button onClick={()=>topserviceHandeler(props.service)} className="btn btn-primary mt-2">Details</button>

 



                    </Card.Body>  
                    
                </Card>
                </Col>  
    );
};

export default ToprankService;