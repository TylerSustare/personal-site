import React, { ReactElement } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ButtonAppBar from '../../src/components/shared/ButtonAppBar';

export default function About(): ReactElement {
  return (
    <>
      <ButtonAppBar title="TCP vs UDP" />
      <Container maxWidth="sm">
        <Box my={4}>
          <Typography variant="h4" component="h1" gutterBottom>
            Explain the difference between TCP and UDP
          </Typography>
          <Typography variant="h6" component="h3" gutterBottom>
            TCP (Transmission Control Protocol)
          </Typography>
          <Typography variant="body1" component="h6" gutterBottom>
            <ol>
              <li>
                TCP is handshake based.
                <ul>
                  <li>
                    There must be an established connection between sender and receiver <strong>before</strong> data can
                    be sent
                  </li>
                  <li>3 way handshake</li>
                  <li>TCP is slower to connect because of this handshake</li>
                </ul>
              </li>
              <li>TCP can handle and recover from packet loss</li>
              <li>TCP is more reliable than UDP</li>
              <li>TCP can increase latency because it will back off if it knows the network is busy</li>
              <li>TCP segments are numbered. You can reliably count on the order of packets received is correct</li>
              <ul>
                <li>You won&apos;t get a chunk of a PDF in the middle that should have been at the end</li>
              </ul>
            </ol>
          </Typography>
          <Typography variant="h6" component="h3" gutterBottom>
            UDP (User Datagram Protocol)
          </Typography>
          <Typography variant="body1" component="h6" gutterBottom>
            <ol>
              <li>UDP is a connection-less protocol</li>
              <li>
                UDP is less &quot;reliable&quot; since it doesn&apos;t require an ack(nowledgement) of each segment
              </li>
              <li>
                UDP is commonly used for applications that can handle some loss of packets. like streaming audio or
                video
              </li>
              <li>UDP is also used in DNS queries</li>
            </ol>
          </Typography>
        </Box>
      </Container>
    </>
  );
}
