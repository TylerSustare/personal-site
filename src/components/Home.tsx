import { ReactElement } from 'react';
import { Box, Container, Typography } from '@material-ui/core';
import Copyright from './shared/Copyright';
import ProTip from './ProTip';
import LinkButton from './shared/LinkButton';
import ButtonAppBar from './shared/ButtonAppBar';

export const HomeContent = function (): ReactElement {
  return (
    <>
      <ButtonAppBar title="Welcome" />
      <Container maxWidth="md">
        <Box display="flex" alignItems="center" justifyContent="center">
          <Box my={4}>
            <Typography variant="h2" component="h1" gutterBottom>
              👋 Hi, I&apos;m Tyler
            </Typography>
            <>
              <Box padding=".4rem">
                <Typography variant="body1" component="p" gutterBottom>
                  I like to do coding stuff and spend time with my family. 👨‍👩‍👧‍👦
                  <br />
                  Here is the important stuff about the people I love, my family. If you would like to see more about me
                  professionally go here
                  <LinkButton variant="text" color="primary" href="/about">
                    Professional About Me
                  </LinkButton>
                </Typography>
              </Box>
              <Box padding=".4rem">
                <Typography variant="h3" component="h2" gutterBottom>
                  👩‍🏫/🐰Bunny
                </Typography>
                <Typography variant="body1" component="p" gutterBottom>
                  My wife of 7 years, and middle school sweetheart is the backbone of our home, and the reason for any
                  and all of the successes we&apos;ve had as a team. She&apos;s the greatest wife and mommy on the
                  planet and I will absolutely fight you over that.
                </Typography>
              </Box>
              <Box padding=".4rem">
                <Typography variant="h3" component="h2" gutterBottom>
                  👧 Smidge
                </Typography>
                <Typography variant="body1" component="p" gutterBottom>
                  Sweetest and most creative little girl in the whole world.
                </Typography>
              </Box>
              <Box padding=".4rem">
                <Typography variant="h3" component="h2" gutterBottom>
                  👶 Denny
                </Typography>
                <Typography variant="body1" component="p" gutterBottom>
                  Such a kind and thoughtful little guy.
                </Typography>
              </Box>
              <ProTip />
              <Copyright />
            </>
          </Box>
        </Box>
      </Container>
    </>
  );
};
