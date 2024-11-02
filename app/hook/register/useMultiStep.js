
import { MultiStepContext, MultiStepContextDispatch } from "@/app/components/ProviderMultiStepFormRegister";
import  { useContext } from "react";


export const useMultiStep = () => {
  const stateMultiStepContext = useContext(MultiStepContext);
  const dispatchMultiStepContext = useContext(MultiStepContextDispatch);

  return {stateMultiStepContext,dispatchMultiStepContext};
};
