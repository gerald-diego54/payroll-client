import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import React from "react";
import { Stack, Typography, Paper, Box } from "@mui/material";

ChartJS.register(ArcElement, Tooltip, Legend);
ChartJS.defaults.color = "#ffffff";

const Piechart: React.FC<{ title: string; data: any; options: any }> = ({ title, data, options }): JSX.Element => {
    return (
        <Paper
            sx={{
                position: "relative",
                backgroundColor: "#044453",
                width: 381,
                height: 419,
            }}
            elevation={4}
        >
            <Typography align="center" sx={{ color: "#ffffff", paddingTop: 3 }}>
                {title}
            </Typography>
            <Stack direction="row" justifyContent="center" alignItems="center" sx={{ width: 1, height: "80%" }}>
                <Box sx={{ width: 250, height: 250, margin: "auto" }}>
                    <Pie options={options} data={data} />
                </Box>
            </Stack>
        </Paper>
    );
};

export default Piechart;
