"use client";
import {
  AddClientForm,
  ContinuousForm,
  Independence,
  Steps,
} from "@/app/components/file-manager";
import { useState } from "react";

export default function Page() {
  const [step, setStep] = useState(1);
  const stepTitles = {
    1: "Add new client",
    2: "Audit engagement files",
    3: "Independence agreement",
  };

  const stepComponents = {
    1: <AddClientForm setStep={setStep} step={step} />,
    2: <ContinuousForm setStep={setStep} step={step} />,
    3: <Independence setStep={setStep} />,
  };

  return (
    <Steps
      stepTitles={stepTitles}
      stepComponents={stepComponents}
      setStep={setStep}
      step={step}
    />
  );
}
