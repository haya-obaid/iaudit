const RadioInput = ({ label, name, selectedOption, onChange }) => {
  return (
    <label className="custom-radio text-lg flex items-center relative pl-[30px] cursor-pointer">
      <input
        type="radio"
        name={name}
        value={label}
        checked={selectedOption === label}
        onChange={onChange}
        className="radio-input opacity-0 absolute cursor-pointer"
      />
      {label && (
        <span
          className={`text-[16px] ${
            selectedOption !== label
              ? "font-normal text-[#BCBACD]"
              : "font-semibold"
          }`}
        >
          {label}
        </span>
      )}
      <span
        className={`radio-checkmark absolute top-1 left-0 w-[18px] h-[18px] rounded-full ${
          selectedOption !== label && "border-2 border-[#646185]"
        }`}
      ></span>
    </label>
  );
};

export default RadioInput;
