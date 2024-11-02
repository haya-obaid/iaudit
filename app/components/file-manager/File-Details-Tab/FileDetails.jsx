"use client";
import ClientInfoForm from "./ClientInfoForm";
import ClientAddressForm from "./ClientAddressForm";
import ClientTable from "./ClientTable";
import AccordionLayout from "@/app/components/AccordionLayout";
import { clientColumns } from "@/app/constants";
import TabsVertical from "../TabsVertical";
import { useState } from "react";
export default function FileDetails() {
  const [value, setValue] = useState("1");
  const rows = [
    {
      id: "1",
      name: "James Dean",
      job: "Manager",
      number: "123456789",
      email: "example@gmail.com",
      cpi: "Accepted",
    },
    {
      id: "1",
      name: "James Dean",
      job: "Manager",
      number: "123456789",
      email: "example@gmail.com",
      cpi: "Accepted",
    },
    {
      id: "1",
      name: "James Dean",
      job: "Manager",
      number: "123456789",
      email: "example@gmail.com",
      cpi: "Accepted",
    },
  ];
  const accordions = [
    {
      title: "Client Information",
      content: <ClientInfoForm />,
    },
    {
      title: "Client Address Information",
      content: <ClientAddressForm />,
    },
    {
      title: "Client Portal Access",
      content: <ClientTable columns={clientColumns} rows={rows} clientTable />,
    },
    {
      title: "Client Portal Access",
      content: (
        <p className="py-6 text-xs leading-4 text-justify">
          I confirm that to the best of my knowledge and belief, I have no
          personal or other impairments that will prevent me from objectively
          planning, conducting, reporting or otherwise participating and
          reaching independent conclusions in the Assignment for the year ended
          31/12/2023. Should I become aware of any changes in my circumstances,
          I will promptly notify the Office for this assignment, in writing.
        </p>
      ),
    },
  ];

  const tabs = ["File details", "Client details", "Tags", "Checklist"];
  const getContent = () => {
    switch (value) {
      case "1":
        return accordions;
      default:
        return accordions;
    }
  };
  const content = getContent();
  return (
    <div className="flex gap-4 flex-wrap">
      <TabsVertical tabs={tabs} setValue={setValue} number={1} />
      <div className="w-full md:w-[600px] flex-1 flex flex-col gap-3">
        {content.map((el, index) => (
          <AccordionLayout key={index} title={el.title}>
            {el.content}
          </AccordionLayout>
        ))}
      </div>
    </div>
  );
}
