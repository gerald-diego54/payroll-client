import React from "react";
import { Box, Paper } from "@mui/material";
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
import SaveButton from "@/src/ui/SaveButton";
import CloseButton from "@/src/ui/CloseButton";
import DatePicker from "@/src/ui/DatePicker";

const FormComponent = () => {
    const [OtNumber, setOtNumber] = React.useState("");
    const handleChange = (event: SelectChangeEvent) => {
        setOtNumber(event.target.value);
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
                Overtime Application
            </Typography>
            <Divider sx={{ marginBottom: "2rem", borderColor: "#fff" }} />
            <Box sx={{ gap: "2rem", display: "flex", justifyContent: "space-evenly" }}>
                <FormControl variant="filled" sx={{ minWidth: 300, backgroundColor: "#fff", height: "fit-content" }}>
                    <InputLabel id="demo-simple-select-filled-label">Over Time Application Number</InputLabel>
                    <Select
                        labelId="demo-simple-select-filled-label"
                        id="demo-simple-select-filled"
                        value={OtNumber}
                        onChange={handleChange}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={1000312}>1000312</MenuItem>
                        <MenuItem value={124124}>124124</MenuItem>
                        <MenuItem value={125125}>125125</MenuItem>
                    </Select>
                </FormControl>
                <DatePicker />
                <FormControl variant="filled" sx={{ backgroundColor: "#fff", height: "fit-content" }}>
                    <TextField label="Ot hours" />
                </FormControl>
                <Box>
                    <FormGroup>
                        <FormControlLabel control={<Checkbox sx={{ color: "#fff" }} />} label="Approved" />
                        <FormControlLabel
                            control={<Checkbox sx={{ color: "#fff" }} />}
                            label="Convert To Offset Credits"
                        />
                    </FormGroup>
                </Box>
            </Box>

            <Box sx={{ display: "flex", margin: "2rem" }}>
                <FormControl variant="filled" sx={{ minWidth: 1230, backgroundColor: "#fff" }}>
                    <TextField disabled label="Remarks" />
                </FormControl>
            </Box>
            <Box sx={{ display: "center", margin: "2rem" }}>
                <FormControl variant="filled" sx={{ minWidth: 1230, backgroundColor: "#fff" }}>
                    <TextField label="Remarks" />
                </FormControl>
            </Box>
            <Divider sx={{ marginBottom: "1rem", borderColor: "#fff" }} />
            <Box sx={{ gap: "2rem", display: "flex", justifyContent: "flex-end", margin: "2rem" }}>
                <SaveButton />
                <CloseButton />
            </Box>
        </Paper>
    );
};

export default FormComponent;
