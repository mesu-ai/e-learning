import React from 'react';


const Cart = (props) => {
    // console.log(props.cart);
    const {cart}=props;
    // console.log(cart);

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
            <p className="fs-5 fw-bold">Quantity: {totalQuantity}</p>
            <p className="fs-5 fw-bold">Enroll Cost: {total.toFixed(2)}</p>
            <p className="fs-5 fw-bold">Shipping Cost: {shipping.toFixed(2)}</p>
            <p className="fs-5 fw-bold">Tax: {tax.toFixed(2)}</p>
            <h3 className="text-danger fw-bold">Total Price: {totalPrice.toFixed(2)}</h3>
            
            
        </div>
    );
};

export default Cart;