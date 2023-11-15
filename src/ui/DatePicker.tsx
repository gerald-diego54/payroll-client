import * as React from "react";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { TextField } from "@mui/material";

const BasicDatePicker = () => {
    return (
        <LocalizationProvider dateAdapter={AdapterMoment}>
            <DatePicker
                label="Date"
                sx={{ backgroundColor: "#fff", height: "fit-content" }}
                slotProps={{ textField: { variant: "filled" } }}
            />
        </LocalizationProvider>
    );
};

export default BasicDatePicker;
