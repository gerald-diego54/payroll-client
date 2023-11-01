import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const data = [
  {
    empId: 124340,
    avatarSrc: "/Walter_White2.jpg",
    name: "Walter White",
    address: "#32 Angas Street",
    mobile: "042213331",
    telephone: "123-456-8785",
    company: "OLFU",
    branch: "IT Dept",
    position: "Chemistry Professor",
    payRollGroup: "Daily",
  },
];

const tableStyles = {
  backgroundColor: "#93faae", // Background color of the table
  border: "solid 2px black",
  maxWidth: 1180,
};

const cellStyles = {
  backgroundColor: "white", // Background color of the cell (h2)
  color: "gray", // Text color of the cell (h2)
  borderRadius: "4px", // Border radius for the cells
  padding: 2,
  margin: 5,
  border: "solid 2px grey",
};

const containerStyles = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  width: "60%",
  marginLeft: "25%",
};

function ThreeColumnTable ()  {
  return (
    <Box sx={containerStyles}>
      <Table style={tableStyles}>
        <TableBody>
          {data.map((item) => (
            <TableRow key={item.empId}>
              <TableCell>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                  }}
                >
                  <Box
                    sx={{
                      backgroundColor: "#2bd657",
                      borderRadius: "10px",
                      padding: 1,
                      border: "2px solid #000",
                    }}
                  >
                    <Avatar
                      alt={`Alt pic`}
                      src={item.avatarSrc}
                      style={{ width: "300px", height: "300px" }}
                    />
                  </Box>
                </Box>
              </TableCell>
              <TableCell style={{ border: "2px solid #000" }}>
                <Typography variant="h5" style={cellStyles}>
                  Employee ID:
                </Typography>
                <Typography variant="h5" style={cellStyles}>
                  Full Name:
                </Typography>
                <Typography variant="h5" style={cellStyles}>
                  Address:
                </Typography>
                <Typography variant="h5" style={cellStyles}>
                  Mobile:
                </Typography>
                <Typography variant="h5" style={cellStyles}>
                  Telephone:
                </Typography>
                <Typography variant="h5" style={cellStyles}>
                  Company:
                </Typography>
                <Typography variant="h5" style={cellStyles}>
                  Branch:
                </Typography>
                <Typography variant="h5" style={cellStyles}>
                  Position:
                </Typography>
                <Typography variant="h5" style={cellStyles}>
                  Payroll Group:
                </Typography>
              </TableCell>
              <TableCell style={{ border: "2px solid #000" }}>
                <Typography variant="h5" style={cellStyles}>
                  {item.empId}
                </Typography>
                <Typography variant="h5" style={cellStyles}>
                  {item.name}
                </Typography>
                <Typography variant="h5" style={cellStyles}>
                  {item.address}
                </Typography>
                <Typography variant="h5" style={cellStyles}>
                  {item.mobile}
                </Typography>
                <Typography variant="h5" style={cellStyles}>
                  {item.telephone}
                </Typography>
                <Typography variant="h5" style={cellStyles}>
                  {item.company}
                </Typography>
                <Typography variant="h5" style={cellStyles}>
                  {item.branch}
                </Typography>
                <Typography variant="h5" style={cellStyles}>
                  {item.position}
                </Typography>
                <Typography variant="h5" style={cellStyles}>
                  {item.payRollGroup}
                </Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
};



export default ThreeColumnTable;
