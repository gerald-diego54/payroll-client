import {
    Box,
    FilledInput,
    FormControl,
    IconButton,
    InputAdornment,
    InputLabel,
    Typography,
    useMediaQuery,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import Button from "@mui/material/Button";
import Image from "next/image";
import { Link, Paper, TextField } from "@mui/material";
import LogoDark from "../../../public/logo-dark.svg";
import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";


const LoginForm: React.FC = (): JSX.Element => {
    const theme = useTheme();
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const media = useMediaQuery(theme.breakpoints.down("md"));
    const mobileStyle = { maxWidth: "90vw", margin: "40px auto 0 auto", padding: "30px 0" };
    const desktopStyle = { maxWidth: "332px", margin: "40px auto 0 auto", padding: "30px 0" };
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    return (
        <Paper elevation={3} sx={media ? mobileStyle : desktopStyle}>
            <Box sx={{ width: "fit-content", margin: "0 auto" }}>
                <Image src={LogoDark} alt="Logo" />
            </Box>
            <Typography variant="h4" align="center" sx={{ fontWeight: 700, color: "#044453" }}>
                SIGN IN
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2, maxWidth: "75%", margin: "20px auto" }}>
                <TextField id="standard-basic" label="Email" variant="filled" />
                <FormControl variant="filled">
                    <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
                    <FilledInput
                        id="filled-adornment-password"
                        type={showPassword ? "text" : "password"}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>
            </Box>
            <Box sx={{ maxWidth: "75%", margin: "0 auto" }}>
                <Button fullWidth variant="contained" size="large" sx={{ backgroundColor: "#044453" }}>
                    LOGIN
                </Button>
            </Box>
            <Typography align="center" sx={{ color: "#044453", fontFamily: "Source Sans 3", paddingTop: 2 }}>
                Don't have an account?{" "}
                <Link href="" underline="always">
                    {"Sign up "}
                </Link>
                Here
            </Typography>
        </Paper>
    );
};

export default LoginForm;
