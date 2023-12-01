import { AppBar as MUIAppBar, Toolbar, IconButton, AppBarProps as MUIAppBarProps } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";
import { styled, useTheme } from "@mui/material/styles";

interface AppBarProps extends MUIAppBarProps {
    open?: boolean;
}

const MainNavbar: React.FC<{ isOpen: (status: boolean) => void }> = ({ isOpen }) => {
    const [open, setOpen] = React.useState(true);

    const AppBar = styled(MUIAppBar, {
        shouldForwardProp: (prop) => prop !== "open",
    })<AppBarProps>(({ theme, open }) => ({
        transition: theme.transitions.create(["margin", "width"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        ...(open && {
            width: !open ? "100%" : "82%",
            transition: theme.transitions.create(["margin", "width"], {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: "18%",
        }),
    }));

    React.useEffect(() => {
        isOpen(open);
    }, [open]);

    return (
        <AppBar position="relative" open={open} sx={{ backgroundColor: "#ffffff", height: "50px" }}>
            {/* <Toolbar>
                <IconButton onClick={() => setOpen((status) => !status)} size="medium" sx={{ marginTop: "-14px" }}>
                    <MenuIcon fontSize="inherit" />
                </IconButton>
            </Toolbar> */}
        </AppBar>
    );
};

export default MainNavbar;
