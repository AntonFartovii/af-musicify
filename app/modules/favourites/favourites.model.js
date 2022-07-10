import { RESTDataSource } from 'apollo-datasource-rest';
import 'dotenv/config'

// addTrackToFavourites
// addBandToFavourites
// addArtistToFavourites
// addGenreToFavourites

export class FavouriteAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = process.env.FAVOURITES_URL;
      }
}