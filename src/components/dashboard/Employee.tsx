import { Avatar, Box, Button, Grid, Paper, Stack, TextField, styled } from "@mui/material";
import React from "react";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const Employee: React.FC = (): JSX.Element => {
    const VisuallyHiddenInput = styled("input")`
        clip: rect(0 0 0 0);
        clip-path: inset(50%);
        height: 1px;
        overflow: hidden;
        position: absolute;
        bottom: 0;
        left: 0;
        white-space: nowrap;
        width: 1px;
    `;

    return (
        <Grid container>
            <Grid md={1.8} sx={{ borderRight: "1px solid #ffffff" }}>
                <Stack direction="column" spacing={1} sx={{ width: "fit-content" }}>
                    <Avatar
                        src="https://thispersondoesnotexist.com/"
                        variant="rounded"
                        sx={{ height: 150, width: 150 }}
                    ></Avatar>
                    <Button component="label" variant="contained" color="success" startIcon={<CloudUploadIcon />}>
                        Upload
                        <VisuallyHiddenInput type="file" />
                    </Button>
                </Stack>
            </Grid>
            <Grid md={5} px={2} sx={{ borderRight: "1px solid #ffffff" }}>
                <Stack direction="column" gap={2}>
                    <Stack direction="row" spacing={1}>
                        <Paper sx={{ backgroundColor: "#ffffff", width: "100%", padding: 1 }}>Employee Number</Paper>
                        <Paper sx={{ backgroundColor: "#ffffff", width: "100%", padding: 1 }}>8137987</Paper>
                    </Stack>
                    <Stack direction="row" spacing={1}>
                        <Paper sx={{ backgroundColor: "#ffffff", width: "100%", padding: 1 }}>Full Name</Paper>
                        <Paper sx={{ backgroundColor: "#ffffff", width: "100%", padding: 1 }}>8137987</Paper>
                    </Stack>
                    <Stack direction="row" spacing={1}>
                        <Paper sx={{ backgroundColor: "#ffffff", width: "100%", padding: 1 }}>Address</Paper>
                        <Paper sx={{ backgroundColor: "#ffffff", width: "100%", padding: 1 }}>8137987</Paper>
                    </Stack>
                    <Stack direction="row" spacing={1}>
                        <Paper sx={{ backgroundColor: "#ffffff", width: "100%", padding: 1 }}>Landline No.</Paper>
                        <Paper sx={{ backgroundColor: "#ffffff", width: "100%", padding: 1 }}>8137987</Paper>
                    </Stack>
                    <Stack direction="row" spacing={1}>
                        <Paper sx={{ backgroundColor: "#ffffff", width: "100%", padding: 1 }}>Mobile Number</Paper>
                        <Paper sx={{ backgroundColor: "#ffffff", width: "100%", padding: 1 }}>8137987</Paper>
                    </Stack>
                </Stack>
            </Grid>
            <Grid md={5} pl={2}>
                <Stack direction="column" gap={2}>
                    <Stack direction="row" spacing={1}>
                        <Paper sx={{ backgroundColor: "#ffffff", width: "100%", padding: 1 }}>Company Name</Paper>
                        <Paper sx={{ backgroundColor: "#ffffff", width: "100%", padding: 1 }}>8137987</Paper>
                    </Stack>
                    <Stack direction="row" spacing={1}>
                        <Paper sx={{ backgroundColor: "#ffffff", width: "100%", padding: 1 }}>Branch</Paper>
                        <Paper sx={{ backgroundColor: "#ffffff", width: "100%", padding: 1 }}>8137987</Paper>
                    </Stack>
                    <Stack direction="row" spacing={1}>
                        <Paper sx={{ backgroundColor: "#ffffff", width: "100%", padding: 1 }}>Position</Paper>
                        <Paper sx={{ backgroundColor: "#ffffff", width: "100%", padding: 1 }}>8137987</Paper>
                    </Stack>
                    <Stack direction="row" spacing={1}>
                        <Paper sx={{ backgroundColor: "#ffffff", width: "100%", padding: 1 }}>ID Number</Paper>
                        <Paper sx={{ backgroundColor: "#ffffff", width: "100%", padding: 1 }}>8137987</Paper>
                    </Stack>
                    <Stack direction="row" spacing={1}>
                        <Paper sx={{ backgroundColor: "#ffffff", width: "100%", padding: 1 }}>Biometric Number</Paper>
                        <Paper sx={{ backgroundColor: "#ffffff", width: "100%", padding: 1 }}>8137987</Paper>
                    </Stack>
                </Stack>
            </Grid>
        </Grid>
    );
};

export default Employee;
