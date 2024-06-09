const Button = ({ children, ...props }) => {
  return (
    <button
      className="px-4 py-2 text-sx md:text-base capitalize text-stone-400 text-bold  bg-stone-700 rounded-md hover:text-stone-300 hover:bg-stone-600"
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
