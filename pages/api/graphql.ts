// https://github.com/apollographql/apollo-server/tree/master/packages/apollo-server-micro
import { NextApiRequest, NextApiResponse } from 'next';
import { ApolloServer, gql } from 'apollo-server-micro';

interface GqlContext {
  favorite: string;
}

const typeDefs = gql`
  type Query {
    users: [User!]!
  }
  type User {
    name: String
    favorite: String
  }
`;

const resolvers = {
  Query: {
    users(_parent: undefined, _args: undefined, context: GqlContext) {
      return [{ name: 'Tyler', favorite: context.favorite }];
    },
  },
};

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }): GqlContext => {
    const {
      headers: { favorite },
    } = req as NextApiRequest;
    return { favorite: favorite as string };
  },
});

const handler = apolloServer.createHandler({ path: '/api/graphql' });

export const config = {
  api: {
    bodyParser: false,
  },
};

// how to run "middleware" with this setup
export default function (req: NextApiRequest, res: NextApiResponse): Promise<void> {
  req.headers.favorite = 'flapjack';
  return handler(req, res);
}
