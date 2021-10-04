import { Container, Row } from "react-bootstrap";
import Course from "../service/Course";
import useServices from "../hooks/UseServices";


const Services = () => {
    const [services]=useServices();
    
    
    return (
        <Container className="mt-5 mb-5">
        <Row xs={1} md={2} lg={3} className="g-4">
            { services.map(service=><Course key={service.id} service={service}></Course>)}
        </Row>
        </Container>
    );
};

export default Services;