import * as React from "react";
import { Box, List, ListItemButton, ListItemIcon, ListItemText, Collapse, Link } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Image from "next/image";
import { connection } from "../environment/connection";
import { useRouter } from "next/router";
import { Logout } from "@mui/icons-material";

const Sidebar: React.FC = (): JSX.Element => {
    const router = useRouter();

    const onLogout = async () => {
        if (typeof window !== "undefined") {
            if (localStorage.getItem("token") !== undefined) {
                const res = await connection.post("logout", null, {
                    headers: {
                        Authorization: "Bearer " + localStorage.getItem("token"),
                        withCredentials: true,
                    },
                });

                if (res.status === 204) {
                    localStorage.removeItem("token");
                    localStorage.removeItem("user_id");
                    localStorage.removeItem("email");
                    router.push("/");
                }
            }
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
                <Link underline="none">
                    <ListItemButton onClick={onLogout}>
                        <ListItemIcon>
                            <Logout sx={{ color: "white" }} />
                        </ListItemIcon>
                        <ListItemText sx={{ color: "white" }} primary="Logout" />
                    </ListItemButton>
                </Link>
            </List>
        </Box>
    );
};

export default Sidebar;
