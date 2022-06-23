// material
import { Button, Box } from '@mui/material';
// components
import { useDispatch } from 'react-redux';
import { Icon } from '@iconify/react';
//
import { logout } from '../../redux/actions/authActions';

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

export default function AccountPopover() {
  const dispatch = useDispatch();
  const handleClick = () => {
    localStorage.setItem('login', '0');
    dispatch(logout());
  };
  return (
    <>
      <Box sx={{ p: 2, pt: 1.5 }}>
        <a href="/" style={{ textDecoration: 'none' }}>
          <Button fullWidth color="inherit" variant="outlined" onClick={handleClick}>
            Chiqish <Icon icon="bx:exit" />
          </Button>
        </a>
      </Box>
    </>
  );
}
