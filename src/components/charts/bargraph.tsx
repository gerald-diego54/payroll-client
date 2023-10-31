import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { Stack, Typography, Paper, Box } from "@mui/material";
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(CategoryScale,LinearScale,BarElement,Title,Tooltip,Legend);
ChartJS.defaults.color = "#ffffff";

const Bargraph: React.FC<{ title: string; data: any; options: any; }> = ({ title, data, options}): JSX.Element => {
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
                <Box sx={{ width: 250, height: 300, margin: "auto" }}>
                    <Bar options={options} data={data} plugins={[ChartDataLabels]}  />
                </Box>
            </Stack>
        </Paper>
    );
};

export default Bargraph;