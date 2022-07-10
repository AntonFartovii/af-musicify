import { gql } from "apollo-server";

// Querys
// artist
// artists
// Mutation
// createArtist
// deleteArtist
// updateArtist

export const typeDefsArtists = gql`
type Artist {
    _id: ID!
    firstName: String
    secondName: String
    middleName: String
    birthDate: String
    birthPlace: String
    country: String
    instruments: [String]
}

input InputArtist {
  firstName: String
  secondName: String
  middleName: String
  birthDate: String
  birthPlace: String
  country: String
  instruments: [String]
}

type Query {
    artist(id: ID!): Artist
    artists(limit: Int, offset: Int): [Artist]
  }

type Mutation {
    createArtist(artist: InputTrack): Artist
    deleteArtist(id: ID!): Artist
    updateArtist(artist: InputTrack): Artist
  }
`; 