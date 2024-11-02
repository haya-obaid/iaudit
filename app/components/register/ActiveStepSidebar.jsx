import { useActiveStep } from "@/app/hook/register/useActiveStep";
import DoneStep from "@/app/assets/DoneStep.svg";

const STEPS = [
  "Business details",
  "Business Files",
  "Personal details",
  "Create an account",
];

export const ActiveStepSidebar = () => {
  const { activeStep, setActiveStep } = useActiveStep();

  return (
    <div className="mt-[78px] ml-[8px] lg:xl-[32px] flex flex-col space-y-[24px] max-w-full">
      {STEPS.map((step, index) => (
        <span
          key={step}
          className={`flex flex-row space-y-[8px] lg:space-y-0 ${
            activeStep === index + 1 ? "text-[#253A7B]" : "text-[#8D8BA7]"
          }`}
        >
          {activeStep > index + 1 ? (
            <img
              src={DoneStep.src}
              alt=""
              className="w-[32px] aspect-square mr-[16px] "
            />
          ) : (
            <span
              className={`flex justify-center items-center rounded-full w-[32px] aspect-square mr-[16px] border-[1px] border-solid
                ${
                  activeStep === index + 1
                    ? "border-[#253A7B] text-[#253A7B]"
                    : "border-[#8D8BA7] text-[#8D8BA7]"
                }
                `}
            >
              {index + 1}
            </span>
          )}
          <span className="flex items-center text-[10px] lg:text-[14px]">
            {step}
          </span>
        </span>
      ))}
    </div>
  );
};
