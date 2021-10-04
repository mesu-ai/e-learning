import React from 'react';

const ShoppingCart = (props) => {

    console.log(props.cart.id);


    // for (const iterator of props.cart) {
    //     console.log(iterator);
        
    // }

    
    // const {cartt} = props.cart;
    // console.log(typeof(cartt));
    
    // const [id]=props.cart;
    // console.log(id);
const {cart}=props;

    let total=0;
    let totalQuantity=0;
    
    for(const service of cart){

        if(!service.quantity){
            service.quantity=1;
        }
        
        console.log(service);
        total=total+service.course_price;
        totalQuantity=totalQuantity+service.quantity;

    }
    // console.log(total);
    // console.log(totalQuantity);

    return (
        <div>
            <p>{total.toFixed(2)}</p>
            
        </div>
    );
};

export default ShoppingCart;