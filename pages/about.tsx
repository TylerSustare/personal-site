import React, { ReactElement } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ProTip from '../src/components/ProTip';
import Copyright from '../src/components/shared/Copyright';
import LinkButton from '../src/components/shared/LinkButton';
import ButtonAppBar from '../src/components/shared/ButtonAppBar';

export default function About(): ReactElement {
  return (
    <>
      <ButtonAppBar title="About Me" />
      <Container maxWidth="sm">
        <Box my={4}>
          <Typography variant="h4" component="h1" gutterBottom>
            Work
          </Typography>
          <LinkButton variant="contained" color="primary" href="/">
            Check Out My Side Projects
          </LinkButton>
          <ProTip />
          <Copyright />
        </Box>
      </Container>
    </>
  );
}
