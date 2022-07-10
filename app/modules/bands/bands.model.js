import { RESTDataSource } from 'apollo-datasource-rest';
import 'dotenv/config'

// Querys
// band
// bands
// Mutation
// createBand
// deleteBand
// updateBand

export class BandAPI extends RESTDataSource {
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
              
            }
        )
    }

    async update( input ) {
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