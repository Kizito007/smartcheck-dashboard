import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import BasicModal from './BasicModal';
import MoreVert from "@mui/icons-material/MoreVert"

export default function BasicPopover() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  let deactivate = false;

  return (
    <div>
      <MoreVert aria-describedby={id} onClick={handleClick}>add_circle</MoreVert> 

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <BasicModal deactivate={deactivate} />
      </Popover>
    </div>
  );
}
