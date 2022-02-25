import React from "react";
import "./style.scss";

const Button = ({ title, evClick }) => {
    const handleClick = (e) => {
        e.preventDefault();
        evClick();
    };

    return <button onClick={handleClick}> {title} </button>;
};

export default Button;
