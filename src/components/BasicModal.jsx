import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

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

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
        <Typography sx={{ p: 2 }} onClick={handleOpen}>
            Deactivate
        </Typography>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Deactivate Server
          </Typography>
          <Typography id="modal-modal-description" sx={{ my: 3 }}>
            <span>Are you sure you want to deactivate </span>
            <b>Server name1? If you continue you will no longer receive data from this server</b>
          </Typography>
          <Button variant="contained" sx={{backgroundColor: "#0D724F", py: 0.5, }}>Deactivate</Button>
        </Box>
      </Modal>
    </div>
  );
}
