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
          <OutlinedInput
            id="outlined-adornment-weight"
            // value={values.weight}
            // onChange={handleChange('weight')}
            endAdornment={<InputAdornment position="end">🔍</InputAdornment>}
            aria-describedby="outlined-weight-helper-text"
            inputProps={{
              'aria-label': 'weight',
            }}
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
            <MenuItem value="">
                <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
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
            <MenuItem value="">
                <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
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
            <MenuItem value="">
                <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
            </Select>
        </FormControl> 
        
    </div>
  )
}
