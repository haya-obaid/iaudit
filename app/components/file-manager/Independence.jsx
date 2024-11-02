import { Infocards } from "@/app/constants";
import Agreement from "./Agreement";
import IndependenceTable from "./IndependenceTable";
import { Checkbox } from "@mui/joy";
import Link from "next/link";
export default function Independence() {
  return (
    <div>
      <div class="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] lg:grid-cols-[repeat(auto-fill,minmax(24%,1fr))] gap-1 my-1">
        {Infocards.map((item, index) => {
          return (
            <div className=" bg-white rounded-md p-4 h-24 flex flex-col justify-between">
              <p className="text-sm">{item.info}</p>
              <span className="text-[#D4D2E3] text-sm">{item.desc}</span>
            </div>
          );
        })}
      </div>
      <div className="my-2">
        <Agreement
          title="Objective"
          description="I confirm that to the best of my knowledge and belief, I have no
        personal or other impairments that will prevent me from objectively
        planning, conducting, reporting or otherwise participating and reaching
        independent conclusions in the Assignment for the year ended 31/12/2023.
        Should Ibecome aware of any changes in my circumstances, I will promptly
        notify the Office for this assignment, in writing."
        />
      </div>
      <div className="my-2">
        <IndependenceTable />
      </div>
      <div className="my-2">
        <Agreement
          title="Title"
          description="Compliance with independence requirements has been verified
          electronically"
        />
      </div>
      <div className="px-[5%] md:px-4 py-6 flex justify-between flex-col md:flex-row gap-y-8">
        <div className="flex items-center gap-3">
          <Checkbox
            size="sm"
            // checked={selectAll}
            // onChange={(e) => handleSelectAllChange(e.target.checked)}
          />
          <label htmlFor="checkbox" className="text-[#8D8BA8] text-xs">
            Accept Independence Agreement
          </label>
        </div>
        <div className="w-full md:w-[233px]">
          <Link
            href="/files-manager/file-controle"
            className="h-10 w-full flex items-center justify-center rounded bg-mainColor text-white"
          >
            Accept
          </Link>
        </div>
      </div>
    </div>
  );
}
