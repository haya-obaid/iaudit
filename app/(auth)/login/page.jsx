"use client";
import Logo from "@/app/assets/Logo.svg";
import LoginForm from "@/app/components/login/LoginForm";

export default function Login() {
  return (
    <div className="h-screen w-full bg-[#f5f6fa] p-[16px] flex">
      <div className="hidden md:flex w-[300px] min-w-[87px] bg-[white] h-full rounded-[8px] p-[12px] md:p-[21px] mr-[28px] md:mr-[44px]">
        <img src={Logo.src} alt="" className="w-[56px] md:w-[90px] h-[27px]" />
      </div>
      <div
        className="pt-[64px] w-full max-w-full md:w-[calc(100%_-_104px)] md:max-w-[calc(100%_-_104px)] "
      >
        <div className="mb-[64px]">
          <h1 className="text-black text-[24px] md:text-[32px] font-[400]">
            Login
          </h1>
          <p className="text-[#8D8BA7] text-xs md:text-[16px] font-[400]">
            Please choose what type of editing do you provide In your office
          </p>
        </div>
        <LoginForm />
      </div>
    </div>
  );
}
