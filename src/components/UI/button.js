import React from 'react';

const Button = ({ label, onClick, variant = "primary" }) => {
    return (
        <button
            className={`px-4 py-2 rounded ${
                variant === "primary"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-500 text-white"
            }`}
            onClick={onClick}
        >
            {label}
        </button>
    );
};

export default Button;
