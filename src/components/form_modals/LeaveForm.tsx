import React from "react";
import { Box, Button, Paper } from "@mui/material";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import DatePicker from "@/src/ui/DatePicker";

const LeaveForm = () => {
    const [LeaveNumber,setLeaveNumber] = React.useState("");
    const handleChange = (event: SelectChangeEvent) => {
        setLeaveNumber(event.target.value);
    };
    const [LeaveType,setLeaveType] = React.useState("");
    const leaveChange = (event: SelectChangeEvent) => {
        setLeaveType(event.target.value);
    };

    return (
        <Paper
            sx={{
                padding: "2rem",
                maxWidth: 1300,
                backgroundColor: "#044453",
                color: "#fff",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <Typography variant="h4" sx={{ marginBottom: "2rem" }}>
            Leave Application
            </Typography>
            <Divider sx={{ marginBottom: "2rem", borderColor: "#fff" }} />
            <Box sx={{ gap: "2rem", display: "flex",}}>
                <FormControl variant="filled" sx={{ minWidth: 413, backgroundColor: "#fff", height: "fit-content",}}>
                    <InputLabel id="demo-simple-select-filled-label">Leave Application Number</InputLabel>
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
            </Box>

            <Box sx={{ display: "flex", marginTop: "1rem"}}>
                <FormControl variant="filled" sx={{ minWidth: 700, backgroundColor: "#fff" }}>
                    <TextField disabled label="Remarks" />
                </FormControl>
            </Box>
            <Box sx={{ display: "flex", marginTop: "1rem" }}>
            <FormControl variant="filled" sx={{ minWidth: 300, backgroundColor: "#fff", height: "fit-content" }}>
                    <InputLabel id="demo-simple-select-filled-label">Leave Type</InputLabel>
                    <Select
                        labelId="demo-simple-select-filled-label"
                        id="demo-simple-select-filled"
                        value={LeaveType}
                        onChange={leaveChange}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={"Half Day"}>Half Day</MenuItem>
                        <MenuItem value={"With Pay"}>With Pay</MenuItem>
                        <MenuItem value={"Approved"}>Approved</MenuItem>
                    </Select>
                </FormControl>
                <Box sx={{marginLeft: 5, marginTop: 1}}>
                <FormGroup sx={{display: 'inline-flex', flexDirection: 'row'}}>
                        <FormControlLabel control={<Checkbox sx={{ color: "#fff" }} />} label="Half Day" />
                        <FormControlLabel control={<Checkbox sx={{ color: "#fff" }} />} label="With Pay" />
                        <FormControlLabel control={<Checkbox sx={{ color: "#fff" }} />} label="Approved" />
                </FormGroup>
                </Box>
            </Box>
            <Box sx={{ display: "flex", marginTop: "1rem", marginBottom: "1rem"}}>
                <FormControl sx={{ minWidth: 700, backgroundColor: "#fff"}}>
                    <TextField variant="filled" label="Remarks"/>
                </FormControl>
            </Box>
            <Divider sx={{ marginBottom: "1rem", borderColor: "#fff" }} />
            <Box sx={{ gap: "1rem", display: "flex", justifyContent: "flex-end"}}>
            <Button variant="contained" color="success">Save</Button>
            <Button variant="contained" color="error">Close</Button>
            </Box>
        </Paper>
    );
};

export default LeaveForm;