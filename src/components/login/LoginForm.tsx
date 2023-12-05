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
import { LoginSchema } from "@/src/schema/LoginSchema";
import { Paper, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { useTheme } from "@mui/material/styles";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "@mui/material/Button";
import Image from "next/image";
import LogoDark from "../../../public/logo-dark.svg";
import React, { memo, useState } from "react";
import { connection } from "@/src/environment/connection";

const LoginForm: React.FC = (): JSX.Element => {
    const route = useRouter();
    const theme = useTheme();
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const media = useMediaQuery(theme.breakpoints.down("md"));
    const mobileStyle = { maxWidth: "90vw", margin: "40px auto 0 auto", padding: "30px 0" };
    const desktopStyle = { maxWidth: "332px", margin: "40px auto 0 auto", padding: "30px 0" };
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => event.preventDefault();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: zodResolver(LoginSchema) });
    const onSubmit = async (data: any) => {
        const res = await connection.post("/login", data);
        if (res.status === 200) {
            localStorage.setItem("email", res.data.data.email);
            localStorage.setItem("user_id", res.data.data.user_id);
            localStorage.setItem("token", res.data.token);

            route.push("/dashboard");
        }
    };

    return (
        <Paper elevation={3} sx={media ? mobileStyle : desktopStyle}>
            <Box sx={{ width: "fit-content", margin: "0 auto" }}>
                <Image src={LogoDark} alt="Logo" />
            </Box>
            <Typography variant="h4" align="center" sx={{ fontWeight: 700, color: "#044453" }}>
                SIGN IN
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2, maxWidth: "75%", margin: "20px auto" }}>
                    <TextField id="standard-basic" label="Email" variant="filled" {...register("email")} />
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
                            {...register("password")}
                        />
                    </FormControl>
                </Box>
                <Box sx={{ maxWidth: "75%", margin: "0 auto" }}>
                    <Button
                        fullWidth
                        variant="contained"
                        type="submit"
                        size="large"
                        sx={{ backgroundColor: "#044453" }}
                    >
                        LOGIN
                    </Button>
                </Box>
            </form>
        </Paper>
    );
};

export default memo(LoginForm);
