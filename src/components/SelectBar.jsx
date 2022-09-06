import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectBar() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div className='selectContainer'>
        <FormControl sx={{ m: 1, minWidth: '120' }} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-weight">Enter a search keyword</InputLabel>
          <OutlinedInput
            id="outlined-adornment-weight"
            // value={values.weight}
            // onChange={handleChange('weight')}
            startAdornment={<InputAdornment position="start">🔍</InputAdornment>}
            label="Enter a search keyword"
          />
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-helper-label">All application</InputLabel>
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
            <MenuItem value={10}>All Application</MenuItem>
            <MenuItem value={10}>Application name 1</MenuItem>
            <MenuItem value={20}>Application name 2</MenuItem>
            </Select>
        </FormControl> 
        <FormControl sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-helper-label">All servers</InputLabel>
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
            <MenuItem value={20}>All servers</MenuItem>
            <MenuItem value={20}>Server 1</MenuItem>
            <MenuItem value={30}>Server 2</MenuItem>
            </Select>
        </FormControl> 
        <FormControl sx={{ m: 1, minWidth: 120 }}>
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
        
    </div>
  )
}
