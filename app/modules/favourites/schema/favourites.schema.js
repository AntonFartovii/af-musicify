import { gql } from "apollo-server";

// addTrackToFavourites
// addBandToFavourites
// addArtistToFavourites
// addGenreToFavourites

export const typeDefsFavourite = gql`
type Favourites {
  _id: ID!
  userId: ID
  bands: [Band]
  genres: [Genre]
  artists: [Artist]
  tracks: [Track]
}
`; 