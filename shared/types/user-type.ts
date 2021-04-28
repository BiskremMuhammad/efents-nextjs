/**
 * @author Muhammad Omran
 * @date 21-04-2021
 */

import {
  Gender,
  Language,
  Privacy,
  SocialLinks,
  UserRole,
} from "../../pages/api/graphql/schema.types";
import { Efent } from "./event-type";

/**
 * interfeace that defines the User object
 *
 * @interface
 * @exports
 */
export interface User {
  /**
   * user avatar url
   *
   * @type {string}
   */
  avatar: string;

  /**
   * user display name
   *
   * @type {string}
   */
  displayName: string;

  /**
   * user list of events ids
   *
   * @type {Efent[]}
   */
  events?: Efent[];

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
   * user list of followers ids
   *
   * @type {User[]}
   */
  followers?: User[];

  /**
   * user list of followings ids
   *
   * @type {User[]}
   */
  followings?: User[];

  /**
   * user gender
   *
   * @type {Gender}
   */
  gender: Gender;

  /**
   * the id of the user
   *
   * @type {string}
   */
  id: string;

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
   * @type {Privacy}
   */
  privacy: Privacy;

  /**
   * user priviliages
   *
   * @type {UserRole}
   */
  role: UserRole;

  /**
   * user list of his schedule events ids
   *
   * @type {Efent[]}
   */
  schedule?: Efent[];

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
}
