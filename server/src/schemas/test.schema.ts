import {
	addMockFunctionsToSchema,
	gql,
	makeExecutableSchema
} from "apollo-server";
import { GraphQLSchema } from "graphql";

const testSchema: GraphQLSchema = makeExecutableSchema({
	typeDefs: gql`
		type Query {
			testMessage2: String
		}
	`
});
addMockFunctionsToSchema({ schema: testSchema });

export default testSchema;