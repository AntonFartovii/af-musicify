import { RESTDataSource } from 'apollo-datasource-rest';
import 'dotenv/config'

// Querys
// artist
// artists
// Mutation
// createArtist
// deleteArtist
// updateArtist

export class FavouriteAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = process.env.FAVOURITES_URL;
      }

    // async getById( id ) {
    //     return this.get(
    //         `/${encodeURIComponent(id)}`
    //     );
    // }

    // async getAll( limit = 5, offset = 5 ) {
    //     const data = await this.get('/', {
    //         per_page: limit,
    //       });
    //       return data.items;
    // }

    // async create( artist ) {
    //     return this.post(
    //         `/`,
    //         {     
    //             "firstName":  artist.firstName,
    //             "secondName": artist.firstName,
    //             "country":    artist.country 
    //         }
    //     )
    // }

    // async update( track ) {
    //     return this.put(
    //         `/${encodeURIComponent(id)}`,
    //         {     
    //             "firstName":  artist.firstName,
    //             "secondName": artist.firstName,
    //             "country":    artist.country       
    //         }
    //     )
    // }

    // async delete( id ) {
    //     return this.delete(
    //         `/${encodeURIComponent(id)}`
    //     )
    // }
}