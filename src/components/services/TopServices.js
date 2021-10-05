import { Row,Container } from "react-bootstrap";
import useTopservice from "../hooks/useTopservice";
import ToprankService from "../service/TopRankService";



const TopServices = () => {


    const [topservice]=useTopservice();
    

    return (

            <Container className="mt-5 mb-5 row mx-auto" style={{margin:'0px 30px'}}>
            
                <Row xs={1} md={2} lg={3} className="g-4">
                { topservice.map(service=><ToprankService key={service.id} service={service}></ToprankService>)}
                </Row>

    
            </Container>

    );
};

export default TopServices;