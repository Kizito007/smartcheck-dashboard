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
import MoreVert from "@mui/icons-material/MoreVert"
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function createData(sn, name, ipAddress, cpu, memory, storage) {
    return { sn, name, ipAddress, cpu, memory, storage };
}
  
const rows = [
    createData('1', 'Server name goes here', 'IP address goes here', '85.6%', '73.9', '50'),
    createData('2', 'Server name goes here', 'IP address goes here', '85.6%', '73.9', '50'),
    createData('3', 'Server name goes here', 'IP address goes here', '85.6%', '73.9', '50'),
    createData('4', 'Server name goes here', 'IP address goes here', '85.6%', '73.9', '50'),
    createData('5', 'Server name goes here', 'IP address goes here', '85.6%', '73.9', '50'),
];

const ServerScreen = () => {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
  return (
    <div className="backdrop" >
        <div style={{ padding: "50px", background: "#fff" }}>
        <FormControl sx={{ m: 3, minWidth: '120' }} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-weight">Enter a search keyword</InputLabel>
          <OutlinedInput
            id="outlined-adornment-weight"
            // value={values.weight}
            // onChange={handleChange('weight')}
            startAdornment={<InputAdornment position="start">🔍</InputAdornment>}
            label="Enter a search keyword"
          />
        </FormControl>
        <FormControl sx={{ m: 3, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-helper-label">Health check status</InputLabel>
            <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={age}
            label="Age"
            onChange={handleChange}
            >
            {/* <MenuItem value="">
                <em>None</em>
            </MenuItem> */}
            <MenuItem value={10}>All Status</MenuItem>
            <MenuItem value={20}>Healthy</MenuItem>
            <MenuItem value={30}>Critical</MenuItem>
            </Select>
        </FormControl> 
        <Button variant="contained" sx={{backgroundColor: "#499DFF", my: 3, float: "right" }}>
            Create Server
        </Button>
        
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
                <TableCell> <b>SERVER NAME</b> </TableCell>
                <TableCell> <b>IP ADDRESS</b> </TableCell>
                <TableCell> <b> CPU(%)</b></TableCell>
                <TableCell> <b>MEMORY(%)</b> </TableCell>
                <TableCell> <b>STORAGE(%)</b> </TableCell>
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
                {/* <TableCell>
                    <Lens sx={{ color: "#14DB77", }}>add_circle</Lens> 
                </TableCell> */}
                <TableCell>
                    {row.name}
                </TableCell>
                <TableCell sx={{ color: "#499DFF", }}>{row.ipAddress}</TableCell>
                <TableCell>{row.cpu}</TableCell>
                <TableCell>
                {row.memory}
                </TableCell>
                <TableCell>
                {row.storage}
                </TableCell>
                <TableCell>
                    <Button variant="contained" sx={{backgroundColor: "#499DFF", py: 0.5, }}>
                    Edit
                    </Button>
                </TableCell>
                <TableCell>
                <MoreVert sx={{ color: "#f1f3f5", }}>add_circle</MoreVert> 
                </TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table><br/><br/>
        <Stack spacing={2}>
            <Pagination count={1539} color="primary" />
        </Stack><br/><br/>
        </TableContainer>
        </div>
    </div>
  )
}

export default ServerScreen