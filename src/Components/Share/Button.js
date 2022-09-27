import React from 'react';

const Button = ({children}) => {
    return (
        <button children={children} className="btn btn-primary text-white"></button>
    );
};

export default Button;