import { Row,Container } from "react-bootstrap";
import useTopservice from "../hooks/useTopservice";
import Allservices from "../service/Allservice";



const TopService = () => {


    const [topservice]=useTopservice();
    

    return (

            <Container className="mt-5 mb-5 row mx-auto" style={{margin:'0px 30px'}}>
            
                <Row xs={1} md={2} lg={3} className="g-4">
                { topservice.map(service=><Allservices key={service.id} service={service}></Allservices>)}
                </Row>

    
            </Container>

    );
};

export default TopService;