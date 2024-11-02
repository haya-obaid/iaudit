import {
  AccordionSummary,
  AccordionDetails,
  Accordion,
  useMediaQuery,
} from "@mui/material";
import { HiDocumentChartBar, HiPencil } from "react-icons/hi2";
import { IoIosArrowBack, IoIosArrowDown } from "react-icons/io";

export default function AccordionLayout({
  children,
  title,
  closeIt,
  actions,
  hide,
  customStyle,
  setValue,
}) {
  const isSmallScreen = useMediaQuery("(max-width:768px)");

  return (
    <Accordion
      defaultExpanded={closeIt ? false : true}
      sx={{
        padding: `${
          isSmallScreen && customStyle
            ? "0"
            : isSmallScreen
            ? "0 5%"
            : customStyle
            ? "0"
            : "0 24px"
        }`,
        boxShadow: "none",
        background: `${customStyle ? "transparent" : ""}`,
        "&:before": {
          height: 0,
        },
      }}
    >
      <AccordionSummary
        expandIcon={<IoIosArrowDown />}
        aria-controls="panel1-content"
        id="panel1-header"
        sx={{
          padding: `${customStyle ? "0 8px" : 0}`,
          background: "#fff",
          borderRadius: "6px",
          "& .MuiAccordionSummary-content": {
            justifyContent: "space-between",
            alignItems: "center",
            margin: 0,
          },
          "& .MuiAccordionSummary-expandIconWrapper": {
            color: "#253A7B",
          },
        }}
      >
        <div className="flex items-center gap-4 text-[18px] font-semibold">
          {hide && (
            <button
              className="text-[18px] font-semibold"
              onClick={() => setValue(0)}
            >
              <IoIosArrowBack />
            </button>
          )}
          <h2 className="font-semibold">{title}</h2>
        </div>
        {actions && (
          <div className="flex items-center gap-2">
            <HiPencil fontSize={18} color="#253A7B" />
            <div className="flex items-center gap-1 mr-2">
              <HiDocumentChartBar fontSize={18} color="#253A7B" />
              <span className="text-sm text-[#253A7B] font-medium">12</span>
            </div>
          </div>
        )}
      </AccordionSummary>
      <AccordionDetails
        sx={{ padding: "0", marginTop: `${customStyle && "8px"}` }}
      >
        {children}
      </AccordionDetails>
    </Accordion>
  );
}
