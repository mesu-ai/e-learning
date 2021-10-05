import React from 'react';

const Instructor = (props) => {
    const {name}=props.instructor;
    return (
        <div>
            <span> {name}</span>

        </div>
            
            
    );
};

export default Instructor;