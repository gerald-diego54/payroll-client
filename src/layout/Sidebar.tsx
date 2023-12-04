import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import LogoutIcon from "@mui/icons-material/Logout";
import { Drawer, Box, List, ListItemButton, ListItemIcon, ListItemText, Collapse, Link } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Image from "next/image";
import { useRouter } from "next/router";
import { connection } from "../environment/connection";

const Sidebar: React.FC = (): JSX.Element => {
    const router = useRouter();

    const handleLogout = async () => {
        if (typeof window !== "undefined") {
            console.log(localStorage.getItem("token"));

            if (localStorage.getItem("token") !== undefined) {
                const res = await connection.post("logout", {
                    headers: {
                        Authorization: "Bearer " + localStorage.getItem("token"),
                        withCredentials: true,
                    },
                });
                console.log(res);
            }
            // if (res.status === 204) {
            //     localStorage.removeItem("token");
            //     router.push("/login");
            // }
        }
    };

    return (
        <Box sx={{ width: "25%", backgroundColor: "#044453" }}>
            <Box sx={{ width: "fit-content", margin: "15% auto" }}>
                <Image src="/light-logo.svg" priority width={206} height={100} alt="Picture of the author" />
            </Box>
            <List
                sx={{ width: "80%", backgroundColor: "#044453", margin: "0 auto" }}
                component="nav"
                aria-labelledby="nested-list-subheader"
            >
                <Link underline="none" href="/dashboard">
                    <ListItemButton>
                        <ListItemIcon>
                            <DashboardIcon sx={{ color: "white" }} />
                        </ListItemIcon>
                        <ListItemText sx={{ color: "white" }} primary="Dashboard" />
                    </ListItemButton>
                </Link>
                <Link underline="none" href="/employee">
                    <ListItemButton>
                        <ListItemIcon>
                            <AccountCircleIcon sx={{ color: "white" }} />
                        </ListItemIcon>
                        <ListItemText sx={{ color: "white" }} primary="Employee" />
                    </ListItemButton>
                </Link>
                <ListItemButton onClick={handleLogout} style={{ cursor: "pointer" }}>
                    <ListItemIcon>
                        <LogoutIcon sx={{ color: "white" }} />
                    </ListItemIcon>
                    <ListItemText sx={{ color: "white" }} primary="Log out" />
                </ListItemButton>
            </List>
        </Box>
    );
};

export default Sidebar;
