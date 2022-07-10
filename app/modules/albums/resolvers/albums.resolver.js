
export const resolversAlbum = {
    Query : {
        album: async (_, { id }, { dataSources }) => {
            return dataSources.albumAPI.getById( id );
            },
        albums: async (_, { limit, offset }, { dataSources }) => {
            return dataSources.albumAPI.getAll( limit, offset );
        }      
    }, 
    Mutation : {
        createAlbum: async ( _, { input }, { dataSources }) => {  
            return dataSources.albumAPI.create( input );
        },
        deleteAlbum: async ( _, { id }, { dataSources } ) => {
            return dataSources.albumAPI.delete( id );
        },
        updateAlbum: async ( _, { input }, { dataSources }) => {  
            return dataSources.albumAPI.update( input );
        },
    }
}
