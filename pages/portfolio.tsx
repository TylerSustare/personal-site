import React, { ReactElement } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import LinkButton from '../src/components/shared/LinkButton';
import ButtonAppBar from '../src/components/shared/ButtonAppBar';

export default function About(): ReactElement {
  return (
    <>
      <ButtonAppBar title="Portfolio" />
      <Container maxWidth="md">
        <Box my={4}>
          <Typography variant="h4" component="h1" gutterBottom>
            Next.js example
          </Typography>
          <LinkButton variant="contained" color="primary" href="/">
            Go to the main page
          </LinkButton>
        </Box>
      </Container>
    </>
  );
}
