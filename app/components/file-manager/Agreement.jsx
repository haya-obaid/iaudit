export default function Agreement({ title, description }) {
  return (
    <div className=" bg-white rounded-md px-[5%] md:px-[32px] w-full">
      <h4 className="py-3 border-b border-[#D9D9D9] text-[16px] font-semibold">
        {title}
      </h4>
      <p className="py-6 text-xs">{description}</p>
    </div>
  );
}
