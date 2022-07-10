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

type Query {
    album(id: ID!): Album
    albums(limit: Int, offset: Int): [Album]
  }

type Mutation {
    createAlbum( 
      name: String
      released: Int
      artists: [ID]
      bands: [ID]
      tracks: [ID]
      genres: [ID]
      image: String): Album
    deleteAlbum(input: ID!): Album
    updateAlbum(
      id: ID!
      name: String
      released: Int
      artists: [ID]
      bands: [ID]
      tracks: [ID]
      genres: [ID]
      image: String): Album
  }
`; 