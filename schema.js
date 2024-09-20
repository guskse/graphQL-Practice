export const typeDefs = `#graphql
    type Game {
        id: ID!
        title: String!
        platform: [String!]! # array of String and it can't be null
        reviews: [Review!]
    }
    type Review {
        id: ID!
        rating: Float!
        content: String!
        game: Game!
        author: Author!
    }
    type Author {
        id:ID!
        name:String!
        verified:Boolean
        reviews: [Review!]
    }

    #Entry Points (this is required for fetching data GET requests)
    type Query {
        reviews: [Review]
        review(id: ID!): Review

        games: [Game]
        game(id: ID!): Game
        
        authors: [Author]
        author(id: ID!): Author
    }

    #mutations will allow us to POST, PUT and DELETE data
    type Mutation {
        addGame(game: AddGameInput!): Game
        deleteGame(id:ID!): [Game]
        updateGame(id:ID!, edits: EditGameInput!): Game
    }

    input AddGameInput {
        title: String!,
        platform: [String!]!
    }

    input EditGameInput {
        title:String
        platform:[String!]
    }
    
`;

//graphQL data types we can use:
//int, float, string, boolean, ID

//can make a field required adding an exclamation mark "!" after it. Example:
//title: String!  -> will make title field a required field in the type Game.
