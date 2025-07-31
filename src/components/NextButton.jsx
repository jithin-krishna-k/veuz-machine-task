// eslint-disable-next-line react/prop-types
const NextButton = ({ onClick }) => {
    return (
        <button
            onClick={onClick}
            className="text-white cursor-pointer font-semibold px-6 py-2 rounded-md bg-[linear-gradient(90deg,#27963D_0%,#134323_100%)]"
        >
            NEXT
        </button>
    );
};

export default NextButton;
