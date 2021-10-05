import React from 'react';

const Footer = () => {
    return (
        <div className="bg-dark text-white p-4">
            <p>&copy; 2021 E-learning all right served.</p>
            <p>
            <i class="fab fa-facebook text-primary fa-2x me-2"></i>
            <i class="fab fa-linkedin text-info fa-2x me-2"></i>
            <i class="fab fa-youtube text-danger fa-2x"></i>
            </p>  
        </div>
    );
};

export default Footer;