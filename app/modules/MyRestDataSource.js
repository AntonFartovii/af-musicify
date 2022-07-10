import { RESTDataSource } from 'apollo-datasource-rest';
import 'dotenv/config'

export class MyRestDataSource extends RESTDataSource {
    constructor() {
        super();
      }

    willSendRequest( request ) {
        request.headers.set('Authorization', this.context.token);
        request.headers.set('authorization', this.context.token);
    }   

    async login( user ) {
        const data = this.post(
            `/login`, 
            user
        );
        return data
    }

    async createUser( user ) {
        console.log( user )
        const data =  await this.post(
            `/register`,
            user
        )
        return data
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

    async create( args  ) {
       const res = await this.post(
            `/`,
            args
        )
        return res
    }

    async update( id, args ) {
        console.log ('this.context.token', this.context.token)
        console.log( id )
        console.log( args )
        const res = await this.put(
            `/${encodeURIComponent(id)}`,
                args 
        )
        return res.data
    }

    async delete( id ) {
        return this.delete(
            `/${encodeURIComponent(id)}`
        )
    }
}