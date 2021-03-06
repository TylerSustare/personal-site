import React, { ReactElement } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Menu, Info, Home, Work, FreeBreakfast } from '@material-ui/icons';
import Link from 'next/link';

import { IconButton } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

type Anchor = 'top' | 'left' | 'bottom' | 'right';
const drawerDirection = 'left';

export default function MenuDrawer(): ReactElement {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor: Anchor, open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor: Anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List subheader={<ListSubheader>Pages</ListSubheader>}>
        <Link href="/">
          <ListItem button>
            <ListItemIcon>{<Home />}</ListItemIcon>
            <ListItemText primary="Welcome" />
          </ListItem>
        </Link>
        <Link href="/about">
          <ListItem button>
            <ListItemIcon>{<Info />}</ListItemIcon>
            <ListItemText primary="About Me" />
          </ListItem>
        </Link>
        <Link href="/portfolio">
          <ListItem button>
            <ListItemIcon>{<Work />}</ListItemIcon>
            <ListItemText primary="Portfolio" />
          </ListItem>
        </Link>
      </List>
      <Divider />
      <List>
        <Link href="/thoughts">
          <ListItem button>
            <ListItemIcon>{<FreeBreakfast />}</ListItemIcon>
            <ListItemText primary="Coffee Thoughts" />
          </ListItem>
        </Link>
      </List>
    </div>
  );

  return (
    <div>
      <IconButton
        onClick={toggleDrawer(drawerDirection, true)}
        edge="start"
        className={classes.menuButton}
        color="inherit"
        aria-label="menu"
      >
        <Menu />
      </IconButton>
      <Drawer anchor={drawerDirection} open={state[drawerDirection]} onClose={toggleDrawer(drawerDirection, false)}>
        {list(drawerDirection)}
      </Drawer>
    </div>
  );
}
