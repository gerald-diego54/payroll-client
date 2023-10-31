import Piechart from "@/src/components/charts/piechart";
import { Box } from "@mui/material";
import { NextPage } from "next";
import Head from "next/head";
import React from "react";
import Data from "../data/chart_data.json";
import MainNavbar from "@/src/layout/MainNavbar";
import Sidebar from "@/src/layout/Sidebar";
import Bargraph from "@/src/components/charts/bargraph";

const DashboardPage: NextPage = (): JSX.Element => {
    const [open, setOpen] = React.useState(true);

    const data = {
        datasets: [
            {
                label: "",
                data: Data[0].data,
                backgroundColor: ["#EAF6ED", "#67C587"],
                borderColor: ["#EAF6ED", "#67C587"],
                borderWidth: 1,
            },
        ],
        labels: Data[0].labels,
    };

    const options = {
        maintainAspectRatio: false,
        plugins: {
            // for bargraph, to display datalabel on top
            datalabels: {
                display: true,
                anchor: "end",
                align: "start",
                offset: -30,
            },
            legend: {
                display: true,
                position: "bottom",
            },
        },

        // for bargraph, to remove data label on the side
        scales: {
            y: {
                ticks: {
                    display: false,
                    beginAtZero: true,
                },

                grid: {
                    drawBorder: false,
                    display: false,
                },
            },
        },
    };

    React.useEffect(() => {
        console.log(open);
    }, [open]);

    return (
        <Box>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Box sx={{ backgroundColor: "#5B848D", width: "100%", height: "100vh" }}>
                <MainNavbar isOpen={(status) => setOpen(status)} />
                <Sidebar isOpen={open} />
                {/* <Piechart title="Percentage of Employees by Gender" data={data} options={options} /> */}

                {<Bargraph title="Percentage of Employees by Statuses" data={data} options={options} />}
                {/*<Piechart title="Percentage of Employees by Gender" data={data} options={options} />*/}
            </Box>
        </Box>
    );
};

export default DashboardPage;
