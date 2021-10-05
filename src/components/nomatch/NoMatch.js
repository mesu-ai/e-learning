import React from 'react';

// if path do not match it will show
const NoMatch = () => {
    return (
        <div style={{backgroundColor:'#ededed',height:'450px',width:'100%'}} className="d-flex flex-column align-items-center justify-content-center">
            <h1 className="fw-bold">Error 404 !</h1>
            <h3 className="text-danger">Page Not Found .</h3> 
        </div>
    );
};

export default NoMatch;