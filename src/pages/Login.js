// material
import { styled } from '@mui/material/styles';
import { Card, Stack, Container, Typography } from '@mui/material';
// layouts
// components
import Page from '../components/Page';
import { MHidden } from '../components/@material-extend';
import { LoginForm } from '../components/authentication/login/index';
import useWindowDimensions from './ScreenSize';
import img from '../img/cc.png';
import '../App.css';
// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex'
  }
}));

const SectionStyle = styled(Card)(({ theme }) => ({
  width: '100%',
  maxWidth: 464,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  margin: theme.spacing(2, 0, 2, 2)
}));

const ContentStyle = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  display: 'flex',
  minHeight: '100vh',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: theme.spacing(12, 0)
}));

// ----------------------------------------------------------------------

export default function Login() {
  const { width } = useWindowDimensions();
  return (
    <RootStyle title="Onkologiya Xorazm">
      {width > 880 ? (
        <MHidden width="mdDown">
          <SectionStyle>
            <Typography variant="h5" sx={{ mt: 10, mb: 5 }} style={{ textAlign: 'center' }}>
              RIO VA RIATM Xorazm Filiali
            </Typography>
            <img src={img} alt="login" />
          </SectionStyle>
        </MHidden>
      ) : (
        ''
      )}

      <Container maxWidth="sm">
        <ContentStyle>
          <Stack sx={{ mb: 5 }}>
            <Typography sx={{ color: 'text.secondary' }}>Ma'lumotlaringizni kiriting.</Typography>
          </Stack>

          <LoginForm />
        </ContentStyle>
      </Container>
    </RootStyle>
  );
}
