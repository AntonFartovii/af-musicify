import { RESTDataSource } from 'apollo-datasource-rest';
import { MyRestDataSource } from '../MyRestDataSource.js';
import 'dotenv/config'

// Querys
// artist
// artists
// Mutation
// createArtist
// deleteArtist
// updateArtist

export class GenreAPI extends MyRestDataSource {
    constructor() {
        super();
        this.baseURL = process.env.GENRES_URL;
      }
}