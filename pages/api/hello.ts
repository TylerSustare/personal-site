// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from 'next';

export const handler = (req: NextApiRequest, res: NextApiResponse): void => {
  res.statusCode = 200;
  const name = req.query.name ?? 'Tyler Sustare';
  return res.json({ name });
};

export default handler;
