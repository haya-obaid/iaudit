import hamIcon from "@/app/assets/icons/ham-icon.svg";

export default function HamIcon({ open, setOpen }) {
  return (
    <div className="cursor-pointer" onClick={() => setOpen(!open)}>
      <img
        src={hamIcon.src}
        alt="Menu Icon"
        className={`transition-transform duration-300 ${
          open ? "rotate-180" : "rotate-0"
        }`}
      />
    </div>
  );
}
