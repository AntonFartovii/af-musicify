import { gql } from "apollo-server";

export const typeDefsUsers = gql`
type JWT { 
    jwt: String!
}

type User {
    id: ID!
    firstName: String
    secondName: String
    password: String
    email: String!
}

type Query {
    user(id: ID!): User
    jwt(login: LoginInput): JWT
  }

input LoginInput {
    email: String! 
    password: String!
}

input UserInput {
    firstName: String!
    lastName: String!
    password: String!
    email: String!
}

type Mutation {
    register(user: UserInput): User
  }
`; 