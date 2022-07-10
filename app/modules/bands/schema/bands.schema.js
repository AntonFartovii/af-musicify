import { gql } from "apollo-server";

// Querys
// band
// bands
// Mutation
// createBand
// deleteBand
// updateBand

export const typeDefsBands = gql`
type Band {
  _id: ID!
  name: String
  origin: String
  website: String
  genres: [Genre]
}

input InputBand {
  name: String
  origin: String
  website: String
}

type Query {
    band(id: ID!): Band
    bands(limit: Int, offset: Int): [Band]
  }

type Mutation {
    createBand(input: InputBand): Band
    deleteBand(id: ID!): Artist
    updateBand(input: InputBand): Band
  }
`; 