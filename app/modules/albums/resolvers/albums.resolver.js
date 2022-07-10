
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
        createAlbum: async ( _, args, { dataSources }) => {  
            return dataSources.albumAPI.create( args );
        },
        deleteAlbum: async ( _, { id }, { dataSources } ) => {
            return dataSources.albumAPI.delete( id );
        },
        updateAlbum: async ( _, { id, ...args } , { dataSources }) => {  
            return dataSources.albumAPI.update( id, args );
        },
    }
}
