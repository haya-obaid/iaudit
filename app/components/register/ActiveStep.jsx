"use client";
import MainButton from "../MainButton";
import { useMultiStep } from "@/app/hook/register/useMultiStep";
import { useActiveStep } from "@/app/hook/register/useActiveStep";
import FirstStep from "./FirstStep";
import SecondStep from "./SecondStep";
import ThirdTest from "./ThirdTest";
import FourthStep from "./FourthStep";

const ActiveStepComponent = {
  1: <FirstStep />,
  2: <SecondStep />,
  3: <ThirdTest />,
  4: <FourthStep />,
};

export default function ActiveStep() {
  const { stateMultiStepContext, dispatchMultiStepContext } = useMultiStep();
  const ActiveStepContent =
    ActiveStepComponent[stateMultiStepContext.activeStep];
  const { handleNext, handlePrev } = useActiveStep();
  return (
    <>
      {ActiveStepContent || <div>Please select a valid step.</div>}
      <div className="mt-auto px-[8px] pt-[4px]">
        <div className="flex justify-end space-x-[16px] w-full max-w-full pb-[40px] mt-4">
          {stateMultiStepContext.activeStep > 1 && (
            <div className="w-[200px]">
              <MainButton
                onClick={() => {
                  handlePrev();
                }}
                text="Previews"
                type="text"
              />
            </div>
          )}
          <div className="w-[200px]">
            <MainButton
              onClick={() => {
                handleNext();
              }}
              text="Next"
            />
          </div>
        </div>
      </div>
    </>
  );
}
