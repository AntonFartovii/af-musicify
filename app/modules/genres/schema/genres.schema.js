import { gql } from "apollo-server";

// Querys
// genre
// genres
// Mutation
// createGenre
// deleteGenre
// updateGenre

export const typeDefsGenres = gql`
type Genre {
  _id: ID!
  name: String
  description: String
  country: String
  year: Int
}

input InputGenre {
  name: String
  description: String
  country: String
  year: Int
}

type Query {
    genre(id: ID!): Genre
    genres(limit: Int, offset: Int): [Genre]
  }

type Mutation {
    createGenre(input: InputGenre): Genre
    deleteGenre(id: ID!): Genre
    updateGenre(input: InputGenre): Genre
  }
`; 