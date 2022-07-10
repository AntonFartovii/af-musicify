import { RESTDataSource } from 'apollo-datasource-rest';
import { MyRestDataSource } from '../MyRestDataSource.js';
import 'dotenv/config'

// Querys
// album
// albums
// Mutation
// createAlbum
// deleteAlbum
// updateAlbum

export class AlbumAPI extends MyRestDataSource {
    constructor() {
        super();
        this.baseURL = process.env.ALBUMS_URL;
      }
}