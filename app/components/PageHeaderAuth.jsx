export default function PageHeaderAuth({ header, text }) {
  return (
    <>
      <h1 className="text-black text-[24px] md:text-[32px] font-[400]">
        {header}
      </h1>
      <p className="text-[#8D8BA7] text-xs md:text-[16px] font-[400]">{text}</p>
    </>
  );
}
