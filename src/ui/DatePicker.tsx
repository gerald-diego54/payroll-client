import * as React from "react";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { FieldValues, UseFormRegister } from "react-hook-form";

const BasicDatePicker: React.FC<{ register: any; name: string }> = ({ register, name }) => {
    return (
        <LocalizationProvider dateAdapter={AdapterMoment}>
            <DatePicker
                {...register(name)}
                label="Date"
                sx={{ backgroundColor: "#fff", height: "fit-content", width: "100%" }}
                slotProps={{ textField: { variant: "filled" } }}
            />
        </LocalizationProvider>
    );
};

export default BasicDatePicker;
