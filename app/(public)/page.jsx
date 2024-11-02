"use client";
import { MainTabs, TabsContent } from "@/app/components";
import { homeTabs } from "@/app/constants";
import { useState } from "react";
import { Clients } from "@/app/components/dash";
import { TopHeader } from "../components/file-manager";
import { FiPlus } from "react-icons/fi";
import { TbCloudUpload, TbCloudDownload } from "react-icons/tb";

export default function Home() {
  const [value, setValue] = useState(0);
  const getContent = () => {
    switch (value) {
      case 3:
        return <Clients />;
      default:
        return <div></div>;
    }
  };
  return (
    <>
      {value !== 3 && (
        <div className="my-2">
          <MainTabs tabs={homeTabs} setValue={setValue} value={value} />
        </div>
      )}
      {value == 3 && (
        <div className="flex items-center gap-2">
          <div className="flex-1">
            <TopHeader title="Clients" setValue={setValue} />
          </div>
          <div className="flex items-center gap-1">
            <button className="w-12 h-12 rounded-md bg-white flex-center">
              <TbCloudUpload fontSize={25} color="#253a7b" />
            </button>
            <button className="w-12 h-12 rounded-md bg-white flex-center">
              <TbCloudDownload fontSize={25} color="#253a7b" />
            </button>
            <button className="w-12 h-12 rounded-md bg-mainColor flex-center">
              <FiPlus fontSize={25} color="#fff" />
            </button>
          </div>
        </div>
      )}
      <TabsContent content={getContent()} />
    </>
  );
}
