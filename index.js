import express from 'express';
import { graphqlHTTP } from "express-graphql";
import cors from 'cors'
import fetch from 'node-fetch';
import { ApolloServer, gql } from "apollo-server";
import { RESTDataSource } from 'apollo-datasource-rest';
import 'dotenv'
import 'dotenv/config'

import { typeDefsUsers } from './app/modules/users/schema/users.schema.js';
import { typeDefsTracks } from './app/modules/tracks/schema/tracks.schema.js';
import { typeDefsArtists } from './app/modules/artists/schema/artists.schema.js';
import { typeDefsAlbum } from './app/modules/albums/schema/albums.schema.js';
import { typeDefsBands } from './app/modules/bands/schema/bands.schema.js';
import { typeDefsGenres } from './app/modules/genres/schema/genres.schema.js';

import { UserAPI } from './app/modules/users/users.model.js';
import { TrackAPI } from './app/modules/tracks/tracks.model.js'
import { ArtistAPI } from './app/modules/artists/artists.model.js';
import { AlbumAPI } from './app/modules/albums/albums.model.js';
import { BandAPI } from './app/modules/bands/bands.model.js';
import { GenreAPI } from './app/modules/genres/genres.model.js';

import { loadFiles } from '@graphql-tools/load-files';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { mergeResolvers } from '@graphql-tools/merge';

import { resolversUsers } from './app/modules/users/resolvers/users.resolver.js';
import { resolversTrack } from './app/modules/tracks/resolvers/tracks.resolver.js';
import { resolversArtist } from './app/modules/artists/resolvers/artists.resolver.js';
import { resolversAlbum } from './app/modules/albums/resolvers/albums.resolver.js';
import { resolversBand } from './app/modules/bands/resolvers/bands.resolver.js';
import { resolversGenre } from './app/modules/genres/resolvers/genres.resolver.js'


const PORT = process.env.PORT



// interface IReq {
//     req: { 
//         headers: {
//             authorization: string
//         }
//     }
// }
const resolvers = mergeResolvers( [
    resolversUsers, resolversTrack, resolversArtist,
    resolversAlbum, resolversBand, resolversGenre ] )

const server = new ApolloServer (
    {
        dataSources: () => {
            return {
                userAPI: new UserAPI(),
                trackAPI: new TrackAPI(),
                artistAPI: new ArtistAPI(),
                albumAPI: new AlbumAPI(),
                bandAPI: new BandAPI(),
                genreAPI: new GenreAPI()
            }
        },
        typeDefs: [ 
            typeDefsUsers,
            typeDefsTracks,
            typeDefsArtists,
            typeDefsAlbum,
            typeDefsBands,
            typeDefsGenres
        ], 
        resolvers,
        csrfPrevention: true,
        cache: 'bounded',  
        context: ( { req } ) => {
                    const token = req.headers.authorization || ''; 
                    return { token }
                },
    }
)

server.listen({port: PORT }).then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`); 
});  


// async login ( args ) {
//     const data = await fetch('http://localhost:3004/v1/users/login', {
//             method: 'POST',
//             body: JSON.stringify(
//                 {
//                     email: args.mail, password: args.pass
//                 }
//             ),
//             headers: { 'Content-Type': 'application/json' }`
//         })
//         const response = await data.json()
//         console.log( response )
//         return response
//     }