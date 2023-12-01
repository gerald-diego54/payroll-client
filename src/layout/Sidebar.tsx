import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import { Drawer, Box, List, ListItemButton, ListItemIcon, ListItemText, Collapse, Link } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Image from "next/image";

const Sidebar: React.FC<{ isOpen: boolean }> = ({ isOpen }): JSX.Element => {
    const theme = useTheme();
    const [nestedOpen, setNestedOpen] = React.useState(true);
    const handleNestedClick = () => setNestedOpen(!nestedOpen);

    const SidebarContainer = styled("div")({
        display: "flex",
        flexDirection: "column",
        paddingRight: "10%",
        height: "100%",
        overflow: "hidden",
    });

    return (
        <Box sx={{ width: "25%", backgroundColor: "#044453" }}>
            <Image
                src="/light-logo.svg"
                width={206}
                height={100}
                alt="Picture of the author"
                style={{ marginTop: "15%", marginBottom: "20%", marginLeft: "15%" }}
            />
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
            </List>
        </Box>
    );
};

export default Sidebar;
