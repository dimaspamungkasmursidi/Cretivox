const Button = (props) => {
  const { children } = props;
  return (
    <>
      <button className="button bg-[#403986] text-white font-bold py-2 px-4 border shadow-[4.0px_8.0px_8.0px_rgba(124, 121, 121, 0.38)] transition duration-300 ease-in-out hover:bg-blue hover:text-white">
        {children}
      </button>
    </>
  );
};

export default Button;
