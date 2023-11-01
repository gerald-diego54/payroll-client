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
import { otData } from "../../../data/ot_data";

const OvertimeTable = () => {
    const rows: any[] = otData;

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell align="center">Edit</TableCell>
                        <TableCell align="center">Delete </TableCell>
                        <TableCell align="center">Number</TableCell>
                        <TableCell align="center">Year</TableCell>
                        <TableCell align="center">Date</TableCell>
                        <TableCell align="center">Hours</TableCell>
                        <TableCell align="center">Approved</TableCell>
                        <TableCell align="center">ConvertedNoLeaveCredit</TableCell>
                        <TableCell align="center">Remarks</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows?.map((row: any, index: number) => (
                        <TableRow key={index} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                            <TableCell component="th" scope="row" align="center">
                                <EditButton />
                            </TableCell>
                            <TableCell align="center">
                                <DeleteButton />
                            </TableCell>
                            <TableCell align="center">{row.number}</TableCell>
                            <TableCell align="center">{row.year}</TableCell>
                            <TableCell align="center">{row.date}</TableCell>
                            <TableCell align="center">{row.hours}</TableCell>
                            <TableCell align="center">
                                <Checkbox></Checkbox>
                            </TableCell>
                            <TableCell align="center">
                                <Checkbox></Checkbox>
                            </TableCell>
                            <TableCell align="center">{row.remarks}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default OvertimeTable;
