import * as React from "react";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";

const BasicDatePicker = () => {
    return (
        <LocalizationProvider dateAdapter={AdapterMoment}>
            <DatePicker slotProps={{ textField: { variant: 'filled' } }} label="date" sx={{ backgroundColor: "#fff"}}/>
        </LocalizationProvider>
    );
};

export default BasicDatePicker;
