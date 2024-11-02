"use client";
import {
  FileDetails,
  FileManager,
  FinancialStatement,
  TopHeader,
  CompletionStatistics,
  Assets,
} from "@/app/components/file-manager";
import { MainTabs, TabsContent } from "@/app/components";
import { fileControleTabs } from "@/app/constants";
import { useState } from "react";
import TabsVertical from "@/app/components/file-manager/TabsVertical";
import Cards from "@/app/components/file-manager/File-Manager-Tab/Cards";
import AccordionLayout from "@/app/components/AccordionLayout";

export default function Page() {
  const step = 1;
  const [value, setValue] = useState(0);
  const getContent = () => {
    switch (value) {
      case 0:
        return <FileDetails />;
      case 1:
        return <CompletionStatistics />;
      case 2:
        return <FinancialStatement />;
      case 3:
        return <Assets />;
      case 4:
        return <FileManager />;
      default:
        return <FileDetails />;
    }
  };
  return (
    <>
      {value == 0 ? (
        <>
          <TopHeader title="Pioneers Networks Y2024" step={step} />
          <div className="my-2">
            <MainTabs
              tabs={fileControleTabs}
              setValue={setValue}
              value={value}
            />
          </div>
          <TabsContent content={getContent()} />
        </>
      ) : value == 4 ? (
        <div className="flex items-start gap-2 lg:flex-row flex-col">
          <TabsVertical number={2} />
          <div className="w-full">
            <div>
              <AccordionLayout
                title={"Pioneers Networks Y2024"}
                setValue={setValue}
                hide
                customStyle
              >
                <Cards />
              </AccordionLayout>
            </div>
            <TabsContent content={getContent()} />
          </div>
        </div>
      ) : (
        <>
          <TopHeader title="Pioneers Networks Y2024" setValue={setValue} />
          <TabsContent content={getContent()} />
        </>
      )}
    </>
  );
}
