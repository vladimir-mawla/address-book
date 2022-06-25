import React from 'react';

const Button = ({ className, text, onClick, id }) =>{
    return (
        <button 
        className={className}
        onClick={onClick}
        id={id}
        >
            {text}
        </button>
    )
}

export default Button;