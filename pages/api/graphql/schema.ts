/**
 * @author Muhammad Omran
 * @date 06-04-2021
 * @description defines the GraphQL Schema
 */

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
  enum UserRole {
    USER
    EDITOR
    ADMIN
    SUPER_ADMIN
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
    timestamp: String!
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
    followers: [User]!
    followings: [User]!
    events: [Event]!
    schedule: [Event]!
    language: Language!
    privacy: Privacy!
    role: UserRole!
  }
  type Event {
    id: ID!
    title: String!
    description: String
    hasArabic: Boolean!
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
    user: User!
    going: [User]!
    comments: [Comment]!
    status: EventStatus!
  }
  type EventCollection {
    all: Int!
    count: Int!
    cursor: String!
    events: [Event]!
    hasNext: Boolean!
  }
  input RegisterInput {
    username: String!
    firstName: String!
    lastname: String
    email: String!
    password: String!
    gender: Gender!
  }
  type Query {
    getEvents(after: String, size: Int): EventCollection
  }
  type Mutation {
    login(user: String!, password: String!): User!
    register(input: RegisterInput!): User!
  }
`;
