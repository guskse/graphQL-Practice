export const typeDefs = `#graphql
    type Game {
        id: ID!
        title: String!
        platform: [String!]! # array of String and it can't be null
    }
    type Review {
        id: ID!
        rating: Int!
        content: String!
    }
    type Author {
        id:ID!
        name:String!
        verified:Boolean
    }

    #Entry Points (this is required)
    type Query {
        reviews: [Reviews]
        games: [Game]
        authors: [Author]
    }
`;

//graphQL data types we can use:
//int, float, string, boolean, ID

//can make a field required adding an exclamation mark "!" after it. Example:
//title: String!  -> will make title field a required field in the type Game.
