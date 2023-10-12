import { Grid, IconButton, Typography } from '@mui/material';
import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import Image from 'next/image';
const Footer = () => {
  return (
    <Grid sx={{ backgroundColor: '#141537', color: 'white' }} p={2}>
      <Grid container direction='row' spacing={2} p={1}>
        <Grid item xs={12} sm={4}>
          <Image
            style={{ display: 'flex', justifyContent: 'center' }}
            src='/logo.png'
            width={120}
            height={60}
            alt='navbar logo'
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography>Company name AB</Typography>
          <Typography>Address</Typography>
          <Typography>111 22 City</Typography>
          <Typography>Org. nr. 555555-1234</Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography>Phone Icon 555-55550</Typography>
          <Typography>Mail mail@yourcompany.com</Typography>
          <Typography>FB, INSTAGRAM, ETC LOGO</Typography>
        </Grid>
      </Grid>
      <Grid container direction='column' spacing={3} alignItems='center'>
        <Grid item>© Copyright Company Name</Grid>
        <Grid item>
          Powered by{' '}
          <a href='https://sw-tiger.com' style={{ color: '#c36' }}>
            sw-tiger.com
          </a>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Footer;
