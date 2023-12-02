import { leaveData } from "../../../data/leave_data";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

interface CustomTableProps {
    label: string[];
    children?: React.ReactNode;
}

const CustomTable: React.FC<CustomTableProps> = ({ label, children }) => {
    return (
        <TableContainer sx={{ margin: "10px 0", backgroundColor: "#ffffff" }}>
            <Table size="small">
                <TableHead sx={{ backgroundColor: "#5B848D" }}>
                    <TableRow>
                        {label.map((value, index) => (
                            <TableCell key={index} sx={{ color: "#ffffff" }}>
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
