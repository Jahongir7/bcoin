import { useState } from 'react';
import { Outlet } from 'react-router-dom';
// material
import { styled } from '@mui/material/styles';
//
import { useSelector } from 'react-redux';
import DashboardNavbar from './DashboardNavbar';
import DashboardSidebar from './DashboardSidebar';

// ----------------------------------------------------------------------

const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 92;

const RootStyle = styled('div')({
  display: 'flex',
  overflow: 'hidden'
});

const MainStyle = styled('div')(({ theme }) => ({
  flexGrow: 1,
  overflow: 'auto',
  minHeight: '100%',
  paddingTop: APP_BAR_MOBILE + 24,
  [theme.breakpoints.up('lg')]: {
    paddingTop: APP_BAR_DESKTOP + 24,
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2)
  }
}));

// ----------------------------------------------------------------------

export default function DashboardLayout() {
  const log = useSelector((state) => state.authReducer.token);
  const [open, setOpen] = useState(false);
  return (
    <>
      {log ? (
        <RootStyle>
          <DashboardNavbar onOpenSidebar={() => setOpen(true)} />
          <DashboardSidebar isOpenSidebar={open} onCloseSidebar={() => setOpen(false)} />
          <MainStyle>
            <Outlet />
          </MainStyle>
        </RootStyle>
      ) : (
        ''
      )}
    </>
  );
}
