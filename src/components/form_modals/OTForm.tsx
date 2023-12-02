import React, { memo } from "react";
import { Box, Button, Paper, Stack } from "@mui/material";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import DatePicker from "@/src/ui/DatePicker";
import { useForm } from "react-hook-form";

const OTForm: React.FC<{ onCloseModal: (status: boolean) => void }> = ({ onCloseModal }) => {
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

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    return (
        <form action="">
            <Paper
                elevation={0}
                sx={{
                    padding: "1rem",
                    backgroundColor: "#5B848D",
                    color: "#fff",
                    alignItems: "center",
                    justifyContent: "center",
                    borderColor: "none",
                }}
            >
                <Typography variant="h4" sx={{ marginBottom: "2rem" }}>
                    Overtime Application
                </Typography>
                <Divider sx={{ marginBottom: "2rem", borderColor: "#fff" }} />
                <Box sx={{ gap: "2rem", display: "flex" }}>
                    <DatePicker register={register} name="date" />
                    <FormControl variant="filled" sx={{ backgroundColor: "#fff" }}>
                        <TextField type="number" variant="filled" label="Hours" />
                    </FormControl>
                </Box>
                <Box sx={{ display: "flex", marginTop: "1rem", marginBottom: "1rem" }}>
                    <FormControl sx={{ minWidth: "100%", backgroundColor: "#fff" }}>
                        <TextField multiline rows={4} variant="filled" label="Remarks" />
                    </FormControl>
                </Box>
                <Divider sx={{ borderColor: "#fff" }} />
            </Paper>
            <Paper elevation={0} sx={{ backgroundColor: "transparent" }}>
                <Stack direction="row-reverse" my={2}>
                    <Button
                        onClick={() => onCloseModal(false)}
                        color="error"
                        variant="contained"
                        sx={{ width: "100%", height: 60, borderRadius: 0 }}
                    >
                        Cancel
                    </Button>
                    <Button
                        type="submit"
                        variant="contained"
                        sx={{ width: "100%", height: 60, borderRadius: 0, backgroundColor: "#044453" }}
                    >
                        Save
                    </Button>
                </Stack>
            </Paper>
        </form>
    );
};

export default memo(OTForm);
