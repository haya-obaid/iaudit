import React, { useState } from "react";

const CustomCheckbox = ({ checked, onChange }) => {
  const [isChecked, setIsChecked] = useState(checked || false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    onChange && onChange(!isChecked);
  };

  return (
    <label className="flex items-center space-x-2 cursor-pointer">
      <input
        type="checkbox"
        className="hidden"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <span
        className={`w-[14px] h-[14px] flex items-center justify-center border-2 rounded-full ${
          isChecked ? "custom-checkbox !border-0" : "border-gray-300"
        }`}
      ></span>
    </label>
  );
};

export default CustomCheckbox;
