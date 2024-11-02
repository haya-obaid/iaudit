export default function MainInput({
  id,
  label,
  placeholder,
  IconChild,
  onChange,
  value,
  type,
}) {
  return (
    <div className="w-full max-w-full md:max-w-[526px]">
      <label className="block mb-[8px] text-[14px] text-[#081735]" htmlFor={id}>
        {label}
      </label>
      <div className="relative w-full ">
        <input
          type={type ? type : "text"}
          //   value={value ? value : ""}
          onChange={onChange}
          className={` w-full 
            h-[56px] ${
              IconChild ? "pl-[40px] md:pl-[56px]" : ""
            } p-2 md:p-4 rounded-[8px] border-solid border-[1px] border-[#D8DAE5]  outline-none

          `}
          placeholder={placeholder}
          id={id}
        />
        {IconChild && (
          <span className="absolute bottom-[16px] left-[8px] md:left-[16px]">
            <IconChild color="#8F95B2" fontSize={22} />
          </span>
        )}
      </div>
    </div>
  );
}
