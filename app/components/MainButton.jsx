import { Button } from "@mui/material";

export default function MainButton({ onClick, text, type }) {
  return (
    <Button
      onClick={() => {
        onClick();
      }}
      variant={type ? type : "contained"}
      color="primary"
      sx={{
        backgroundColor: `${!type || type === "contained" ? "#253A7B" : ""}`,
        color: `${type === "text" ? "#253A7B" : ""}`,
        width: "100%",
        textTransform: "capitalize",
      }}
    >
      {text}
    </Button>
  );
}
