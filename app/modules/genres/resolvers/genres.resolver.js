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
        createGenre: async ( _, { input }, { dataSources }) => {  
            return dataSources.genreAPI.create( input );
        },
        deleteGenre: async ( _, { id }, { dataSources } ) => {
            return dataSources.genreAPI.delete( id );
        },
        updateGenre: async ( _, { input }, { dataSources }) => {  
            return dataSources.genreAPI.update( input );
        },
    }
}
