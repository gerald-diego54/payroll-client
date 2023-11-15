import { EnumTabs } from "@/types/tabs.d";
import { NextPage } from "next";
import CustomTable from "@/src/components/form_modals/Tables";
import CustomTabs from "@/src/components/form_modals/CustomTabs";
import DashboardIcon from "@mui/icons-material/Dashboard";
import Head from "next/head";
import MainNavbar from "@/src/layout/MainNavbar";
import React from "react";
import Sidebar from "@/src/layout/Sidebar";
import {
    Box,
    Button,
    Checkbox,
    CssBaseline,
    Divider,
    Modal,
    Paper,
    SelectChangeEvent,
    Stack,
    styled,
    TableCell,
    TableRow,
    Typography,
} from "@mui/material";
import DTRForm from "@/src/components/form_modals/DTRForm";
import Employee from "@/src/components/dashboard/Employee";
import FormComponent from "@/src/components/form_modals/FormComponent";
import LeaveForm from "@/src/components/form_modals/LeaveForm";
import moment from "moment";

const DashboardPage: NextPage = (): JSX.Element => {
    const [open, setOpen] = React.useState(true);
    const [tabName, setTabName] = React.useState<EnumTabs>(EnumTabs.TAB_ONE);
    const [openModal, setOpenModal] = React.useState(false);
    const [OtNumber, setOtNumber] = React.useState("");
    const handleChange = (event: SelectChangeEvent) => {
        setOtNumber(event.target.value);
    };

    const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
        open?: boolean;
    }>(({ theme, open }) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create(["margin", "width"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        ...(open && {
            width: !open ? "100%" : "82%",
            marginLeft: "18%",
            position: "relative",
            transition: theme.transitions.create(["margin", "width"], {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
        }),
    }));

    // const data = {
    //     datasets: [
    //         {
    //             data: Data[0].data,
    //             backgroundColor: ["#EAF6ED", "#67C587"],
    //             borderColor: ["#EAF6ED", "#67C587"],
    //             borderWidth: 1,
    //         },
    //     ],
    //     labels: Data[0].labels,
    // };

    // const options = {
    //     maintainAspectRatio: false,
    //     plugins: {
    //         datalabels: {
    //             display: true,
    //             anchor: "end",
    //             align: "start",
    //             offset: -30,
    //         },
    //         legend: {
    //             display: true,
    //             position: "bottom",
    //         },
    //     },

    //     scales: {
    //         y: {
    //             ticks: {
    //                 display: false,
    //                 beginAtZero: true,
    //             },

    //             grid: {
    //                 drawBorder: false,
    //                 display: false,
    //             },
    //         },
    //     },
    // };

    const test_data_tab_one: any[] = [
        {
            number: 87362813,
            year: moment().format("YYYY"),
            date: "REGULAR WORKS",
            in: moment().format("LT"),
            out: moment().format("LT"),
        },
    ];

    const test_data_tab_two: any[] = [
        {
            number: 87362813,
            year: moment().format("YYYY"),
            date: moment().format("L"),
            hours: 3,
            approved: false,
            remarks: "-",
        },
    ];

    return (
        <Box>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Box sx={{ backgroundColor: "#5B848D", width: "100%", height: "100vh" }}>
                <CssBaseline />
                {EnumTabs.TAB_ONE === tabName && (
                    <Modal
                        sx={{ margin: "auto", width: "fit-content", height: "fit-content" }}
                        open={openModal}
                        onClose={() => null}
                    >
                        <Box sx={{ backgroundColor: "#044453", padding: "10px", width: "fit-content" }}>
                            <DTRForm />
                            <Paper elevation={0} sx={{ padding: "0 1rem", backgroundColor: "transparent" }}>
                                <Stack direction="row-reverse" gap={2} my={2}>
                                    <Button
                                        onClick={() => setOpenModal((open) => !open)}
                                        color="error"
                                        variant="contained"
                                    >
                                        Close
                                    </Button>
                                    <Button color="success" variant="contained">
                                        Save
                                    </Button>
                                </Stack>
                            </Paper>
                        </Box>
                    </Modal>
                )}
                {EnumTabs.TAB_TWO === tabName && (
                    <Modal
                        sx={{ margin: "auto", width: "fit-content", height: "fit-content" }}
                        open={openModal}
                        onClose={() => null}
                    >
                        <Box sx={{ backgroundColor: "#044453", padding: "10px", width: "fit-content" }}>
                            <FormComponent />
                            <Paper elevation={0} sx={{ padding: "0 1rem", backgroundColor: "transparent" }}>
                                <Stack direction="row-reverse" gap={2} my={2}>
                                    <Button
                                        onClick={() => setOpenModal((open) => !open)}
                                        color="error"
                                        variant="contained"
                                    >
                                        Close
                                    </Button>
                                    <Button color="success" variant="contained">
                                        Save
                                    </Button>
                                </Stack>
                            </Paper>
                        </Box>
                    </Modal>
                )}
                {EnumTabs.TAB_THREE === tabName && (
                    <Modal
                        sx={{ margin: "auto", width: "fit-content", height: "fit-content" }}
                        open={openModal}
                        onClose={() => null}
                    >
                        <Box sx={{ backgroundColor: "#044453", padding: "10px", width: "fit-content" }}>
                            <LeaveForm />
                            <Paper elevation={0} sx={{ padding: "0 1rem", backgroundColor: "transparent" }}>
                                <Stack direction="row-reverse" gap={2} my={2}>
                                    <Button
                                        onClick={() => setOpenModal((open) => !open)}
                                        color="error"
                                        variant="contained"
                                    >
                                        Close
                                    </Button>
                                    <Button color="success" variant="contained">
                                        Save
                                    </Button>
                                </Stack>
                            </Paper>
                        </Box>
                    </Modal>
                )}
                <MainNavbar isOpen={(status) => setOpen(status)} />
                <Sidebar isOpen={open} />
                <Paper
                    sx={{
                        backgroundColor: "#044453",
                        width: open ? "82%" : "100%",
                        marginLeft: open ? "18%" : null,
                        padding: "7px 10px",
                        display: "flex",
                        flexDirection: "row",
                        gap: 1,
                        paddingLeft: 2.9,
                    }}
                    square
                >
                    <DashboardIcon sx={{ color: "white", margin: "auto 0", fontSize: 35 }} />
                    <Typography color="white" variant="h6" my="auto">
                        Dashboard
                    </Typography>
                </Paper>
                <Main open={open}>
                    <Paper
                        elevation={3}
                        sx={{
                            backgroundColor: "#044453",
                            padding: "15px 0 15px 15px",
                            width: "100%",
                            marginBottom: 2.5,
                        }}
                    >
                        <Employee />
                    </Paper>
                    <Paper
                        elevation={3}
                        sx={{ backgroundColor: "#044453", padding: "10px 18px 10px 15px", width: "100%" }}
                    >
                        <CustomTabs onTabChange={(tab) => setTabName(tab)} tabName={tabName} />
                        <Divider sx={{ borderColor: "#ffffff" }} />
                        {tabName === EnumTabs.TAB_ONE && (
                            <Box>
                                <Button
                                    variant="contained"
                                    color="success"
                                    onClick={() => setOpenModal((open) => !open)}
                                    sx={{ float: "right", margin: "10px 0" }}
                                >
                                    Add
                                </Button>
                                <CustomTable label={["Edit", "Delete", "Number", "Year", "Date", "In", "Out"]}>
                                    {test_data_tab_one.map((value, index) => (
                                        <TableRow
                                            key={index}
                                            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                                        >
                                            <TableCell component="th" scope="row" align="center">
                                                <Button variant="contained" color="success" size="small">
                                                    Edit
                                                </Button>
                                            </TableCell>
                                            <TableCell align="center">
                                                <Button variant="contained" color="error" size="small">
                                                    Delete
                                                </Button>
                                            </TableCell>

                                            <TableCell align="center">{value.number}</TableCell>
                                            <TableCell align="center">{value.year}</TableCell>
                                            <TableCell align="center">{value.date}</TableCell>
                                            <TableCell align="center">{value.in}</TableCell>
                                            <TableCell align="center">{value.out}</TableCell>
                                        </TableRow>
                                    ))}
                                </CustomTable>
                            </Box>
                        )}
                        {tabName === EnumTabs.TAB_TWO && (
                            <Box>
                                <Button
                                    variant="contained"
                                    color="success"
                                    onClick={() => setOpenModal((open) => !open)}
                                    sx={{ float: "right", margin: "10px 0" }}
                                >
                                    Add
                                </Button>
                                <CustomTable
                                    label={["Edit", "Delete", "Number", "Year", "Date", "Hours", "Approved", "Remarks"]}
                                >
                                    {test_data_tab_two.map((value, index) => (
                                        <TableRow
                                            key={index}
                                            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                                        >
                                            <TableCell component="th" scope="row" align="center">
                                                <Button variant="contained" color="success" size="small">
                                                    Edit
                                                </Button>
                                            </TableCell>
                                            <TableCell align="center">
                                                <Button variant="contained" color="error" size="small">
                                                    Delete
                                                </Button>
                                            </TableCell>

                                            <TableCell align="center">{value.number}</TableCell>
                                            <TableCell align="center">{value.year}</TableCell>
                                            <TableCell align="center">{value.date}</TableCell>
                                            <TableCell align="center">{value.hours}</TableCell>
                                            <TableCell align="center">
                                                <Checkbox />
                                            </TableCell>
                                            <TableCell align="center">{value.remarks}</TableCell>
                                        </TableRow>
                                    ))}
                                </CustomTable>
                            </Box>
                        )}
                    </Paper>
                </Main>
            </Box>
        </Box>
    );
};

export default DashboardPage;
