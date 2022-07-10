import { RESTDataSource } from 'apollo-datasource-rest';
import 'dotenv/config'

// Querys
// album
// albums
// Mutation
// createAlbum
// deleteAlbum
// updateAlbum

export class AlbumAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = process.env.ALBUMS_URL;
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

    async create( input ) {
        return this.post(
            `/`,
            {     
            }
        )
    }

    async update( id ) {
        return this.put(
            `/${encodeURIComponent(id)}`,
            {       
            }
        )
    }

    async delete( id ) {
        return this.delete(
            `/${encodeURIComponent(id)}`
        )
    }
}