import { ReactElement } from 'react';
import { Box, Container, Typography } from '@material-ui/core';
import Copyright from '../Copyright';
import ProTip from '../ProTip';
import LinkButton from '../LinkButton';
import ButtonAppBar from '../ButtonAppBar';

const Home = function (): ReactElement {
  return (
    <>
      <ButtonAppBar title="Home" />
      <Box display="flex" alignItems="center" justifyContent="center">
        <Container maxWidth="sm">
          <Box my={4}>
            <Typography variant="h3" component="h1" gutterBottom>
              👋 Hi I&apos;m Tyler
            </Typography>
            <Typography variant="body1" component="p" gutterBottom>
              I like to do coding stuff and spending time with my family. 👨‍👩‍👧‍👦
            </Typography>

            <LinkButton variant="text" color="primary" href="/about">
              Go to the about page
            </LinkButton>
            <ProTip />
            <Copyright />
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Home;
export { Home };
