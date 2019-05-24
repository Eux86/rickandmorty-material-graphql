import { ApolloServer } from 'apollo-server';
import schemas from "./schemas/schemas";
import resolvers from "./resolvers/resolvers"
import { GraphQLSchema } from "graphql";
import { mergeSchemas } from "graphql-tools";

import { environment } from './environment';

const schema: GraphQLSchema = mergeSchemas({
	schemas,
	resolvers
});

const server = new ApolloServer({
    schema,
    introspection: environment.apollo.introspection,
    playground: environment.apollo.playground
});

server.listen()
    .then(({ url }: any) => console.log(`Server listening on: ${url}`))

// Hot Module Replacement
if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => console.log('Module disposed. '));
}