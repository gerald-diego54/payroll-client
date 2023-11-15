import { NextPage } from "next";
import React from "react";
import {
    Box,
    Button,
    Checkbox,
    createTheme,
    Divider,
    FormControl,
    FormControlLabel,
    InputLabel,
    MenuItem,
    Modal,
    Select,
    SelectChangeEvent,
    Stack,
    TextField,
    ThemeProvider,
    Typography,
} from "@mui/material";
import DatePicker from "@/src/ui/DatePicker";

const TestComponent: NextPage = () => {
    const [open, setOpen] = React.useState(false);
    const [OtNumber, setOtNumber] = React.useState("");
    const handleChange = (event: SelectChangeEvent) => {
        setOtNumber(event.target.value);
    };

    return (
        <Box>
            <Button onClick={() => setOpen((open) => !open)}>Add</Button>
            <Modal
                sx={{ margin: "auto", width: "fit-content", height: "fit-content" }}
                open={open}
                onClose={() => null}
            >
                <Box sx={{ backgroundColor: "#044453", padding: "10px", width: "fit-content" }}>
                    <Box>
                        <Typography variant="h5" mt={3} mb={1} sx={{ color: "#ffffff" }}>
                            Overtime Application
                        </Typography>
                        <Divider sx={{ marginBottom: "2rem", borderColor: "#fff" }} />
                        <Box sx={{ gap: "2rem", display: "flex", justifyContent: "space-evenly" }}>
                            <FormControl
                                variant="filled"
                                sx={{ minWidth: 300, backgroundColor: "#fff", height: "fit-content" }}
                            >
                                <InputLabel id="demo-simple-select-filled-label">
                                    Over Time Application Number
                                </InputLabel>
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
                            <TextField
                                sx={{ backgroundColor: "#ffffff", border: "none", height: "fit-content" }}
                                label="OT Hours"
                                size="medium"
                                type="number"
                                variant="filled"
                            />
                            <ThemeProvider
                                theme={createTheme({
                                    components: {
                                        MuiTypography: {
                                            styleOverrides: {
                                                root: {
                                                    fontSize: "0.9rem",
                                                    color: "#ffffff",
                                                },
                                            },
                                        },
                                    },
                                })}
                            >
                                <Box
                                    sx={{
                                        margin: "-13px auto auto auto",
                                        display: "flex",
                                        flexDirection: "column",
                                        height: "fit-content",
                                    }}
                                >
                                    <FormControlLabel
                                        control={<Checkbox size="small" sx={{ color: "#fff" }} />}
                                        label="Approved"
                                    />
                                    <FormControlLabel
                                        sx={{ fontSize: "0.8rem" }}
                                        control={<Checkbox size="small" sx={{ color: "#fff" }} />}
                                        label="Convert To Offset Credits"
                                    />
                                </Box>
                            </ThemeProvider>
                        </Box>
                        <Box sx={{ gap: "2rem", display: "flex", justifyContent: "space-evenly" }}>
                            <TextField
                                sx={{ backgroundColor: "#ffffff", border: "none", height: "fit-content" }}
                                label="Remarks"
                                size="medium"
                                disabled
                                type="text"
                                variant="filled"
                                value="Cut-Off August 1 -15 2023"
                                fullWidth
                            />
                        </Box>
                    </Box>
                    <TextField
                        label="Remarks"
                        multiline
                        rows={4}
                        variant="filled"
                        sx={{ backgroundColor: "#ffffff", marginTop: 1.6 }}
                        fullWidth
                    />
                    <Divider sx={{ marginTop: "15px", borderColor: "#fff" }} />
                    <Stack direction="row-reverse" gap={2} my={2}>
                        <Button onClick={() => setOpen((open) => !open)} color="error" variant="contained">
                            Close
                        </Button>
                        <Button color="success" variant="contained">
                            Save
                        </Button>
                    </Stack>
                </Box>
            </Modal>
        </Box>
    );
};

export default TestComponent;
