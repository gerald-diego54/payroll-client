import { LocalizationProvider, TimeField } from "@mui/x-date-pickers";
import React from "react";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";

const TimePicker: React.FC<{ label: string; time?: any }> = ({ label, time }): JSX.Element => {
    return (
        <LocalizationProvider dateAdapter={AdapterMoment}>
            <TimeField
                label={label}
                value={time ? time : null}
                sx={{ backgroundColor: "#fff", height: "fit-content" }}
                slotProps={{ textField: { variant: "filled" } }}
            />
        </LocalizationProvider>
    );
};

export default TimePicker;
