import React from 'react';

// service instructor
const Instructor = (props) => {
    const {name}=props.instructor;
    return (
        <div>
            <span> {name}</span>

        </div>         
            
    );
};

export default Instructor;