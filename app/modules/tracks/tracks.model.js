import { RESTDataSource } from 'apollo-datasource-rest';
import 'dotenv/config'

// Tracks
// createTrack
// deleteTrack
// updateTrack

export class TrackAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = process.env.TRACKS_URL;
      }

    async getById( id ) {
        return this.get(
            `/${encodeURIComponent(id)}`
        );
    }

    async getAll( limit = 5, offset = 5 ) {
        const data = await this.get('/', {
            per_page: limit,
          });
          return data.items;
    }

    async create( track ) {
        return this.post(
            `/`,
            {     
                "title": track.title,
                "duration": track.duration,
                "released": track.released        
            }
        )
    }

    async update( track ) {
        return this.put(
            `/${encodeURIComponent(id)}`,
            {     
                "title": track.title,
                "duration": track.duration,
                "released": track.released        
            }
        )
        
    }

    async delete( id ) {
        return this.delete(
            `/${encodeURIComponent(id)}`
        )
    }
}