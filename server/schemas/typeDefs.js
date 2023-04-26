const typeDefs = `#graphql
    type User {
      _id: ID
      username: String
      password: String
      pots: [Pot]
      glazes: [Glaze]
      clay: [Clay]
    }

    type Pot {
      _id: ID
      potName: String
      potType: String
      dateCreated: Date
      clayType: Clay
      glazes: [Glaze]
      assembly: String
      weight: Int
      height: Int
      width: Int
      notes: String
      dateFired: Date
      firingType: String
      inProgress: Boolean
    }

    type Glaze {
      _id: ID
      glazeName: String
      dateCreated: Date
    }

    type Clay {
      _id: ID
      clayName: String
      dateCreated: Date
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
      allUsers:[User]
    }
  
    type Mutation {  
      addUser(username: String!, password: String!): Auth
      login(username: String!, password: String!): Auth
    }
`;

module.exports = typeDefs;
