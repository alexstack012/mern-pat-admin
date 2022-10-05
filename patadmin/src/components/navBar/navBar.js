import * as React from 'react';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';

const NavBar = (props) => {
  return (
    <>
      <Container>
        <Typography>
          Navbar is rendering
        </Typography>
      </Container>
      <Divider variant="middle" />
    </>
  )
}
export default NavBar;