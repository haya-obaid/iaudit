"use client";
import { IoIosArrowDown } from "react-icons/io";
import {
  Select,
  Option,
  selectClasses,
  FormControl,
  FormLabel,
} from "@mui/joy";
export default function Dropdown({ placeholder, label }) {
  return (
    <FormControl sx={{ width: "100%" }}>
      <FormLabel sx={{ fontWeight: "bold", color: "#2D3748" }}>
        {label}
      </FormLabel>
      <Select
        placeholder={placeholder}
        indicator={<IoIosArrowDown />}
        sx={{
          width: "100%",
          height: "40px",
          boxShadow: "none",
          borderColor: "#E7E6F2",
          [`& .${selectClasses.indicator}`]: {
            transition: "0.2s",
            [`&.${selectClasses.expanded}`]: { transform: "rotate(-180deg)" },
          },
        }}
      >
        <Option value="1">item 1</Option>
        <Option value="2">item 2</Option>
      </Select>
    </FormControl>
  );
}
