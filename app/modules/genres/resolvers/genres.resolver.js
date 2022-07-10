export const resolversGenre = {
    Query : {
        genre: async (_, { id }, { dataSources }) => {
            return dataSources.genreAPI.getById( id );
            },
        genres: async (_, { limit, offset }, { dataSources }) => {
            return dataSources.genreAPI.getAll( limit, offset );
        }      
    }, 
    Mutation : {
        createGenre: async ( _, args, { dataSources }) => {  
            return dataSources.genreAPI.create( args );
        },
        deleteGenre: async ( _, { id }, { dataSources } ) => {
            return dataSources.genreAPI.delete( id );
        },
        updateGenre: async ( _, { id, ...args }, { dataSources }) => {  
            return dataSources.genreAPI.update( id, args );
        },
    }
}
