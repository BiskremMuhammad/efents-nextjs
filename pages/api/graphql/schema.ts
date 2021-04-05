import { gql } from "apollo-server";

const schema = gql`
  type User {
    id: String!
    username: String!
    email: String!
    firstName: String
    lastName: String
  },
  type Event {
    id: String!
    title: String!
    description: String
  }
  Query {
    getEvents: [Event]!
  }
`;

module.exports = schema;