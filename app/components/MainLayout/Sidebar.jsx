import SideLinks from "./SideLinks";

export default function Sidebar({ mainSide }) {
  return (
    <aside
      className={`${
        !mainSide ? "translate-x-0" : "-translate-x-full"
      } h-[100vh] bg-white fixed top-16 left-0 z-[1] p-5 hidden md:flex flex-col gap-9 transition-all duration-300 w-[119px]`}
    >
      {/* overflow-y-auto */}
      <SideLinks />
    </aside>
  );
}
