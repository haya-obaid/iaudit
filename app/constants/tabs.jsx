import { HiUserPlus, HiUser } from "react-icons/hi2";
// Home
export const homeTabs = [
  "Staff list",
  "Roles & Permissions",
  "Manage templates",
  "Clients",
  "Time management",
];
//  File Manager
export const fileManagerTabs = [
  {
    href: "/files-manager/add-client",
    title: "New client",
    icon: <HiUserPlus fontSize={90} color="#253A7B" />,
  },
  {
    href: "/files-manager/continuous-client",
    title: "Continuous client",
    icon: <HiUser fontSize={90} color="#253A7B" />,
  },
];
// File Controle
export const fileControleTabs = [
  "File details",
  "Completion statistics",
  "Financial statement ",
  "Assets",
  "File manager",
];
