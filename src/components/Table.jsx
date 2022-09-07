import * as React from 'react';
import Table from '@mui/material/Table';
import Button from '@mui/material/Button';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import pdf from "../assets/pdf.svg" 
import xls from "../assets/xls.svg" 
import triangle from "../assets/triangle.svg" 
import Lens from "@mui/icons-material/Lens"
import CheckCircle from "@mui/icons-material/CheckCircle"
import BasicPopover from './Popover';

function createData(sn, text, servers, time, health) {
  return { sn, text, servers, time, health };
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
      <Table>
        <TableHead>
        <TableRow>            
          <TableCell sx={{ float: "right" }}> 
            <img src={pdf}/> <img src={xls} style={{margin: "0 20px"}} />
            Showing 10 of 5000 Entries
          </TableCell>
        </TableRow>
        </TableHead>
      </Table>

      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow sx={{ backgroundColor: "#f1f3f5", color: "#222222" }}>
            <TableCell> <b> S/N </b> </TableCell>
            <TableCell></TableCell>
            <TableCell> <b>APPLICATION</b> </TableCell>
            <TableCell> <b> SERVERS MAPPED</b></TableCell>
            <TableCell> <b>LAST SCAN DATE</b> </TableCell>
            <TableCell> <b>STATUS</b> </TableCell>
            <TableCell> <b>ACTION</b> </TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.sn}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.sn}
              </TableCell>
              <TableCell>
                <Lens sx={{ color: "#14DB77", }}>add_circle</Lens> 
              </TableCell>
              <TableCell>
                {row.text}
              </TableCell>
              <TableCell sx={{ color: "#499DFF", }}>{row.servers}</TableCell>
              <TableCell>{row.time}</TableCell>
              <TableCell>
              <CheckCircle sx={{ color: "#14DB77", }}>add_circle</CheckCircle> 
              </TableCell>
              <TableCell>
                <Button variant="contained" sx={{backgroundColor: "#499DFF", py: 0.5, }}>
                  View Result
                </Button>
              </TableCell>
              <TableCell>
                <BasicPopover />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table><br/><br/>
      <Stack spacing={2}>
        <Pagination count={1539} color="primary" />
      </Stack><br/><br/>
    </TableContainer>
  );
}
