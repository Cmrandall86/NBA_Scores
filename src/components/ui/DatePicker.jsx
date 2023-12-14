import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";

export default function Date_Picker({ setGameDay, gameDay }) {
  return (
    <div
      style={{
        marginRight: 10,
        width: 200,
      }}
    >
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker defaultValue={dayjs(gameDay)} onChange={setGameDay} />
      </LocalizationProvider>
    </div>
  );
}
