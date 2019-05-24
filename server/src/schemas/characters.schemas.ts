import {
	addMockFunctionsToSchema,
	gql,
	makeExecutableSchema
} from "apollo-server";
import { GraphQLSchema } from "graphql";

const charactersSchema: GraphQLSchema = makeExecutableSchema({
	typeDefs: gql`
		type Query {
			characters: [Character]
		},
        type Character {
			id: String
			name: String
			status: String
			image: String
		}
	`
});
addMockFunctionsToSchema({ schema: charactersSchema });

export default charactersSchema;