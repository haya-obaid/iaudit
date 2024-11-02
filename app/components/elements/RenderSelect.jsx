import { HiOutlinePlusSmall } from "react-icons/hi2";
import Dropdown from "./Dropdown";
import { Button } from "@mui/joy";

export default function RenderSelect({ placeholder, label, buttonText }) {
  return (
    <div className="flex gap-8 items-end md:justify-start justify-between">
      <div className="md:w-1/2 flex-1 md:flex-initial">
        <Dropdown placeholder={placeholder} label={label} />
      </div>
      <Button
        variant="outlined"
        startDecorator={<HiOutlinePlusSmall fontSize={16} color="#253A7B" />}
        sx={{
          borderColor: "#253A7B",
          color: "#253A7B",
          width:"127px",
          padding: "8px 4px",
          "& .MuiButton-startDecorator": {
            marginRight: "4px",
          },
        }}
      >
        {buttonText}
      </Button>
    </div>
  );
}
