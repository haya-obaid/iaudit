"use client";
import { useState } from "react";
import { MainTabs, TabsContent } from "../..";
import ClientTable from "../../file-manager/File-Details-Tab/ClientTable";
import { clientsColumns } from "@/app/constants";

export default function Clients() {
  const [value, setValue] = useState(0);
  const rows = [
    {
      client_id: "1001",
      name: "Nawaf Khalid Al-Thunayan Law Firm",
      email: "Omran@gmail.com",
      mobile: "0951 666 666",
    },
    {
      client_id: "1001",
      name: "Nawaf Khalid Al-Thunayan Law Firm",
      email: "Omran@gmail.com",
      mobile: "0951 666 666",
    },
    {
      client_id: "1001",
      name: "Nawaf Khalid Al-Thunayan Law Firm",
      email: "Omran@gmail.com",
      mobile: "0951 666 666",
    },
    {
      client_id: "1001",
      name: "Nawaf Khalid Al-Thunayan Law Firm",
      email: "Omran@gmail.com",
      mobile: "0951 666 666",
    },
    {
      client_id: "1001",
      name: "Nawaf Khalid Al-Thunayan Law Firm",
      email: "Omran@gmail.com",
      mobile: "0951 666 666",
    },
  ];
  const getContent = () => {
    switch (value) {
      case 0:
        return (
          <ClientTable columns={clientsColumns} rows={rows} tableNum={5} />
        );
      default:
        return (
          <ClientTable columns={clientsColumns} rows={rows} tableNum={5} />
        );
    }
  };
  const tabs = [
    "ALL",
    "Riyadh",
    "Makkah",
    "Madina",
    "Assir",
    "Tabouk",
    "Tabouk",
    "Tabouk",
    "Tabouk",
    "Tabouk",
    "Tabouk",
    "Tabouk",
    "Tabouk",
    "Tabouk",
    "Tabouk",
    "Tabouk",
  ];
  return (
    <>
      <div className="mt-2">
        <MainTabs tabs={tabs} setValue={setValue} value={value} />
      </div>
      <TabsContent content={getContent()} />
    </>
  );
}
