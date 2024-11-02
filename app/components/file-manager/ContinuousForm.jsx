"use client";
import { FormControl, FormLabel, Button, Checkbox } from "@mui/joy";
import { IoClose } from "react-icons/io5";
import { HiDocumentPlus, HiOutlinePlusSmall } from "react-icons/hi2";
import { Dropdown, FormInput, GroupRadio } from "@/app/components/elements";

export default function ContinuousForm({ step, setStep }) {
  return (
    <form className="mt-2 py-6 px-[5%] md:px-10 bg-white flex flex-col gap-8">
      <div className="flex-between gap-4 md:flex-row flex-col">
        <div className="md:w-1/2 w-full">
          <FormInput label="Client ID" />
        </div>
        <div className="md:w-1/2 w-full">
          <FormInput label="Client name*" />
        </div>
      </div>
      <div className="flex-between gap-4 md:flex-row flex-col">
        <Dropdown label="File template" placeholder="Enter..." />
        <FormInput label="Title" />
      </div>
      <FormControl>
        <FormLabel sx={{ fontWeight: "bold", color: "#2D3748" }}>
          Year type
        </FormLabel>
        <GroupRadio labels={["Gregorian", "Hijri"]} />
      </FormControl>
      <div className="flex justify-between gap-y-8 gap-x-2 items-end flex-wrap">
        <div className="md:w-[30%] w-full">
          <FormInput label="Contact number" />
        </div>
        <div className="md:w-[30%] w-full">
          <FormInput label="Audit period end date" type="date" />
        </div>
        <div className="md:w-[30%] w-full">
          <FormInput label="Expected working time" />
        </div>
        <div>
          <Button
            variant="outlined"
            startDecorator={
              <HiOutlinePlusSmall fontSize={16} color="#253A7B" />
            }
            sx={{
              borderColor: "#253A7B",
              color: "#253A7B",
              padding: "8px 4px",
              "& .MuiButton-startDecorator": {
                marginRight: "4px",
              },
            }}
          >
            Add
          </Button>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <Checkbox
          size="sm"
          // checked={selectAll}
          // onChange={(e) => handleSelectAllChange(e.target.checked)}
        />
        <label htmlFor="checkbox" className="text-[#8D8BA8] text-xs">
          I accept the user agreement
        </label>
      </div>
      <div className="flex items-center gap-8">
        <Button
          variant="solid"
          startDecorator={<HiDocumentPlus fontSize={20} />}
          onClick={() => setStep(step + 1)}
          sx={{
            background: "#253A7B",
            color: "#fff",
            padding: "10px 8px",
            "&:hover": {
              background: "#253A7B",
            },
          }}
        >
          Create new audit file
        </Button>
        <Button
          variant="outlined"
          startDecorator={<IoClose fontSize="16px" />}
          color="danger"
          sx={{
            color: "#FF3B30",
            borderColor: "#FF3B30",
          }}
        >
          Close
        </Button>
      </div>
    </form>
  );
}
