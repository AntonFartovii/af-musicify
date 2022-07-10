import { RESTDataSource } from 'apollo-datasource-rest';
import 'dotenv/config'

// Querys
// artist
// artists
// Mutation
// createArtist
// deleteArtist
// updateArtist

export class ArtistAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = process.env.ARTISTS_URL;
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
                "firstName":  input.firstName,
                "secondName": input.firstName,
                "country":    input.country 
            }
        )
    }

    async update( input ) {
        return this.put(
            `/${encodeURIComponent(id)}`,
            {     
                "firstName":  input.firstName,
                "secondName": input.firstName,
                "country":    input.country       
            }
        )
    }

    async delete( id ) {
        return this.delete(
            `/${encodeURIComponent(id)}`
        )
    }
}