import {
  MultiStepContext,
  MultiStepContextDispatch,
} from "@/app/components/ProviderMultiStepFormRegister";
import { useContext } from "react";

export const useActiveStep = () => {
  const activeStep = useContext(MultiStepContext).activeStep;
  const dispatchMultiStepContext = useContext(MultiStepContextDispatch);
  const setActiveStep = (number) => {
    dispatchMultiStepContext({
      type: "set-activeStep",
      value: number,
    });
  };
  const handleNext = () => {
    dispatchMultiStepContext({
      type: "increase-activeStep",
      value: {},
    });
  };
  const handlePrev = () => {
    dispatchMultiStepContext({
      type: "decrease-activeStep",
      value: {},
    });
  };
  return { activeStep, setActiveStep, handleNext, handlePrev };
};
