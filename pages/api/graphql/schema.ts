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
  enum EventStatus {
    PENDING
    PUBLISHED
    TRASH
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
  type Speaker {
    id: ID!
    name: String!
    url: String
    photo: String
    event: String!
  }
  type Photo {
    id: ID!
    photo: String!
    event: String!
  }
  type Comment {
    id: ID!
    body: String!
    user: String!
    event: String!
    parent: String
  }
  type User {
    id: ID!
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
    id: ID!
    title: String!
    description: String
    hasArabic: String!
    arabicTitle: String
    arabicDescription: String
    location: String!
    poster: String!
    startTime: String!
    endTime: String!
    startDate: String!
    endDate: String!
    category: String!
    speakers: [Speaker]!
    photos: [Photo]!
    createdAt: String!
    user: String!
    going: [String]!
    comments: [Comment]!
    status: EventStatus!
  }
  type Query {
    getEvents: [Event]!
  }
`;
