import { ApolloServer } from 'apollo-server-micro';
import { join } from 'path';
import { cwd } from 'process';
import {
  loadFilesSync,
  makeExecutableSchema,
  mergeResolvers,
  mergeTypeDefs,
} from 'graphql-tools';

const typeDefsGlob = join(cwd(), `./src/schema/**/*types.gql`);
const resolversGlob = join(cwd(), `./src/schema/**/*resolvers.ts`);

const typesArray = loadFilesSync(typeDefsGlob);

const resolversArray = loadFilesSync(resolversGlob, { useRequire: false });

const typeDefs = mergeTypeDefs(typesArray);
const resolvers = mergeResolvers(resolversArray);

const schema = makeExecutableSchema({ typeDefs, resolvers });

export const config = {
  api: {
    bodyParser: false,
  },
};

const apolloServer = new ApolloServer({ schema });

export default apolloServer.createHandler({ path: `/api/graphql` });
