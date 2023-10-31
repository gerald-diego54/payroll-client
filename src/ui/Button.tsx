import React from "react";
import Button from "@mui/material/Button";

const AddButton = ({ onClick }) => {
    return (
        <Button
            variant="contained"
            color="warning"
            // sx={{
            //     width: "100px",
            //     margin: "10px",
            //     backgroundColor: "#fff",
            //     color: "#044453",
            //     fontWeight: "bold",
            // }}
            onClick={onClick}
        >
            Add
        </Button>
    );
};

export default AddButton;
