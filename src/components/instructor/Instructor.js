import React from 'react';

const Instructor = (props) => {
    console.log(props.instructor);
    const {name}=props.instructor;
    return (
        
            <span> {name}</span>
            
    );
};

export default Instructor;