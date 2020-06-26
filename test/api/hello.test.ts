import http from 'http';
import fetch from 'isomorphic-unfetch';
import listen from 'test-listen';
import { apiResolver } from 'next-server/dist/server/api-utils';
import { NextApiRequest, NextApiResponse } from 'next';
import { handler } from '../../pages/api/hello';

describe('/ handler', () => {
  test('responds 200 to authed GET', async () => {
    expect.assertions(2);

    const requestHandler = (req: NextApiRequest, res: NextApiResponse) => {
      return apiResolver(req, res, undefined, handler);
    };

    // limitation of http.createServer with TS for as unknown as http.RequestListener
    const server = http.createServer((requestHandler as unknown) as http.RequestListener);
    const url = await listen(server);
    const response = await fetch(`${url}?name=scooby`);
    const data = await response.json();
    expect(data).toStrictEqual({ name: 'scooby' });
    expect(response.status).toBe(200);
    return server.close();
  });
});
