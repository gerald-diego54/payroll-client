import * as React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

function createData(
  id: string,
  name: string,
  address: string,
  mobile: string,
  telephone: string,
  company: string,
  branch: string,
  position: string,
  payRollGroup: string,
) {
  return {
    id,
    name,
    address,
    mobile,
    telephone,
    company,
    branch,
    position,
    payRollGroup,
  };
}

const rows = [
  createData(
    '01244232',
    'Walter White',
    '#69 Angas Street',
    '0235323134',
    '123-456-789',
    'Our Lady of Fatima',
    'IT Department',
    'IT Leader',
    'Example'
  ),
];

export default function UserTable() {
  const titleStyle = {
    color: '#051ad8',
    fontSize: '22px',
    backgroundColor: '#dedb7a',
    width:"100%",
    fontWeight: 900, // Add this line to set the font weight to 900 (bold)
  };
  
  const subTitle = {
    fontSize: '20px',
    fontWeight: 700, // Add this line to set the font weight to 900 (bold)
  };
 

  const tableStyles = {
    margin: 100,
    width: '80%',
    border: 'none', // Remove the border
  };

  const tableCellStyles = {
    border: 'none', // Remove all borders
  };
  

  return (
    <Table style={tableStyles}>
      <TableBody style={{ width: 'fit-content' }}>
        {rows.map((row) => (
          <TableRow key={row.id}>
            <TableCell style={{ width: 50, ...tableCellStyles }}>
              <Avatar
                alt="User Avatar"
                src="/Walter_White2.jpg"
                style={{ width: 400, height: 400 }}
              />
            </TableCell>
            <TableCell style={tableCellStyles}>
              <Paper
                elevation={3}
                style={{
                  width: '100%',
                  height: 'fit-content',
                  padding: '20px',
                  backgroundColor: 'white',
                }}
              >
                <Typography variant="subtitle1" style={titleStyle}>
                  EmployeeID
                </Typography>
                <Typography variant="body1"style={subTitle}>{row.id}</Typography>

                <Typography variant="subtitle1" style={titleStyle}>
                  Fullname
                </Typography>
                <Typography variant="body1"style={subTitle}> {row.name}</Typography>

                <Typography variant="subtitle1" style={titleStyle}>
                  Address
                </Typography>
                <Typography variant="body1"style={subTitle}>{row.address}</Typography>

                <Typography variant="subtitle1" style={titleStyle}>
                  Mobile
                </Typography>
                <Typography variant="body1"style={subTitle}>{row.mobile}</Typography>

                <Typography variant="subtitle1" style={titleStyle}>
                  Telephone
                </Typography>
                <Typography variant="body1"style={subTitle}>{row.telephone}</Typography>

                <Typography variant="subtitle1" style={titleStyle}>
                  Company
                </Typography>
                <Typography variant="body1"style={subTitle}>{row.company}</Typography>

                <Typography variant="subtitle1" style={titleStyle}>
                  Branch:
                </Typography>
                <Typography variant="body1"style={subTitle}>{row.branch}</Typography>

                <Typography variant="subtitle1" style={titleStyle}>
                  Position
                </Typography>
                <Typography variant="body1"style={subTitle}>{row.position}</Typography>

                <Typography variant="subtitle1" style={titleStyle}>
                  Payroll-Group
                </Typography>
                <Typography variant="body1"style={subTitle}>{row.payRollGroup}</Typography>

              </Paper>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

