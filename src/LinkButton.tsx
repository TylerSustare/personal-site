// Button is throwing a fit
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React from 'react';
import Link from './Link';
import { Button } from '@material-ui/core';

interface Props {
  href: string;
  color: 'default' | 'primary' | 'secondary';
  variant: 'outlined' | 'contained' | 'text';
}

const LinkButton: React.FC<Props> = ({ children, href, color, variant }) => (
  <Button variant={variant} color={color} component={Link} naked href={href}>
    {children}
  </Button>
);

export default LinkButton;
