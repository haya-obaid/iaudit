"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import sideLinks from "@/app/constants/links";
import { IoClose } from "react-icons/io5";

export default function MobileSidebar({ setMobileSide }) {
  const pathName = usePathname();
  return (
    <div className="w-[260px] fixed z-20 bg-white left-0 top-0 h-[100vh] py-6 px-5">
      <div
        className="absolute top-6 right-5"
        onClick={() => setMobileSide(false)}
      >
        <IoClose fontSize={30} color="#253A7B" />
      </div>
      <div className="mt-11">
        {sideLinks.map((link, index) => {
          const isActive = pathName === link.href;

          return (
            <Link
              href={link.href}
              key={index}
              className="mb-4 flex items-center gap-4"
              onClick={() => setMobileSide(false)}
            >
              <div
                className={`w-[40px] h-[40px] rounded flex-center ${
                  isActive ? "bg-mainColor text-white" : ""
                }`}
              >
                {link.icon}
              </div>
              <h4
                className={`text-[16px] font-semibold ${
                  isActive ? "text-mainColor font-semibold" : ""
                }`}
              >
                {link.name}
              </h4>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
