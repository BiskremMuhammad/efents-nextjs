/**
 * @author Muhammad Omran
 * @date 24-04-2021
 * @description defines schema typescript types
 */

/**
 * enum that defines user Gender
 *
 * @enum
 * @exports
 */
export enum Gender {
  MALE = "Male",
  FEMALE = "Female",
}

/**
 * enum that defines the available Lnaguages
 *
 * @enum
 * @exports
 */
export enum Language {
  ARABIC = "AR",
  ENGLISH = "EN",
}

/**
 * enum that defines the status of an event
 *
 * @enum
 * @exports
 */
export enum EventStatus {
  PENDING = "PENDING",
  PUBLISHED = "PUBLISHED",
  TRASH = "TRASH",
}

/**
 * enum that defines the user roles
 *
 * @enum
 * @exports
 */
export enum UserRole {
  USER,
  EDITOR,
  ADMIN,
  SUPER_ADMIN,
}

/**
 * enum that defines the privacy settings
 *
 * @enum
 * @exports
 */
export interface Privacy {
  /**
   * enable to follow the user and see his followers
   *
   * @type {boolean}
   */
  enableFollow: Boolean;

  /**
   * enable other users to see user schedule
   *
   * @type {boolean}
   */
  enableSchedule: Boolean;
}

/**
 * enum that defines the social links of the user
 *
 * @enum
 * @exports
 */
export interface SocialLinks {
  /**
   * facebook link
   *
   * @type {string}
   */
  facebook: String;

  /**
   * twitter link
   *
   * @type {string}
   */
  twitter: String;

  /**
   * user website link
   *
   * @type {string}
   */
  website: String;
}

/**
 * interface that defines the register mutation input
 *
 * @interface
 * @exports
 */
export interface RegisterInput {
  /**
   * user email
   *
   * @type {string}
   */
  email: string;

  /**
   * user first name
   *
   * @type {string}
   */
  firstName: string;

  /**
   * user gender
   *
   * @type {Gender}
   */
  gender: Gender;

  /**
   * user last name
   *
   * @type {string}
   */
  lastName: string;

  /**
   * user password
   *
   * @type {string}
   */
  password: string;

  /**
   * user username
   *
   * @type {string}
   */
  username: string;
}

/**
 * interface that defines an event Speaker
 *
 * @interface
 * @exports
 */
export interface Speaker {
  /**
   * speaker name
   *
   * @type {string}
   */
  name: string;

  /**
   * speaker photo url
   *
   * @type {string}
   */
  photo: string;

  /**
   * speaker website url
   *
   * @type {string}
   */
  url: string;
}

/**
 * interface that defines a Comment
 *
 * @interface
 * @exports
 */
export interface Comment {
  /**
   * comment content
   *
   * @type {string}
   */
  body: string;

  /**
   * the id of the event
   *
   * @type {string}
   */
  event: string;

  /**
   * the id of the comment
   *
   * @type {string}
   */
  id: string;

  /**
   * id of the comment id, if the comment is a reply to another comment
   *
   * @type {string}
   */
  parent: string;

  /**
   * comment time stamp
   *
   * @type {string}
   */
  timestamp: string;

  /**
   * the id of the user who created the comment
   *
   * @type {string}
   */
  user: string;
}
