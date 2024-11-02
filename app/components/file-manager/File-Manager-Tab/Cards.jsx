"use client";
import { HiLockClosed } from "react-icons/hi2";
import CustomCheckbox from "../../elements/CustomCheckbox";
import { useState } from "react";

export default function Cards() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (checked) => {
    setIsChecked(checked);
  };

  const Infocards = [
    {
      info: "Prepared By",
      name: "test",
      date: "09/09/2024",
    },
    {
      info: "Edited By",
      name: "test",
      date: "09/09/2024",
    },
    {
      info: "Reviewed By",
      name: "test",
      date: "09/09/2024",
    },
    {
      info: "Approved By",
      name: "test",
      date: "09/09/2024",
    },
    {
      info: "Materiality level",
      number: "8,158",
    },
    {
      info: "TB period",
      from: "1/1/2023",
      to: "30/08/2023",
    },
    {
      info: "Status",
      status: "Partional",
    },
  ];

  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] lg:grid-cols-[repeat(auto-fill,minmax(24%,1fr))] gap-1 my-1">
      {Infocards.map((item, index) => {
        return (
          <div
            key={index}
            className="bg-white rounded-md p-4 gap-4 flex flex-col justify-between"
          >
            <div className="flex-between">
              <p className="text-sm">{item.info}</p>
              {index < 4 && ( 
                <CustomCheckbox
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                />
              )}
            </div>
            <div>
              {item.name && (
                <h5 className="text-[#D4D2E3] text-sm">{item.name}</h5>
              )}
              {item.date && (
                <span className="text-[#D4D2E3] text-sm">{item.date}</span>
              )}
              {item.number && (
                <div className="flex-between">
                  <span className="text-[#D4D2E3] text-sm">{item.number}</span>
                  <HiLockClosed color="#ADABC3" />
                </div>
              )}
              {item.from && (
                <div className="flex items-center gap-2">
                  <span className="text-[#D4D2E3] text-sm font-medium">
                    {item.from}
                  </span>
                  <span>To</span>
                  <span className="text-[#D4D2E3] text-sm font-medium">
                    {item.to}
                  </span>
                </div>
              )}
              {item.status && (
                <span className="text-[#D4D2E3] text-sm">{item.status}</span>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
