import React, { ReactElement } from 'react';
import { createStyles, makeStyles, Theme, Toolbar, AppBar, Container, Typography, Button } from '@material-ui/core';
import MenuDrawer from './MenuDrawer';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
    },
    appBar: {
      backgroundColor: theme.palette.background.default,
    },
  }),
);

interface Props {
  title: string;
}

const ButtonAppBar: React.FC<Props> = ({ title }): ReactElement => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="static">
        <Toolbar>
          <MenuDrawer />

          <Container maxWidth="md">
            <Typography variant="h6" className={classes.title}>
              {title}
            </Typography>
          </Container>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default ButtonAppBar;
