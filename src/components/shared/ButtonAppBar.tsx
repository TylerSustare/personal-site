import React, { ReactElement } from 'react';
import { createStyles, makeStyles, Toolbar, AppBar, Container, Typography, Button, Box } from '@material-ui/core';
import MenuDrawer from './MenuDrawer';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    // title: { flexGrow: 1, },
    // appBar: { backgroundColor: theme.palette.background.default },
  }),
);

interface Props {
  title: string;
}

const ButtonAppBar: React.FC<Props> = ({ title }): ReactElement => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <MenuDrawer />

          <Container maxWidth="md">
            <Box display="flex" alignItems="center" justifyContent="center">
              <Typography variant="h5">{title}</Typography>
            </Box>
          </Container>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default ButtonAppBar;
