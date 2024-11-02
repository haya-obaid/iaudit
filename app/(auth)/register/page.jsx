"use client";
import Logo from "@/app/assets/Logo.svg";
import ActiveStep from "@/app/components/register/ActiveStep";
import { ActiveStepSidebar } from "@/app/components/register/ActiveStepSidebar";
import ProviderMultiStepFromRegister from "@/app/components/ProviderMultiStepFormRegister";

export default function Page() {
  return (
    <ProviderMultiStepFromRegister>
      <div className="h-screen w-full bg-[#f5f6fa] p-[16px] flex">
        <div className="w-[300px] min-w-[87px] bg-[white] h-full rounded-[8px] p-[12px] md:p-[21px] mr-[28px] md:mr-[44px] hidden md:block">
          <img
            src={Logo.src}
            alt=""
            className="w-[56px] md:w-[90px] h-[27px]"
          />
          <ActiveStepSidebar />
        </div>
        <div className="pt-[64px] flex flex-col w-full max-w-full md:w-[calc(100%_-_104px)]  md:max-w-[calc(100%_-_104px)]">
          <ActiveStep />
        </div>
      </div>
    </ProviderMultiStepFromRegister>
  );
}
