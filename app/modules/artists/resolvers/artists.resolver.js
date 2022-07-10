
export const resolversArtist = {
    Query : {
        artist: async (_, { id }, { dataSources }) => {
            return dataSources.artistAPI.getById( id );
            },
        artists: async (_, { limit, offset }, { dataSources }) => {
            return dataSources.artistAPI.getAll( limit, offset );
        }      
    }, 
    Mutation : {
        createArtist: async ( _,  args , { dataSources }) => {  
            return dataSources.artistAPI.create( args );
        },
        deleteArtist: async ( _, { id }, { dataSources } ) => {
            return dataSources.artistAPI.delete( id );
        },
        updateArtist: async ( _, { id, ...args}, { dataSources }) => {  
            return dataSources.artistAPI.update( id, args  );
        },
    }
}
