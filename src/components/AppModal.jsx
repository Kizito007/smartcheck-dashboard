import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const AppModal = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

  return (
    <div>
    <Button variant="contained" onClick={handleOpen}
        sx={{backgroundColor: "#499DFF", my: 3, float: "right" }}>
        Add Application
    </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Define Application
          </Typography><br/>
          <Typography sx={{ m: 1 }}>
            Application Name
          </Typography>
          <TextField id="outlined-basic" variant="outlined" />
          <Typography sx={{ m: 1 }}>
            Application Type
          </Typography>
          <TextField id="outlined-basic" variant="outlined" />

          <Typography sx={{ m: 1 }}>
            Application Dcsc
          </Typography>
          <TextField id="outlined-basic" variant="outlined" />

          <Typography sx={{ m: 1 }}>
            Application Port
          </Typography>
          <TextField id="outlined-basic" variant="outlined" />
          <Typography sx={{ m: 1 }}>
            End point
          </Typography>
          <TextField id="outlined-basic" variant="outlined" /><br/><br/>
          <Typography sx={{ m: 1 }}>
            Host/Server
          </Typography>
          <FormControlLabel control={<Checkbox defaultChecked />} label="All Server" />
          <Typography sx={{ m: 1 }}>
            Select Application
          </Typography>
          <br/><br/>

          <Button variant="contained" sx={{color: "#222222", backgroundColor: "#fff", py: 0.5, mx: 2 }}>Cancel</Button>
          <Button variant="contained" sx={{backgroundColor: "#49D3FF", py: 0.5, }}>Create</Button>
        </Box>
        {/* <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        > */}
        {/* </Box> */}
      </Modal>
    </div>
  )
}

export default AppModal