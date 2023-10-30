import { AppBar as MUIAppBar, Toolbar, IconButton, AppBarProps as MUIAppBarProps } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";
import { styled, useTheme } from "@mui/material/styles";

interface AppBarProps extends MUIAppBarProps {
    open?: boolean;
}

const MainNavbar: React.FC<{ isOpen: (status: boolean) => void }> = ({ isOpen }) => {
    const [open, setOpen] = React.useState(false);

    const AppBar = styled(MUIAppBar, {
        shouldForwardProp: (prop) => prop !== "open",
    })<AppBarProps>(({ theme, open }) => ({
        transition: theme.transitions.create(["margin", "width"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        ...(open && {
            width: `calc(100% - 298px)`,
            marginLeft: `240px`,
            transition: theme.transitions.create(["margin", "width"], {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
        }),
    }));

    React.useEffect(() => {
        isOpen(open);
    }, [open]);

    return (
        <AppBar position="fixed" open={open} sx={{ backgroundColor: "#ffffff" }}>
            <Toolbar>
                <IconButton onClick={() => setOpen((status) => !status)}>
                    <MenuIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
};

export default MainNavbar;
