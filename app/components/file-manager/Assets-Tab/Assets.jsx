import { FiPlus } from "react-icons/fi";
import ClientTable from "../File-Details-Tab/ClientTable";
import { assetsColumns } from "@/app/constants";

export default function Assets()
{
  const rows = [
    {
      id:"1",
      title: "Main file",
      shortcut: "{{Main file}}",
    },
    {
      id:"2",
      title: "Main file",
      shortcut: "{{Main file}}",
    },
    {
      id:"3",
      title: "Main file",
      shortcut: "{{Main file}}",
    },
    {
      id:"4",
      title: "Main file",
      shortcut: "{{Main file}}",
    },
  ];
  return (
    <>
      <div className="flex gap-3 items-center justify-end my-2">
        <p className="font-semibold text-[#2D3748]">Add new asset</p>
        <button className="w-12 h-12 rounded-md bg-mainColor flex-center">
          <FiPlus fontSize={25} color="#fff" />
        </button>
      </div>
      <ClientTable columns={assetsColumns} rows={rows} tableNum={4}/>
    </>
  );
}
