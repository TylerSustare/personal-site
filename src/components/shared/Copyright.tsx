import React, { ReactElement } from 'react';
import Typography from '@material-ui/core/Typography';
import MuiLink from '@material-ui/core/Link';
import ProTip from './ProTip';

export default function Copyright(): ReactElement {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      <ProTip />
      {'Copyright © '}
      <MuiLink color="inherit" href="https://material-ui.com/">
        Tyler Sustare
      </MuiLink>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
