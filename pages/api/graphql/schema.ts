import { gql } from "apollo-server-micro";

export const schema = gql`
  enum Gender {
    MALE
    FEMALE
  }
  enum Language {
    ARABIC
    ENGLISH
  }
  type Privacy {
    enableFollow: Boolean
    enableSchedule: Boolean
  }
  type SocialLinks {
    facebook: String
    twitter: String
    website: String
  }
  type User {
    id: String!
    username: String!
    email: String!
    firstName: String!
    lastName: String
    displayName: String!
    gender: Gender!
    avatar: String
    social: SocialLinks
    followers: [String]!
    followings: [String]!
    events: [String]!
    schedule: [String]!
    language: Language!
    privacy: Privacy
  }
  type Event {
    id: String!
    title: String!
    description: String
    hasTranslation: String
    createdAt: String!
    user: String!
  }
  type Query {
    getEvents: [Event]!
  }
`;
