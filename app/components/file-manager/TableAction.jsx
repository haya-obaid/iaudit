import { FiEdit, FiPlus, FiLock } from "react-icons/fi";
import { BsFiletypePdf } from "react-icons/bs";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import image from "@/app/assets/img.png";
export default function TableActions({ clienttable, tableNum }) {
  return (
    <>
      {clienttable && (
        <div className="flex items-center gap-1">
          {[FiPlus, FiEdit, FiLock].map((Icon, i) => (
            <button
              key={i}
              className="w-6 h-6 rounded-[4px] flex-center bg-[#F2F1FA]"
            >
              <Icon fontSize={14} color="#253A7B" />
            </button>
          ))}
        </div>
      )}
      {tableNum == 3 || tableNum == 5 ? (
        <button className="w-9 h-9 rounded-[4px] flex-center bg-[#F2F1FA]">
          <FiPlus fontSize={18} color="#253A7B" />
        </button>
      ) : null}
      {tableNum == 4 && (
        <div className="flex items-center gap-1">
          <button className="w-9 h-9 rounded-[4px] flex-center bg-[#F2F1FA]">
            <img
              src={image.src}
              alt=""
              className="w-full h-full rounded-[4px] object-cover"
            />
          </button>
          <MdKeyboardDoubleArrowRight fontSize={18} color="#253A7B" />
          <button className="w-9 h-9 rounded-[4px] flex-center bg-[#F2F1FA]">
            <BsFiletypePdf fontSize={18} color="#253A7B" />
          </button>
        </div>
      )}
    </>
  );
}
