import { AppBar, Box } from "@mui/material";
import Image from "next/image";
import LogoDark from "../../public/logo-dark.svg";
import React from "react";
import { useParams } from "next/navigation";

const Navbar: React.FC = (): JSX.Element => {
    const path = useParams();

    React.useEffect(() => {
        console.log(path);
    });
    return (
        <AppBar position="relative" sx={{ backgroundColor: "#ffffff" }}>
            <Box sx={{ width: "fit-content", margin: "5px 5px" }}>
                <Image src={LogoDark} alt="Logo" />
            </Box>
        </AppBar>
    );
};

export default Navbar;
