import { gql } from "apollo-server";

// Querys
// album
// albums
// Mutation
// createAlbum
// deleteAlbum
// updateAlbum

export const typeDefsAlbum = gql`
type Album {
  _id: ID!
  name: String
  released: Int
  artists: [Artist]
  bands: [Band]
  tracks: [Track]
  genres: [Genre]
  image: String
}

input InputAlbum {
  name: String
  released: Int
  image: String
}

type Query {
    album(id: ID!): Album
    albums(limit: Int, offset: Int): [Album]
  }

type Mutation {
    createAlbum(input: InputAlbum): Album
    deleteAlbum(input: ID!): Album
    updateAlbum(input: InputAlbum): Album
  }
`; 