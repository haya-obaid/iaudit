import { FormControl, FormLabel, Input } from "@mui/joy";

export default function FormInput({ label, type }) {
  return (
    <FormControl sx={{ width: "100%" }}>
      <FormLabel sx={{ fontWeight: "bold", color: "#2D3748" }}>
        {label}
      </FormLabel>
      <Input
        placeholder="Enter..."
        type={type ? type : "text"}
        sx={{ height: "40px", boxShadow: "none" }}
      />
    </FormControl>
  );
}
