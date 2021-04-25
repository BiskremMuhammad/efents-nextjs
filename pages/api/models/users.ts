import { Schema, model, models, Document } from "mongoose";
import { Gender, Language, SocialLinks } from "../graphql/schema.types";

const userSchema = new Schema(
  {
    username: String,
    email: String,
    password: String,
    firstName: String,
    lastName: String,
    gender: String,
    avatar: String,
    language: String,
    social: {
      facebook: String,
      twitter: String,
      website: String,
    },
    privacy: {
      follow: Boolean,
      schedule: Boolean,
    },
  },
  { timestamps: true }
);

/**
 * interface that defines the user mongo atlas document
 *
 * @interface
 * @exports
 * @extends Document
 */
export interface UserCursor extends Document {
  /**
   * user avatar url
   *
   * @type {string}
   */
  avatar: string;

  /**
   * the email of the user
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
   * user preferred language
   *
   * @type {Language}
   */
  language: Language;

  /**
   * user last name
   *
   * @type {string}
   */
  lastName: string;

  /**
   * user privacy settings
   *
   * @type {{ follow: boolean; schedule: boolean}}
   */
  privacy: {
    follow: boolean;
    schedule: boolean;
  };

  /**
   * user list of his schedule events ids
   *
   * @type {string[]}
   */
  schedule: [string];

  /**
   * user social links
   *
   * @type {SocialLinks}
   */
  social: SocialLinks;

  /**
   * the user's username
   *
   * @type {string}
   */
  username: string;

  /**
   * user created at date time
   *
   * @type {string}
   */
  createdAt: string;
}

export const userModel = models.User || model("User", userSchema);
