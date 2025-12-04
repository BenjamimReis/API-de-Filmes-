import { gql } from 'apollo-server-express';

const typeDefs = gql`
  type Movie {
    id: ID!
    title: String!
    genre: String
    year: Int
    rating: Float
  }

  type Query {
    movies: [Movie]
    movie(id: ID!): Movie
  }

  type Mutation {
    addMovie(title: String!, genre: String, year: Int): Movie
    rateMovie(id: ID!, rating: Float!): Movie
  }
`;

export default typeDefs;
