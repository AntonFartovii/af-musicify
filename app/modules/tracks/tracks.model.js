import { RESTDataSource } from 'apollo-datasource-rest';
import { MyRestDataSource } from '../MyRestDataSource.js';
import 'dotenv/config'

// Tracks
// track
// tracks
// createTrack
// deleteTrack
// updateTrack

export class TrackAPI extends MyRestDataSource {
    constructor() {
        super();
        this.baseURL = process.env.TRACKS_URL;
      }
}