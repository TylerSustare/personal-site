import React, { ReactElement } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import LinkButton from '../src/components/shared/LinkButton';
import ButtonAppBar from '../src/components/shared/ButtonAppBar';

export default function About(): ReactElement {
  return (
    <>
      <ButtonAppBar title="About Me" />
      <Container maxWidth="sm">
        <Box my={4}>
          <Typography align="center" variant="h4" component="h1" gutterBottom>
            Work
          </Typography>
          <Typography align="justify" variant="body1" component="h6" gutterBottom>
            After earning my business degree and getting my first job in digital advertising, I found my true passion in
            programming. With the experience and education I have in business I feel I can bring unique
            business-oriented solutions to a project. By far my favorite thing about programming is learning new things
            and solving interesting problems. I really enjoy learning new frameworks and as much as I can about
            different cloud services, including, AWS, Azure, and GCP.
          </Typography>
          <Box display="flex" justifyContent="center">
            <LinkButton variant="contained" color="primary" href="/portfolio">
              Check Out My Side Projects
            </LinkButton>
          </Box>
        </Box>
      </Container>
    </>
  );
}
