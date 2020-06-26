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
            <Typography variant="h4" component="h1" gutterBottom>
              Next.js example
            </Typography>
            <LinkButton variant="contained" color="primary" href="/about">
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
