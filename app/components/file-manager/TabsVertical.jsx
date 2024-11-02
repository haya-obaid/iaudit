import React, { useState } from "react";
import { Tabs, TabList, Tab } from "@mui/joy";
import { IoIosArrowForward, IoIosSearch } from "react-icons/io";
import {
  AccordionGroup,
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from "@mui/joy";
import HamIcon from "../elements/HamIcon"; //
import CustomCheckbox from "../elements/CustomCheckbox";
export default function TabsVertical({ tabs, setValue, number }) {
  const [open, setOpen] = useState(true);
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (checked) => {
    setIsChecked(checked);
  };

  const data = [
    {
      title: "1000 Permanent file",
      items: [
        { num: "1001", desc: "Official papers1" },
        { num: "1001", desc: "Official papers2" },
        { num: "1001", desc: "Official papers3" },
        { num: "1001", desc: "Official papers4" },
      ],
    },
    {
      title: "2000 Permanent file",
      items: [
        { num: "1001", desc: "Official papers" },
        { num: "1001", desc: "Official papers" },
        { num: "1001", desc: "Official papers" },
        { num: "1001", desc: "Official papers" },
      ],
    },
    {
      title: "3000 Permanent file",
      items: [
        { num: "1001", desc: "Official papers" },
        { num: "1001", desc: "Official papers" },
        { num: "1001", desc: "Official papers" },
        { num: "1001", desc: "Official papers" },
      ],
    },
    {
      title: "3500 Permanent file",
      items: [
        { num: "1001", desc: "Official papers1" },
        { num: "1001", desc: "Official papers2" },
        { num: "1001", desc: "Official papers3" },
        { num: "1001", desc: "Official papers4" },
      ],
    },
    {
      title: "Permanent file",
      items: [
        { num: "1001", desc: "Official papers1" },
        { num: "1001", desc: "Official papers2" },
        { num: "1001", desc: "Official papers3" },
        { num: "1001", desc: "Official papers4" },
      ],
    },
  ];

  return (
    <div
      className={`${
        open ? "md:w-[300px] w-full h-auto" : "w-max h-max"
      } bg-white py-4 flex flex-col gap-6`}
    >
      <div className="flex-between px-4">
        <HamIcon open={open} setOpen={setOpen} />
        {open && number === 2 ? (
          <IoIosSearch fontSize={22} color="#737791" />
        ) : null}
      </div>
      {open && number === 1 ? (
        <Tabs
          aria-label="tabs"
          onChange={(e, value) => setValue(value)}
          defaultValue={"1"}
          sx={{ bgcolor: "transparent" }}
        >
          <TabList
            disableUnderline
            sx={{ gap: 1, flexDirection: "column", bgcolor: "transparent" }}
          >
            {tabs?.map((tab, index) => (
              <Tab
                key={index}
                value={(index + 1).toString()}
                disableIndicator
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  paddingInline: "16px",
                  "&:not([aria-selected='true']):hover": {
                    background: "#d9d9d9",
                  },
                }}
              >
                {tab}
                <IoIosArrowForward fontSize="13px" color="#253A7B" />
              </Tab>
            ))}
          </TabList>
        </Tabs>
      ) : null}

      {open && number === 2 ? (
        <AccordionGroup disableDivider sx={{ maxWidth: "100%", gap: "10px" }}>
          {data?.map((el, index) => (
            <Accordion key={index}>
              <AccordionSummary>{el.title}</AccordionSummary>
              <AccordionDetails>
                {el.items?.map((item, i) => (
                  <div key={i} className="my-2">
                    <div className="w-full text-sm font-semibold flex-between">
                      <div>
                        <span>{item.desc}</span>
                        <span>{item.num}</span>
                      </div>
                      <CustomCheckbox
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                      />
                    </div>
                  </div>
                ))}
              </AccordionDetails>
            </Accordion>
          ))}
        </AccordionGroup>
      ) : null}
    </div>
  );
}
