import React from 'react';

interface ButtonProps {
    children: React.ReactNode;
    className?: string;
}
const Button: React.FC<ButtonProps> = ({ children, className = '' }) => {
    return (
        <button
            className={`w-[198px] flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap rounded-md h-[50px] px-[22px] text-[16px] bg-[#0060E7] hover:bg-[#0055cc] text-white ${className}`}
        >
            {children}
        </button>
    );
};

export default Button;
