import React from 'react';

// Successful payment massage
const Success = () => {
    return (
        <div style={{backgroundColor:'#ededed',height:'450px',width:'100%'}} className="d-flex flex-column align-items-center justify-content-center">
            <h1 className="fw-bold text-success">Payment Successfully Done !</h1>
            <h3 className="text-danger">Thank You</h3> 
        </div>
    );
};

export default Success;