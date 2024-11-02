"use client";
import { useRouter } from "next/navigation";
import { IoIosArrowBack } from "react-icons/io";

export default function TopHeader({
  title,
  backArrow,
  step,
  setStep,
  setValue,
}) {
  const router = useRouter();
  function handleBack() {
    if (step == 1) {
      router.back();
    } else if (step) {
      setStep((prev) => prev - 1);
    } else {
      setValue(0);
    }
  }
  return (
    <>
      <div className="p-4 bg-white text-[18px] h-12 font-semibold flex items-center gap-5">
        {!backArrow && (
          <button onClick={handleBack}>
            <IoIosArrowBack />
          </button>
        )}
        {title}
      </div>
    </>
  );
}
