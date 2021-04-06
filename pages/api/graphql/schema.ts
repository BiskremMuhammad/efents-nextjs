import { gql } from "apollo-server-micro";

export const schema = gql`
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
  type Query {
    getEvents: [Event]!
  }
`;
