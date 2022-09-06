import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('1', 'Application name goes here', '3 servers', '11/12/20 3: 57:29 PM', 'Healthy'),
  createData('2', 'Application name goes here', '2 servers', '11/12/20 3: 57:29 PM', 'Healthy'),
  createData('3', 'Application name goes here', '2 servers', '11/12/20 3: 57:29 PM', 'Healthy'),
  createData('4', 'Application name goes here', '3 servers', '11/12/20 3: 57:29 PM', 'Healthy'),
  createData('5', 'Application name goes here', '3 servers', '11/12/20 3: 57:29 PM', 'Healthy'),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
        <TableRow>            
          <TableCell align="right"> Showing 10 of 5000 Entries</TableCell>
        </TableRow>
        </TableHead>
        <TableHead>
          <TableRow>
            <TableCell>S/N</TableCell>
            <TableCell>APPLICATION</TableCell>
            <TableCell align="right">SERVERS MAPPED</TableCell>
            <TableCell align="right">LAST SCAN DATE</TableCell>
            <TableCell align="right">STATUS</TableCell>
            <TableCell align="right">ACTION</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
