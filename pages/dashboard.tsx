import Piechart from "@/src/components/charts/piechart";
import { Box, Paper } from "@mui/material";
import { NextPage } from "next";
import Head from "next/head";
import React from "react";
import Data from "../data/chart_data.json";

const DashboardPage: NextPage = (): JSX.Element => {
    const data = {
        datasets: [
            {
                label: "Percentage of Employees by Gender",
                data: Data[0].data,
                backgroundColor: ["#EAF6ED", "#67C587"],
                borderColor: ["#EAF6ED", "#67C587"],
                borderWidth: 1,
            },
        ],
        labels: Data[0].labels,
    };

    const options = {
        maintainAspectRatio: true,
        plugins: {
            legend: {
                display: true,
                position: "bottom",
            },
        },
    };
    return (
        <Box>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Box sx={{ backgroundColor: "#5B848D", width: "100%", height: "100vh" }}>
                {/*
                    For chart component
                */}
                <Piechart title="Percentage of Employees by Gender" data={data} options={options} />
            </Box>
        </Box>
    );
};

export default DashboardPage;