import { ApolloServer } from 'apollo-server-micro';
import {
  loadFilesSync,
  makeExecutableSchema,
  mergeTypeDefs,
} from 'graphql-tools';
// import { schema as schemaGlob } from '../../../.graphql-let.yml';

const typesArray = loadFilesSync(`**/*.graphqls`);

const typeDefs = mergeTypeDefs(typesArray);
const resolvers = {
  Query: {
    hello() {
      return {
        world: `hello world!`,
      };
    },
  },
};

const schema = makeExecutableSchema({ typeDefs, resolvers });

export const config = {
  api: {
    bodyParser: false,
  },
};

const apolloServer = new ApolloServer({ schema });

export default apolloServer.createHandler({ path: `/api/graphql` });
