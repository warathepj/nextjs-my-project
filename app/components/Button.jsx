const Button = ({ children, onClick, className }) => {
  return (
    <div className="my-1">
    <button className={`py-2 px-4 ${className}`} onClick={onClick}>
      {children}
    </button>
    </div>
  );
};

export default Button;