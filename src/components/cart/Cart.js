import React from 'react';
import { Link } from 'react-router-dom';
const Cart = (props) => {
    
    const {cart}=props;
    

    // calculation payment
    let total=0;
    let totalQuantity=0;
    
    for(const service of cart){

        if(!service.quantity){
            service.quantity=1;
        }
        
        total=total+service.course_price;
        totalQuantity=totalQuantity+service.quantity;
        
        

    }
    const shipping=total>0?50:0;
    const tax= (total+shipping)*.15;
    const totalPrice=total+shipping+tax;
    

    return (
        <div>
            {/* display cart */}
            <p className="fs-5 fw-bold">Quantity: {totalQuantity}</p>
            <p className="fs-5 fw-bold">Enroll Cost: {total.toFixed(2)}</p>
            <p className="fs-5 fw-bold">Shipping Cost: {shipping.toFixed(2)}</p>
            <p className="fs-5 fw-bold">Tax: {tax.toFixed(2)}</p>
            <h3 className="text-danger fw-bold">Total Price: {totalPrice.toFixed(2)}</h3>

            <hr />
            <Link to="/success"><button  type="button" className="btn btn-success">Pay Now</button></Link>
            
            
        </div>
    );
};

export default Cart;