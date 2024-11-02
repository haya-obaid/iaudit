import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export default function DatePickerButton() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker sx={{ background: "#fff", width:"157px" , height:"50px", fontSize:"13px" , borderRadius:"8px"}} />
    </LocalizationProvider>
  );
}
