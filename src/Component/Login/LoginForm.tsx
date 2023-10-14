import Image from "next/image";
import {Box} from "@mui/material";
import TextField from "@mui/material/TextField";
import LogoDark from "../../../public/logo-dark.svg";
import React from "react";
import Paper from "@mui/material/Paper";
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
const LoginForm = () => {
  return (
    <Paper sx={{textAlign: 'center', width: 332, height: 475, flexShrink: 0, backgroundColor: '#fff', margin: '0 auto', marginTop: 10, boxShadow: '6'}}>
      <Image src={LogoDark} alt="Logo" />
      <Box sx={{color: '#044453', fontFamily: 'Inter', fontSize: 24, fontStyle: "normal", fontWeight: 700, paddingTop: 6}}>SIGN IN</Box>
      <Box sx={{color: '#044453', fontFamily: 'Source Sans 3', fontSize: 12, fontStyle: "normal", fontWeight: 400, paddingTop: 4, marginRight: 25}}>Email</Box>
      <Box>
      <TextField id="standard-basic" label="admin@test.com" variant="standard" sx={{marginLeft: 0, width: 230, color: '#747474', fontFamily: 'Source Sans 3', fontSize: 16, fontStyle: "normal", marginTop: -2,}}/>
      </Box>
      <Box sx={{color: '#044453', fontFamily: 'Source Sans 3', fontSize: 12, fontStyle: "normal", fontWeight: 400, paddingTop: 4, marginRight: 23}}>Password</Box>
      <Box>
      <TextField id="standard-basic" label="*****************" variant="standard" sx={{marginLeft: 0, width: 230, color: '#747474', fontFamily: 'Source Sans 3', fontSize: 16, fontStyle: "normal", marginTop: -2,}}/>
      </Box>
      <Button sx={{flexShrink: 0, backgroundColor: '#044453', color: '#FFFFFF', fontFamily: 'Source Sans 3', fontSize: 12, fontStyle: "normal", fontWeight: 600, marginTop: 6, width: 230}} variant="contained">LOGIN</Button>
      <Box sx={{color: '#044453', fontFamily: 'Source Sans 3', fontSize: 12, fontStyle: "Normal", paddingTop: 2}}>Don't have an account? <Link href="" underline="always">
      {'Sign up '}</Link>
       Here</Box>
      </Paper>
  )
}

export default LoginForm;