import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PhonelinkSetupIcon from "@mui/icons-material/PhonelinkSetup";
import PeopleOutlineRoundedIcon from "@mui/icons-material/PeopleOutlineRounded";
import LogoutIcon from "@mui/icons-material/Logout";
import RemoveCircleRoundedIcon from "@mui/icons-material/RemoveCircleRounded";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PaymentsIcon from "@mui/icons-material/Payments";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Image from "next/image";

const SidebarContainer = styled("div")({
    display: "flex",
    flexDirection: "column",
    paddingRight: "10%",
    height: "100%",
    overflow: "hidden",
});

const Sidebar: React.FC<{ isOpen: boolean }> = ({ isOpen }): JSX.Element => {
    const theme = useTheme();
    const [nestedOpen, setNestedOpen] = React.useState(true);

    const handleNestedClick = () => {
        setNestedOpen(!nestedOpen);
    };

    return (
        <Drawer
            sx={{
                width: "298px",
                flexShrink: 0,
                "& .MuiDrawer-paper": {
                    width: "298px",
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
                    sx={{ width: "100%", maxWidth: 289, bgcolor: "#044453", marginLeft: "10%" }}
                    component="nav"
                    aria-labelledby="nested-list-subheader"
                >
                    <ListItemButton>
                        <ListItemIcon>
                            <DashboardIcon sx={{ color: "white" }} />
                        </ListItemIcon>
                        <ListItemText sx={{ color: "white" }} primary="Dashboard" />
                    </ListItemButton>
                    <ListItemButton onClick={handleNestedClick}>
                        <ListItemIcon>
                            <PhonelinkSetupIcon sx={{ color: "white" }} />
                        </ListItemIcon>
                        <ListItemText sx={{ color: "white" }} primary="Setup" />
                        {nestedOpen ? <ExpandLess sx={{ color: "white" }} /> : <ExpandMore sx={{ color: "white" }} />}
                    </ListItemButton>
                    <Collapse in={nestedOpen} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItemButton sx={{ pl: 7 }}>
                                <ListItemIcon>
                                    <PeopleOutlineRoundedIcon sx={{ color: "white" }} />
                                </ListItemIcon>
                                <ListItemText sx={{ color: "white" }} primary="Employee" />
                            </ListItemButton>
                            <ListItemButton sx={{ pl: 7 }}>
                                <ListItemIcon>
                                    <RemoveCircleRoundedIcon sx={{ color: "white" }} />
                                </ListItemIcon>
                                <ListItemText sx={{ color: "white" }} primary="Deductions" />
                            </ListItemButton>
                        </List>
                    </Collapse>
                    <ListItemButton>
                        <ListItemIcon>
                            <PaymentsIcon sx={{ color: "white" }} />
                        </ListItemIcon>
                        <ListItemText sx={{ color: "white" }} primary="Payroll" />
                    </ListItemButton>
                    <ListItemButton>
                        <ListItemIcon>
                            <AccessTimeIcon sx={{ color: "white" }} />
                        </ListItemIcon>
                        <ListItemText sx={{ color: "white" }} primary="DTR" />
                    </ListItemButton>
                    <ListItemButton>
                        <ListItemIcon>
                            <LogoutIcon sx={{ color: "white" }} />
                        </ListItemIcon>
                        <ListItemText sx={{ color: "white" }} primary="logout" />
                    </ListItemButton>
                </List>
            </SidebarContainer>
        </Drawer>
    );
};

export default Sidebar;
