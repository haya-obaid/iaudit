"use client";
import { useState } from "react";
import RadioInput from "./RadioInput";
export default function GroupRadio({ labels }) {
  const [selectedOption, setSelectedOption] = useState("Gregorian");
  const handleRadioChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <div className="flex items-center gap-[100px]">
      {labels.map((label) => {
        return (
          <RadioInput
            label={label}
            name="calendar"
            selectedOption={selectedOption}
            onChange={handleRadioChange}
          />
        );
      })}
    </div>
  );
}
