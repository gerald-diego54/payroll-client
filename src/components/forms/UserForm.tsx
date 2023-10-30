import { Box } from "@mui/material";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import InfoBox from "../common/InfoBox";

export default function UserPage() {
  return (
    <Paper
      elevation={3}
      sx={{
        display: "grid",
        gap: 2,
        maxWidth: "100%",
        margin: "40px auto 0 auto",
        padding: "30px 0",
        backgroundColor: "#044453",
      }}
    >
      <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 3, md: 3 }}
          sx={{ padding: "1rem" }}
        >
          {/* 1st row */}
          <Grid
            item
            xs={3}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            <Box sx={{ padding: "2em" }}>
              <Image
                src="/public/logo-dark.svg"
                alt=""
                width={200}
                height={200}
              />
            </Box>
          </Grid>

          <Grid
            item
            xs={4}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
              flexDirection: "column",
              gap: 2,
            }}
          >
            <Box sx={{ display: "flex", gap: 2 }}>
              <InfoBox>Fullname</InfoBox>
              <InfoBox>Medrick</InfoBox>
            </Box>

            <Box sx={{ display: "flex", gap: 2 }}>
              <InfoBox>Address</InfoBox>
              <InfoBox>#32, Riverside St Malanday</InfoBox>
            </Box>

            <Box sx={{ display: "flex", gap: 2 }}>
              <InfoBox>Mobile</InfoBox>
              <InfoBox>0923131213231</InfoBox>
            </Box>

            <Box sx={{ display: "flex", gap: 2 }}>
              <InfoBox>Telephone</InfoBox>
              <InfoBox>12455232</InfoBox>
            </Box>

            <Box
              sx={{
                padding: "0.5em",
                display: "flex",
                justifyContent: "space-between",
                backgroundColor: "#ffff",
                borderRadius: "0.5rem",
                borderRight: "0.3rem solid",
              }}
            >
              <Box>Annoucement</Box>
              <Box>Date</Box>
            </Box>
          </Grid>
          <Grid
            item
            xs={4}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
              flexDirection: "column",
              gap: 2,
            }}
          >
            <Box sx={{ display: "flex", gap: 2 }}>
              <InfoBox>Company</InfoBox>
              <InfoBox>OLFU</InfoBox>
            </Box>

            <Box sx={{ display: "flex", gap: 2 }}>
              <InfoBox>Branch</InfoBox>
              <InfoBox>Web Dev</InfoBox>
            </Box>

            <Box sx={{ display: "flex", gap: 2 }}>
              <InfoBox>Position</InfoBox>
              <InfoBox>Accounting</InfoBox>
            </Box>

            <Box sx={{ display: "flex", gap: 2 }}>
              <InfoBox>Payroll</InfoBox>
              <InfoBox>Demo</InfoBox>
            </Box>

            <Box
              sx={{
                padding: "0.5em",
                display: "flex",
                justifyContent: "space-between",
                backgroundColor: "#ffff",
                borderRadius: "0.5rem",
                borderRight: "0.3rem solid",
              }}
            >
              <Box>Annoucement</Box>
              <Box>Date</Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
}
