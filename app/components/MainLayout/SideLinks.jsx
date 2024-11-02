"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import sideLinks from "@/app/constants/links";

export default function SideLinks() {
  const pathName = usePathname();

  return (
    <div className="flex flex-col gap-6 items-center">
      {sideLinks.map((link, index) => {
        const isActive = pathName === link.href;

        return (
          <Link
            href={link.href}
            key={index}
            className="flex-center flex-col gap-2"
          >
            <div
              className={`w-16 h-[59px] rounded-lg flex-center ${
                isActive ? "bg-mainColor text-white" : ""
              }`}
            >
              {link.icon}
            </div>
            <h4
              className={`text-[9px] w-[65px] text-center whitespace-normal font-semibold ${
                isActive ? "text-mainColor font-semibold" : ""
              }`}
            >
              {link.name}
            </h4>
          </Link>
        );
      })}
    </div>
  );
}
