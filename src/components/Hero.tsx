import { Button, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import Image from 'next/image';
import { url } from 'inspector';

const Hero = () => {
  return (
    <section>
      <Grid container minHeight='80vh' sx={{ backgroundColor: '#2da' }}>
        <Grid item xs={12} sm={8}>
          <Grid
            container
            sx={{
              //backgroundColor: 'red',
              height: '100%',
            }}
            alignContent='center'
            p={4}
          >
            <Grid item xs={12} textAlign='center'>
              <Typography fontSize='2em' component='h1'>
                Welcome to website
              </Typography>
              <Typography pt={2}>
                We offer this and that, we specialize in this and that. We are
                proffesionals.
              </Typography>
              <Typography pt={2}>
                <Button variant='contained' color='primary'>
                  {' '}
                  Läs mer
                </Button>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          sm={4}
          sx={{
            position: 'relative',
            display: { xs: 'block', sm: 'block' },
            minHeight: { xs: '30vh' },
            opacity: '.79',
          }}
        >
          <Image
            alt='washing maschine'
            src='/wash-maschine.jpg'
            layout='fill'
          />
        </Grid>
      </Grid>
    </section>
  );
};

export default Hero;
