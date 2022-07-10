import { RESTDataSource } from 'apollo-datasource-rest';
import { MyRestDataSource } from '../MyRestDataSource.js';
import 'dotenv/config'

// Querys
// band
// bands
// Mutation
// createBand
// deleteBand
// updateBand

export class BandAPI extends MyRestDataSource {
    constructor() {
        super();
        this.baseURL = process.env.BANDS_URL;
      }
}