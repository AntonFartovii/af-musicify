import { RESTDataSource } from 'apollo-datasource-rest';
import 'dotenv/config'

export class UserAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = process.env.USERS_URL;
      }

    willSendRequest( request ) {
        console.log(this.context.token);
        request.headers.set('Authorization', this.context.token);
        request.headers.set('authorization', this.context.token);
      }   

    async login( login ) {
        const data = this.post(
            `/login`, 
            { email: login.mail, password: login.pass }
        );
        return data
    }

    async findUser( id ) {
        return this.get(
            `/${encodeURIComponent(id)}`
        )
    }

    async createUser( user ) {
        console.log( user )
        return this.post(
            `/register`,
            {     
                "firstName": user.firstName,
                "lastName":  user.lastName,
                "password":  user.password,
                "email":     user.email
            }
        )
    }
}