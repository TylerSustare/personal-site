import React, { ReactElement } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ButtonAppBar from '../../src/components/shared/ButtonAppBar';
import { Link } from '@material-ui/core';

export default function About(): ReactElement {
  return (
    <>
      <ButtonAppBar title="About Me" />
      <Container maxWidth="md">
        <Box my={4}>
          <Typography align="center" variant="h3" component="h1" gutterBottom>
            Kinda Blog-ish Things
          </Typography>
          <Typography align="center" variant="h4" component="h2" gutterBottom>
            Most Likely With a Cup Of Coffee
          </Typography>
          <Typography variant="h4" component="h1" gutterBottom>
            <Link href="/wisdom/tcp-vs-udp">templates</Link>
          </Typography>
        </Box>
      </Container>
    </>
  );
}
