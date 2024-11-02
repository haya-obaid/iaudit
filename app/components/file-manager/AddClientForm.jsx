"use client";
import { Button } from "@mui/joy";
import { IoClose } from "react-icons/io5";
import { FormInput, RenderSelect } from "@/app/components/elements";
import { HiUserPlus } from "react-icons/hi2";

export default function AddClientForm({ step, setStep }) {
  return (
    <form className="mt-2 py-6 px-[5%] md:px-10 bg-white flex flex-col gap-8">
      <div className="flex-between gap-4 md:flex-row flex-col">
        <div className="md:w-1/2 w-full">
          <FormInput label="Name*" />
        </div>
        <div className="md:w-1/2 w-full">
          <FormInput label="Name in Arabic*" />
        </div>
      </div>
      <div className="">
        <RenderSelect
          placeholder="Select..."
          label="Regions"
          buttonText="Add"
        />
      </div>
      <div className="">
        <RenderSelect
          placeholder="Select..."
          label="Client type"
          buttonText="Add client type"
        />
      </div>
      <div className="">
        <RenderSelect
          placeholder="Select..."
          label="Client sector"
          buttonText="Add sector"
        />
      </div>
      <div className="">
        <RenderSelect
          placeholder="Select..."
          label="Branch"
          buttonText="Add sector"
        />
      </div>
      <div className="flex items-center gap-8">
        <Button
          variant="solid"
          startDecorator={<HiUserPlus fontSize={20} />}
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
          Create client
        </Button>{" "}
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
