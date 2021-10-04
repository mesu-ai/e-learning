import { Row } from "react-bootstrap";
import Course from "../service/Course";
import useServices from "../hooks/UseServices";
import {  useState } from "react";
import Cart from "../cart/Cart";


const Services = () => {
    const [services]=useServices();

    const [cart,setCart]= useState([]);

    const enrollHandeler=(props)=>{
        const newCart=[...cart,props];
        setCart(newCart);
        
        // console.log(newCart);
        // console.log(cart);

    }


    
    
    return (
        <div className="mt-5 mb-5 row" style={{margin:'0px 30px'}}>
            <div className="col-9">
            <Row xs={1} md={2} lg={3} className="g-4">
            { services.map(service=><Course key={service.id} service={service} enrollHandeler={enrollHandeler} ></Course>)}
        </Row>

        </div>
        <div className="col-3" style={{borderLeft:'2px solid black'}}>
         <h3 className="fw-bold text-primary">Payment Cart</h3>
         <hr />
        <Cart cart={cart}></Cart>

        </div>
        



        </div>
    );
};

export default Services;