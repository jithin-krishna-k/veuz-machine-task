// eslint-disable-next-line react/prop-types
const Dropdown = ({ label, options }) => {
    return (
        <div>
            <h1 className="font-alexandria font-light text-lg">
                {label}
                <span className="text-red-600"> *</span>
            </h1>
            <div className="relative">
                <select 
                    className="h-[57px] mt-2 rounded border w-[400px] border-[#D3D3D3] px-4 bg-white appearance-none text-gray-400"
                    defaultValue=""
                >
                    <option value="" disabled hidden>
                        Select value
                    </option>
                    {
                    // eslint-disable-next-line react/prop-types
                    options?.map((option) => (
                        <option 
                            key={option.value} 
                            value={option.value}
                            className="text-black"
                        >
                            {option.label}
                        </option>
                    ))}
                </select>
                <div className="pointer-events-none absolute left-[370px] top-7 ">
                    <svg
                        className="h-5 w-5 text-black"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                    >
                        <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                        />
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default Dropdown;