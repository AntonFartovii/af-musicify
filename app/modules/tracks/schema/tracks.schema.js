import { gql } from "apollo-server";

// Tracks
// createTrack
// deleteTrack
// updateTrack
// track
// tracks

export const typeDefsTracks = gql`
type Track {
    _id: ID!
    title: String!
    album: Album
    artists: [Artist]
    bands: [Band]
    duration: Int
    released: Int
    genres: [Genre]
}

input InputTrack {
    title: String!
    albumId: ID
    bandsIds: [ID]
    artistsIds: [ID]
    duration: Int
    released: Int
    genresIds: [ID]
}

type Query {
    track(id: ID!): Track
    tracks(limit: Int, offset: Int): [Track]
  }

type Mutation {
    createTrack(  
      title: String!
      albumId: ID
      bandsIds: [ID]
      artistsIds: [ID]
      duration: Int
      released: Int
      genresIds: [ID]): Track
    deleteTrack(id: ID!): Track
    updateTrack(
      id: ID!
      title: String
      albumId: ID
      bandsIds: [ID]
      artistsIds: [ID]
      duration: Int
      released: Int
      genresIds: [ID]): Track
  }
`; 