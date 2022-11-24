export const schema = gql`
  type Robot {
    id: Int!
    title: String
    description: String!
    pairs: String!
    timeframe: String!
    image: String!
    files: String!
    published: Boolean!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    robots: [Robot!]! @requireAuth
    robot(id: Int!): Robot @requireAuth
  }

  input CreateRobotInput {
    title: String
    description: String!
    pairs: String!
    timeframe: String!
    image: String!
    files: String!
    published: Boolean!
  }

  input UpdateRobotInput {
    title: String
    description: String
    pairs: String
    timeframe: String
    image: String
    files: String
    published: Boolean
  }

  type Mutation {
    createRobot(input: CreateRobotInput!): Robot! @requireAuth
    updateRobot(id: Int!, input: UpdateRobotInput!): Robot! @requireAuth
    deleteRobot(id: Int!): Robot! @requireAuth
  }
`
