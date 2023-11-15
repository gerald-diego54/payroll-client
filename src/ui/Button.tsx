import React, { useState } from "react";
import { Button, Modal, Backdrop } from "@mui/material";
import FormComponent from "../components/form_modals/FormComponent";

const AddButton = () => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <Button
                sx={{ backgroundColor: "#044453", color: "#fff", padding: "0.5rem" }}
                variant="contained"
                onClick={handleOpen}
            >
                Add
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
                closeAfterTransition
            >
                <FormComponent />
            </Modal>
        </>
    );
};

export default AddButton;
