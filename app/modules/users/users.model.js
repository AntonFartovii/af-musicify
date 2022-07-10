import { RESTDataSource } from 'apollo-datasource-rest';
import 'dotenv/config'
import { MyRestDataSource } from '../MyRestDataSource.js';






export class UserAPI extends MyRestDataSource {
    constructor() {
        super();
        this.baseURL = process.env.USERS_URL;
      }
}