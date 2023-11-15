import React from "react";
import { Box, Paper } from "@mui/material";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import DatePicker from "@/src/ui/DatePicker";

const DTRForm = () => {
    const [OtNumber, setOtNumber] = React.useState("");
    const [LeaveNumber, setLeaveNumber] = React.useState("");
    const handleChange = (event: SelectChangeEvent) => {
        setOtNumber(event.target.value);
        setLeaveNumber(event.target.value);
    };
    const [LeaveType, setLeaveType] = React.useState("");
    const leaveChange = (event: SelectChangeEvent) => {
        setLeaveType(event.target.value);
    };

    return (
        <Paper
            elevation={0}
            sx={{
                padding: "1rem",
                backgroundColor: "#044453",
                color: "#fff",
                alignItems: "center",
                justifyContent: "center",
                borderColor: "none",
            }}
        >
            <Typography variant="h4" sx={{ marginBottom: "2rem" }}>
                DTR Application
            </Typography>
            <Divider sx={{ marginBottom: "2rem", borderColor: "#fff" }} />
            <Box sx={{ gap: "2rem", display: "flex" }}>
                <FormControl variant="filled" sx={{ width: 270, backgroundColor: "#fff", height: "fit-content" }}>
                    <InputLabel id="demo-simple-select-filled-label">DTR Application Number</InputLabel>
                    <Select
                        labelId="demo-simple-select-filled-label"
                        id="demo-simple-select-filled"
                        value={LeaveNumber}
                        onChange={handleChange}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={100000}>100000</MenuItem>
                        <MenuItem value={100001}>100001</MenuItem>
                        <MenuItem value={100002}>100002</MenuItem>
                    </Select>
                </FormControl>
                <DatePicker />
                <FormControl variant="filled" sx={{ backgroundColor: "#fff" }}>
                    <TextField label="Remarks" />
                </FormControl>
            </Box>

            <Box sx={{ display: "flex", marginTop: "1rem" }}>
                <FormControl variant="filled" sx={{ minWidth: "100%", backgroundColor: "#fff" }}>
                    <TextField disabled label="Remarks" />
                </FormControl>
            </Box>
            <Box sx={{ display: "flex", marginTop: "1rem", marginBottom: "1rem" }}>
                <FormControl sx={{ minWidth: "100%", backgroundColor: "#fff" }}>
                    <TextField multiline rows={4} variant="filled" label="Remarks" />
                </FormControl>
            </Box>
            <Divider sx={{ borderColor: "#fff" }} />
        </Paper>
    );
};

export default DTRForm;
