interface ButtonProps {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({
    children,
    className = '',
    onClick,
    type = 'button'
}) => {
    return (
        <button
            className={`w-[198px] flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap rounded-md h-[50px] px-[22px] text-[16px] bg-[#0060E7] hover:bg-[#0055cc] text-white ${className}`}
            onClick={onClick}
            type={type}
        >
            {children}
        </button>
    );
};

export default Button;
