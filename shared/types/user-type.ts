/**
 * @author Muhammad Omran
 * @date 21-04-2021
 */

/**
 * interfeace that defines the User object
 *
 * @interface
 * @exports
 */
export interface User {
  /**
   * the id of the user
   *
   * @type {string}
   */
  id: string;

  /**
   * the user's username
   *
   * @type {string}
   */
  username: string;

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
   * user last name
   *
   * @type {string}
   */
  lastName: string;
}
