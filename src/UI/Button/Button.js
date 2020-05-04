import React from 'react';

const Button = (props) => {
    return (
        <button
        disabled={props.disabled}
        className={props.className}
        value={props.value}
        type={props.type}>

            {props.children}

        </button>
    );
};

export default Button;