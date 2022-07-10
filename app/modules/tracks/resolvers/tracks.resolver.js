
export const resolversTrack = {
    Query : {
        track: async (_, { id }, { dataSources }) => {
            return dataSources.trackAPI.getById( id );
            },
        tracks: async (_, { limit, offset }, { dataSources }) => {
            return dataSources.trackAPI.getAll( limit, offset );
        }      
    }, 
    Mutation : {
        createTrack: async ( _, { track }, { dataSources }) => {  
            return dataSources.trackAPI.create( track );
        },
        deleteTrack: async ( _, { id }, { dataSources } ) => {
            return dataSources.trackAPI.delete( id );
        },
        updateTrack: async ( _, { track }, { dataSources }) => {  
            return dataSources.trackAPI.update( track );
        },
    }
}
