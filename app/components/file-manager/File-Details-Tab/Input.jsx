export function Input({ placeholder, label, htmlFor }) {
  return (
    <div
      className={`md:flex flex-row items-center justify-between ${
        !label && "md:w-[48%] w-full"
      }`}
    >
      {label && (
        <label htmlFor={htmlFor} className="md:w-[180px]">
          {label}
        </label>
      )}
      <input
        type="text"
        id={htmlFor}
        placeholder={placeholder}
        className="rounded-md border border-[#D8DAE5] block h-12 text-[#8F95B2] outline-none px-4 flex-1 w-full text-sm mt-1 md:m-0"
      />
    </div>
  );
}
