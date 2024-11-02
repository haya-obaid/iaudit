"use client";
import { useState } from "react";
import { MainTabs, TabsContent } from "../..";
import ClientTable from "../File-Details-Tab/ClientTable";
import { HiOutlinePlus } from "react-icons/hi2";
import { filemanagerColumns } from "@/app/constants";
import { IconButtonMenu } from "../../elements";
import { HiArrowsPointingOut } from "react-icons/hi2";

export default function FileManager() {
  const tabs = ["Objectives", "Work paper", "Internal controls"];
  const [value, setValue] = useState(0);
  const rows = [
    {
      id: "1",
      name: "Is there a structure for the organization ?",
    },
    {
      id: "2",
      name: "Is there a structure for the organization ?",
    },
    {
      id: "3",
      name: "Is there a structure for the organization ?",
    },
    {
      id: "4",
      name: "Is there a structure for the organization ?",
    },
  ];
  const getContent = () => {
    switch (value) {
      case 0:
        return (
          <ClientTable columns={filemanagerColumns} rows={rows} tableNum={3} />
        );
      case 1:
        return (
          <ClientTable columns={filemanagerColumns} rows={rows} tableNum={3} />
        );
      case 2:
        return (
          <ClientTable columns={filemanagerColumns} rows={rows} tableNum={3} />
        );
      default:
        return (
          <ClientTable columns={filemanagerColumns} rows={rows} tableNum={3} />
        );
    }
  };
  return (
    <div>
      <div className="mt-2 flex items-start justify-between flex-wrap-reverse gap-2">
        <div className="flex items-center">
          <MainTabs tabs={tabs} setValue={setValue} value={value} />
          <button className="py-2 px-[14px] h-[42px] bg-white ml-2">
            <HiOutlinePlus color="#5D5A88" fontSize={23} />
          </button>
        </div>
        <div className="flex items-center gap-2 h-[42px]">
          <button className="w-auto px-2 text-sm h-12 rounded-md bg-white flex-center">
            1001
          </button>
          <button className="w-12 h-12 rounded-md bg-white flex-center">
            <HiArrowsPointingOut fontSize={25} color="#253A7B" />
          </button>
          <IconButtonMenu />
        </div>
      </div>
      <TabsContent content={getContent()} />
    </div>
  );
}
