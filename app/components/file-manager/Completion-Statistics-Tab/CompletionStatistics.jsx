import { HiExclamationTriangle } from "react-icons/hi2";
import { LuRefreshCw } from "react-icons/lu";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { DatePickerButton, IconButtonMenu } from "@/app/components/elements";
import AccordionLayout from "@/app/components/AccordionLayout";
import ClientTable from "../File-Details-Tab/ClientTable";
import { statisticsColumns } from "@/app/constants";

export default function CompletionStatistics() {
  const Infocards = [
    {
      desc: "Not started",
      number: "7",
      total: "57",
      icon: <HiExclamationTriangle fontSize={20} />,
      color: "#253A7B",
    },
    {
      desc: "In progress",
      number: "7",
      total: "57",
      icon: <LuRefreshCw fontSize={20} />,
      color: "#FFCC00",
    },
    {
      desc: "Completed",
      number: "7",
      total: "57",
      icon: <IoMdCheckmarkCircleOutline fontSize={20} />,
      color: "#34C759",
    },
  ];
  const rows = [
    {
      ref: "1001",
      work_paper: "Official papers",
      review: "07/25/2024",
      preparer: "07/25/2024",
      status: "completed",
    },
    {
      ref: "1001",
      work_paper: "Official papers",
      review: "07/25/2024",
      preparer: "07/25/2024",
      status: "in-progress",
    },
    {
      ref: "1001",
      work_paper: "Official papers",
      review: "07/25/2024",
      preparer: "07/25/2024",
      status: "not-started",
    },
  ];
  const data = [
    {
      title: "1000 Permanent file",
      content: (
        <ClientTable
          columns={statisticsColumns}
          rows={rows}
          statisticsColumns
        />
      ),
    },
    {
      title: "2000 Planning",
      content: (
        <p className="py-6 text-xs leading-4 text-justify">
          Lorem ipsum dolor sit amet consectetur. Id volutpat mauris ultrices
          sit donec sit. Natoque integer leo tellus pharetra fringilla feugiat.
          Quam orci tellus mattis vel orci morbi fringilla. Habitant congue sed
          ipsum tincidunt sed nibh velit condimentum odio. Nulla dui nisi
          aliquet luctus in nisi. Quis in risus morbi proin eu. Mauris enim id
          aenean pellentesque. Ultrices gravida porttitor aenean vel aliquam
          natoque venenatis. Cras tempus nunc fermentum porta amet egestas
          parturient mauris. Consectetur sit vel sed non suspendisse. Sed
          faucibus velit egestas euismod fermentum nisl massa enim pharetra.
          Imperdiet platea auctor vulputate at cum et commodo risus. Neque
          rutrum tellus blandit diam libero amet eget mi habitasse.
        </p>
      ),
    },
    {
      title: "3000 Capital and Equity",
      content: (
        <p className="py-6 text-xs leading-4 text-justify">
          Lorem ipsum dolor sit amet consectetur. Id volutpat mauris ultrices
          sit donec sit. Natoque integer leo tellus pharetra fringilla feugiat.
          Quam orci tellus mattis vel orci morbi fringilla. Habitant congue sed
          ipsum tincidunt sed nibh velit condimentum odio. Nulla dui nisi
          aliquet luctus in nisi. Quis in risus morbi proin eu. Mauris enim id
          aenean pellentesque. Ultrices gravida porttitor aenean vel aliquam
          natoque venenatis. Cras tempus nunc fermentum porta amet egestas
          parturient mauris. Consectetur sit vel sed non suspendisse. Sed
          faucibus velit egestas euismod fermentum nisl massa enim pharetra.
          Imperdiet platea auctor vulputate at cum et commodo risus. Neque
          rutrum tellus blandit diam libero amet eget mi habitasse.
        </p>
      ),
    },
    {
      title: "3500 Directors and related parties",
      content: (
        <p className="py-6 text-xs leading-4 text-justify">
          Lorem ipsum dolor sit amet consectetur. Id volutpat mauris ultrices
          sit donec sit. Natoque integer leo tellus pharetra fringilla feugiat.
          Quam orci tellus mattis vel orci morbi fringilla. Habitant congue sed
          ipsum tincidunt sed nibh velit condimentum odio. Nulla dui nisi
          aliquet luctus in nisi. Quis in risus morbi proin eu. Mauris enim id
          aenean pellentesque. Ultrices gravida porttitor aenean vel aliquam
          natoque venenatis. Cras tempus nunc fermentum porta amet egestas
          parturient mauris. Consectetur sit vel sed non suspendisse. Sed
          faucibus velit egestas euismod fermentum nisl massa enim pharetra.
          Imperdiet platea auctor vulputate at cum et commodo risus. Neque
          rutrum tellus blandit diam libero amet eget mi habitasse.
        </p>
      ),
    },
    {
      title: "4000 Fixed Assets, intangible and other non current assets",
      content: (
        <p className="py-6 text-xs leading-4 text-justify">
          Lorem ipsum dolor sit amet consectetur. Id volutpat mauris ultrices
          sit donec sit. Natoque integer leo tellus pharetra fringilla feugiat.
          Quam orci tellus mattis vel orci morbi fringilla. Habitant congue sed
          ipsum tincidunt sed nibh velit condimentum odio. Nulla dui nisi
          aliquet luctus in nisi. Quis in risus morbi proin eu. Mauris enim id
          aenean pellentesque. Ultrices gravida porttitor aenean vel aliquam
          natoque venenatis. Cras tempus nunc fermentum porta amet egestas
          parturient mauris. Consectetur sit vel sed non suspendisse. Sed
          faucibus velit egestas euismod fermentum nisl massa enim pharetra.
          Imperdiet platea auctor vulputate at cum et commodo risus. Neque
          rutrum tellus blandit diam libero amet eget mi habitasse.
        </p>
      ),
    },
  ];
  return (
    <div>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] lg:grid-cols-[repeat(auto-fill,minmax(33%,1fr))] gap-1 my-1">
        {Infocards.map((item, index) => {
          return (
            <div
              key={index}
              className="relative bg-white rounded-md p-4 h-24 flex flex-col justify-between"
            >
              <div
                className={`absolute right-0 top-1/2 transform -translate-y-1/2 w-1 h-[calc(100%-24px)] rounded-l-md `}
                style={{ backgroundColor: item.color }}
              ></div>

              <p className="text-sm">{item.desc}</p>
              <div className="flex items-center gap-4">
                <div
                  className="w-8 h-8 rounded-md flex items-center justify-center text-white"
                  style={{ backgroundColor: item.color }}
                >
                  {item.icon}
                </div>
                <p>
                  <span style={{ color: item.color }}>{item.number}</span>
                  <sub className="text-[#D4D2E3] text-sm">/{item.total}</sub>
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="w-full flex sm:items-center sm:justify-between items-end my-2 flex-col-reverse sm:flex-row">
        <div className="flex items-center gap-4 mt-2">
          <DatePickerButton />
          <span className="font-semibold">To</span>
          <DatePickerButton />
        </div>
        <IconButtonMenu />
      </div>
      <div className="flex flex-col gap-3">
        {data.map((el, index) => (
          <AccordionLayout key={index} title={el.title} closeIt actions>
            {el.content}
          </AccordionLayout>
        ))}
      </div>
    </div>
  );
}
