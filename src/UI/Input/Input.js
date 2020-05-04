import React from 'react';

const Input = (props) => {
    return (
        <div>
            <label className='font-bold text-sm'>{props.label}</label>
            <input
            className={props.className}
            value={props.value}
            onChange={props.onChange}
            name={props.name}
            type={props.type}
            placeholder={props.placeholder}
            required
            />
        </div>
    );
};

export default Input;