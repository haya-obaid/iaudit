"use client";
import { useState } from "react";
import Header from "./Header";
import MobileSidebar from "./MobileSidebar";
import Sidebar from "./Sidebar";

export default function MainLayout({ children }) {
  const [mobileSide, setMobileSide] = useState(false);
  const [mainSide, setMainSide] = useState(false);
  return (
    <>
      <Header
        setMobileSide={setMobileSide}
        setMainSide={setMainSide}
        mainSide={mainSide}
      />
      <Sidebar mainSide={mainSide} />
      <div
        className={` ${
          mainSide ? "!mx-auto" : ""
        } max-w-[1440px] 2xl:left-[calc(50%_+_60px)] 2xl:-translate-x-1/2 top-[72px] relative md:ml-[119px] 2xl:ml-0 md:px-[8px] px-1`}
      >
        {children}
      </div>
      <div
        className={`${
          mobileSide ? "translate-x-0" : "-translate-x-full"
        } w-full h-full fixed top-0 left-0 z-30 transition-transform duration-300`}
      >
        <MobileSidebar setMobileSide={setMobileSide} />
      </div>
    </>
  );
}
