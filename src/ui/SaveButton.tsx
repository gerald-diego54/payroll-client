import React from "react";
import Button from "@mui/material/Button";

const SaveButton = ({ variant = "contained" }) => {
    return (
        <Button sx={{ color: "#044453", backgroundColor: "#fff" }} variant={variant}>
            Save
        </Button>
    );
};

export default SaveButton;
