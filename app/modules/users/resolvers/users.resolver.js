

export const resolversUsers = {
    Query : {
        jwt: async (_, { login }, { dataSources }) => {
            return dataSources.userAPI.login( login );
            },
        user: async (_, { id }, { dataSources }) => {
            return dataSources.userAPI.findUser( id );
        }      
    }, 
    Mutation : {
        register: async (_, { user }, { dataSources }) => {  
            return dataSources.userAPI.createUser( user );
        }  
    }
}
