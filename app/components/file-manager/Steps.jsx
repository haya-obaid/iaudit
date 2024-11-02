import { TopHeader } from "@/app/components/file-manager";

export default function Steps({ stepTitles, stepComponents, step, setStep }) {

  return (
    <>
      <TopHeader title={stepTitles[step]} setStep={setStep} step={step} />
      {stepComponents[step]}
    </>
  );
}
