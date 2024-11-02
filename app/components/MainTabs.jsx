"use client";
import Tabs, { tabsClasses } from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
export default function MainTabs({ tabs, value, setValue }) {
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons
        sx={{
          "& .MuiTabs-indicator": {
            backgroundColor: "#253A7B",
          },
          [`& .${tabsClasses.scrollButtons}`]: {
            "&.Mui-disabled": { opacity: 0.3 },
          },
        }}
        aria-label="visible arrows tabs example"
      >
        {tabs.map((tab, index) => (
          <Tab
            key={index}
            label={tab}
            sx={{
              padding: "8px 14px",
              fontSize: "14px",
              textTransform: "capitalize",
              fontFamily: "Poppins !importaint",
              color: "#ADABC3",
              "&.Mui-selected": {
                color: "black",
              },
            }}
          />
        ))}
      </Tabs>
    </div>
  );
}
