import { useState } from "react";

const productOptions = [
  "Global Leaders Forum (NEW! 5 Days)",
  "GITEX Main Stage",
  "Artificial Intelligence & Robotics (7)",
  "Future Health tech (4 Days)",
  "Cybersecurity (4 Days)",
  "All Everything (5 Days)",
  "Future Health data (2 Days)",
];

// eslint-disable-next-line react/prop-types
const ProductSelectionModal = ({ onClose, onApply }) => {
  const [selectedItems, setSelectedItems] = useState([]);

  const handleSelect = (option) => {
    setSelectedItems((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option]
    );
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
      <div className="bg-white w-full max-w-2xl rounded-xl relative shadow-lg">

        <div className="bg-gradient-to-r from-green-700 to-green-500 text-white px-6 py-4 rounded-t-xl flex justify-between items-center">
          <h2 className="text-lg font-semibold uppercase">Select Solutions/Products</h2>
          <button onClick={onClose}>
            X
          </button>
        </div>

        <div className="p-6">
          <input
            type="text"
            placeholder="Try Product/Service"
            className="w-full px-4 py-2 border rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          <p className="text-sm text-gray-600 mb-3">
            I am interested in sourcing the following solutions/products (Select Top 3)*. Please ensure you have chosen at least one category in each section.
          </p>

          <div className="space-y-3 max-h-[300px] overflow-y-auto pr-2">
            {productOptions.map((option, index) => (
              <label key={index} className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  checked={selectedItems.includes(option)}
                  onChange={() => handleSelect(option)}
                  className="accent-green-600"
                />
                <span className="text-sm">{option}</span>
              </label>
            ))}
          </div>
        </div>
        <div className="flex justify-end items-center gap-3 p-4 border-t">
          <button
            onClick={onClose}
            className="border px-4 py-2 rounded-md text-sm text-gray-700 hover:bg-gray-100"
          >
            Cancel
          </button>
          <button
            onClick={() => onApply(selectedItems)}
            className="bg-green-600 text-white px-6 py-2 text-sm font-semibold rounded-md hover:bg-green-700"
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductSelectionModal;
