const typeDefs = `#graphql
    type User {
      _id: ID
      username: String
      password: String
    }

    type Auth {
      token: ID!
      user: User
    }

    type Query{
    users: [User]!
    user(_id:ID!): User
    }

    type Query {
      user(_id:ID!): User
      allusers:[User]
    }
  
    type Mutation {  
      addUser(username: String!, password: String!): Auth
      login(username: String!, password: String!): Auth
    }
`;

module.exports = typeDefs;
