import React from 'react';
import style from './Button.module.scss'

const Button = ({
label,
className,
...rest
}) => {
    return (
        <button {...rest} className={`${style.buttonContainer} ${className ? className : ''}`}>
            {label}
        </button>
    );
};

export default Button;