import { NextPage } from "next";
import React from "react";
import {Box,Button,Modal} from "@mui/material";
import LeaveForm from "@/src/components/form_modals/LeaveForm";

const TestComponent: NextPage = () => {
    const [open, setOpen] = React.useState(false);
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