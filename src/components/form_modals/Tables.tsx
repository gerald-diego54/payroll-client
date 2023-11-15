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
import { leaveData } from "../../../data/leave_data";
import { Button } from "@mui/material";

interface CustomTableProps {
    label: string[];
    children?: React.ReactNode;
}

const CustomTable: React.FC<CustomTableProps> = ({ label, children }) => {
    const rows: any[] = leaveData;

    return (
        <TableContainer sx={{ margin: "10px 0", backgroundColor: "#ffffff" }}>
            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                <TableHead sx={{ backgroundColor: "#5B848D" }}>
                    <TableRow>
                        {label.map((value, index) => (
                            <TableCell key={index} align="center" sx={{ color: "#ffffff" }}>
                                {value}
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>{children}</TableBody>
            </Table>
        </TableContainer>
    );
};

export default CustomTable;
