// eslint-disable-next-line react/prop-types
const PreviousButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="text-white cursor-pointer font-semibold px-6 py-2 rounded-md bg-[linear-gradient(90deg,#5C2F66_0%,#25102C_100%)]"
    >
      PREVIOUS
    </button>
  );
};

export default PreviousButton;
