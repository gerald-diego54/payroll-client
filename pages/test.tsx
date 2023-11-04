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
import LeaveForm from "@/src/components/form_modals/LeaveForm";

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
                <Box sx={{ padding: "10px", width: "fit-content" }}>
                  <LeaveForm />
                </Box>
            </Modal>
        </Box>
    );
};
export default TestComponent;