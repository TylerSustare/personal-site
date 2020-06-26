import React, { ReactElement } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ProTip from '../src/ProTip';
import Copyright from '../src/Copyright';
import LinkButton from '../src/LinkButton';
import ButtonAppBar from '../src/ButtonAppBar';

export default function About(): ReactElement {
  return (
    <>
      <ButtonAppBar title="About Me" />
      <Container maxWidth="sm">
        <Box my={4}>
          <Typography variant="h4" component="h1" gutterBottom>
            Next.js example
          </Typography>
          <LinkButton variant="contained" color="primary" href="/">
            Go to the main page
          </LinkButton>
          <ProTip />
          <Copyright />
        </Box>
      </Container>
    </>
  );
}
