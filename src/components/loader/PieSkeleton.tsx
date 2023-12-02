import { Skeleton, Paper } from "@mui/material";
import React from "react";

const PieSkeleton = () => {
    return (
        <Paper
            sx={{
                position: "relative",
                backgroundColor: "#044453",
                width: 381,
                height: 419,
                padding: 5,
            }}
            elevation={4}
        >
            <Skeleton variant="rectangular" sx={{ backgroundColor: "#5B848D" }} />
            <Skeleton
                variant="circular"
                width={230}
                height={230}
                sx={{ backgroundColor: "#5B848D", marginX: "auto", marginTop: 5 }}
            />
        </Paper>
    );
};

export default PieSkeleton;
