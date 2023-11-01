import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import EditButton from "@/src/ui/Edit";
import DeleteButton from "@/src/ui/DeleteButton";
import { DtrData } from "@/data/DTR_data";
import BasicDatePicker from "@/src/ui/DatePicker";
import DropdownMenu from "@/src/layout/DtrSelectionMenu";
import YearDropdown from "@/src/ui/DTR-YearDrop";

const cellStyle = {
  fontSize: 18,
  color: "white",
  backgroundColor: "darkgreen",
  fontWeight: 700,
  border: "solid 2px black",
};
const dataCellStyle = {
  fontSize: 14,
  fontWeight: 500,
  border: "solid 2px black",
  backgroundColor: "white",
};

const tableContainerStyle = {
  border: "solid 3px black",
  padding: "1rem", // Adjust the padding as needed
  backgroundColor: "#a6e9b8",
};

const DTR_Tables = () => {
  const rows: any[] = DtrData;

  return (
    <TableContainer component={Paper} sx={tableContainerStyle}>
      <YearDropdown />
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="center" style={cellStyle}>
              Edit
            </TableCell>
            <TableCell align="center" style={cellStyle}>
              Delete{" "}
            </TableCell>
            <TableCell align="center" style={cellStyle}>
              Number
            </TableCell>
            <TableCell align="center" style={cellStyle}>
              Year
            </TableCell>
            <TableCell align="center" style={cellStyle}>
              Date
            </TableCell>
            <TableCell align="center" style={cellStyle}>
              Date Type
            </TableCell>
            <TableCell align="center" style={cellStyle}>
              In
            </TableCell>
            <TableCell align="center" style={cellStyle}>
              Out
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody style={{ border: "solid black 3px" }}>
          {rows?.map((row: any, index: number) => (
            <TableRow
              key={index}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell
                component="th"
                scope="row"
                align="center"
                style={{ backgroundColor: "#fff" }}
              >
                <EditButton />
              </TableCell>
              <TableCell
                align="center"
                style={{ border: "solid black 2px", backgroundColor: "#fff" }}
              >
                <DeleteButton />
              </TableCell>
              <TableCell align="center" style={dataCellStyle}>
                {row.number}
              </TableCell>
              <TableCell align="center" style={dataCellStyle}>
                {row.year}
              </TableCell>
              <TableCell align="center" style={dataCellStyle}>
                <BasicDatePicker />
              </TableCell>
              <TableCell align="center" style={dataCellStyle}>
                <DropdownMenu />
              </TableCell>
              <TableCell align="center" style={dataCellStyle}></TableCell>
              <TableCell align="center" style={dataCellStyle}></TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableBody style={{ border: "solid black 3px" }}>
          {rows?.map((row: any, index: number) => (
            <TableRow
              key={index}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell
                component="th"
                scope="row"
                align="center"
                style={{ backgroundColor: "#fff" }}
              >
                <EditButton />
              </TableCell>
              <TableCell
                align="center"
                style={{ border: "solid black 2px", backgroundColor: "#fff" }}
              >
                <DeleteButton />
              </TableCell>
              <TableCell align="center" style={dataCellStyle}>
                {row.number}
              </TableCell>
              <TableCell align="center" style={dataCellStyle}>
                {row.year}
              </TableCell>
              <TableCell align="center" style={dataCellStyle}>
                <BasicDatePicker />
              </TableCell>
              <TableCell align="center" style={dataCellStyle}>
                <DropdownMenu />
              </TableCell>
              <TableCell align="center" style={dataCellStyle}></TableCell>
              <TableCell align="center" style={dataCellStyle}></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DTR_Tables;
