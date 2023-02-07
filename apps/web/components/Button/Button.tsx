import React from 'react';

export interface ButtonProps {
    type: 'button' | 'submit' | 'reset';
    onClick?: () => void;
    children:  string;
}

const Button = (props: ButtonProps) => {
    return <button type={props.type} onClick={props.onClick}>{props.children}</button>;
}

export default Button;
