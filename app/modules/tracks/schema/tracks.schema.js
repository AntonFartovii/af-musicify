import { gql } from "apollo-server";

// Tracks
// createTrack
// deleteTrack
// updateTrack
// track
// tracks

export const typeDefsTracks = gql`
type Track {
    id: ID!
    title: String!
    duration: Int
    released: Int
    artists: [Artist]
}

input InputTrack {
    title: String!
    duration: Int
    released: Int
}

type Query {
    track(id: ID!): Track
    tracks(limit: Int, offset: Int): [Track]
  }

type Mutation {
    createTrack(track: InputTrack): Track
    deleteTrack(id: ID!): Track
    updateTrack(track: InputTrack): Track
  }
`; 