import React from 'react';

const Instructor = (props) => {
    console.log(props.instructor);
    const {name}=props.instructor;
    return (
        <div>
            <p>{name}</p>
            
        </div>
    );
};

export default Instructor;