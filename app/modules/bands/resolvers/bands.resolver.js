
export const resolversBand = {
    Query : {
        band: async (_, { id }, { dataSources }) => {
            return dataSources.bandAPI.getById( id );
            },
        bands: async (_, { limit, offset }, { dataSources }) => {
            return dataSources.bandAPI.getAll( limit, offset );
        }      
    }, 
    Mutation : {
        createBand: async ( _, args , { dataSources }) => {  
            return dataSources.bandAPI.create( args);
        },
        deleteBand: async ( _, { id }, { dataSources } ) => {
            return dataSources.bandAPI.delete( id );
        },
        updateBand: async ( _, { id, ...args }, { dataSources }) => {  
            return dataSources.bandAPI.update( id, args );
        },
    }
}
