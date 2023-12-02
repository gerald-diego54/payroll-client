import { Paper, Box, Skeleton } from "@mui/material";
import React from "react";

const BarSkeleton: React.FC = (): JSX.Element => {
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
            <Box sx={{ display: "grid", gridTemplateColumns: "auto auto", gap: 2 }}>
                <Skeleton variant="rectangular" sx={{ backgroundColor: "#5B848D", marginTop: 3 }} height="250px" />
                <Skeleton variant="rectangular" sx={{ backgroundColor: "#5B848D", marginTop: 3 }} height="250px" />
            </Box>
        </Paper>
    );
};

export default BarSkeleton;
