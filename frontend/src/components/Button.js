import React from 'react';

const Button = ({ className, text, onClick, b_id }) =>{
    return (
        <button 
        className={className}
        onClick={onClick}
        id={b_id}
        >
            {text}
        </button>
    )
}

export default Button;