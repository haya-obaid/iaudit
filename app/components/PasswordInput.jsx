"use client";
import { useState } from "react";
import {
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiOutlineLock,
} from "react-icons/ai";
export default function PasswordInput() {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className="w-full max-w-full md:max-w-[526px]">
      <label className="block mb-[8px] text-[14px] text-[#081735]">
        Password
      </label>
      <div className="relative w-full ">
        <input
          type={isVisible ? "text" : "password"}
          className={`
          w-full  max-w-full h-[56px] px-[40px] md:px-[56px] py-[16px] rounded-[8px] border-solid border-[1px] border-[#D8DAE5]  outline-none

          `}
          placeholder={"Min. 8 characters"}
        />
        <span className="absolute bottom-[16px] md:bottom-[16px] left-[8px] md:left-[16px]">
          <AiOutlineLock color="#8F95B2" fontSize={22} />
        </span>
        <span
          className="absolute top-1/2 translate-y-[-50%]  right-[8px] md:right-[16px] cursor-pointer"
          onClick={() => setIsVisible(!isVisible)}
        >
          {isVisible ? (
            <AiOutlineEye color="#8F95B2" fontSize={22} />
          ) : (
            <AiOutlineEyeInvisible color="#8F95B2" fontSize={22} />
          )}
        </span>
      </div>
    </div>
  );
}
