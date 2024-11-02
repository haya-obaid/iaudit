"use client";
import {
  ContinuousForm,
  Independence,
  Steps,
} from "@/app/components/file-manager";
import { useState } from "react";

export default function Page() {
  const [step, setStep] = useState(1);
  const stepTitles = {
    1: "Audit engagement files",
    2: "Independence agreement",
  };

  const stepComponents = {
    1: <ContinuousForm setStep={setStep} step={step} />,
    2: <Independence />,
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
