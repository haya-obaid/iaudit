import DropdownProfile from "./DropdownProfile";
import Logo from "@/app/assets/Logo.svg";
import { HiOutlineBars3 } from "react-icons/hi2";

export default function Header({ setMobileSide, setMainSide, mainSide }) {
  return (
    <div
      className={`fixed h-16 z-[2] flex-between px-[5%] md:px-8 bg-white w-full top-0 left-0`}
    >
      <div className="w-full flex-between">
        <div className="w-full md:w-[210px] md:flex-center flex-between gap-16">
          <div
            className="block md:hidden cursor-pointer"
            onClick={() => setMobileSide(true)}
          >
            <HiOutlineBars3 fontSize={25} />
          </div>
          <div
            className="hidden cursor-pointer md:block"
            onClick={() => setMainSide(!mainSide)}
          >
            <HiOutlineBars3 fontSize={25} />
          </div>
          <img src={Logo.src} alt="iaudit-logo" width="80px" />
        </div>
        <div className="hidden md:block">
          <DropdownProfile />
        </div>
      </div>
    </div>
  );
}
