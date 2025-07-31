// eslint-disable-next-line react/prop-types
const CheckboxGroup = ({ options, selected, onChange }) => {
  const handleChange = (value) => {
    // eslint-disable-next-line react/prop-types
    if (selected.includes(value)) {
      // eslint-disable-next-line react/prop-types
      onChange(selected.filter((v) => v !== value)); // uncheck
    // eslint-disable-next-line react/prop-types
    } else if (selected.length < 6) {
      onChange([...selected, value]); // check new
    }
  };

  return (
    <div>
      <div className="flex gap-4 mt-4 flex-wrap">
        {
        // eslint-disable-next-line react/prop-types
        options.map((option) => (
          <label key={option.value} className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              value={option.value}
              // eslint-disable-next-line react/prop-types
              checked={selected.includes(option.value)}
              onChange={() => handleChange(option.value)}
              className="accent-red-700 w-4 h-4"
            />
            <span className="text-gray-800 text-sm">{option.label}</span>
          </label>
        ))}
      </div>
      {
      // eslint-disable-next-line react/prop-types
      selected.length >= 6 && (
        <p className="text-sm text-red-500 mt-1">You can select only up to 6 options.</p>
      )}
    </div>
  );
};

export default CheckboxGroup;
