import { Dropdown, IconButton, Menu, MenuButton, MenuItem } from "@mui/joy";
import { FiMoreVertical } from "react-icons/fi";

export default function IconButtonMenu() {
  return (
    <Dropdown>
      <MenuButton
        slots={{ root: IconButton }}
        slotProps={{ root: { variant: "outlined", color: "neutral" } }}
        sx={{
          background: "#253A7B",
          width: "44px",
          height: "44px",
          color: "#fff",
          "&:hover": {
            background: "#253A7B",
            opacity: 0.9,
          },
        }}
      >
        <FiMoreVertical fontSize={20} />
      </MenuButton>
      <Menu>
        <MenuItem>item 1</MenuItem>
        <MenuItem>item 2</MenuItem>
        <MenuItem>item 3</MenuItem>
      </Menu>
    </Dropdown>
  );
}
