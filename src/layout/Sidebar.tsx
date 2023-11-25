import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import { Drawer, List, ListItemButton, ListItemIcon, ListItemText, Collapse, Link } from "@mui/material";
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
        <Drawer
            sx={{
                flexShrink: 0,
                "& .MuiDrawer-paper": {
                    width: "18%",
                    boxSizing: "border-box",
                    backgroundColor: "#044453",
                },
            }}
            variant="persistent"
            anchor="left"
            open={isOpen}
        >
            <SidebarContainer>
                <Image
                    src="/light-logo.svg"
                    width={206}
                    height={100}
                    alt="Picture of the author"
                    style={{ marginTop: "15%", marginBottom: "20%", marginLeft: "15%" }}
                />
                <List
                    sx={{ width: "100%", maxWidth: 289, backgroundColor: "#044453", marginLeft: "10%" }}
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
            </SidebarContainer>
        </Drawer>
    );
};

export default Sidebar;
