/**
 * defines the Event type
 * 
 * @interface
 * @exports
 */
export interface EventResponse {
  /**
   * the id of the event
   * 
   * @type {string}
   */
  id: string;

  /**
   * the title of the event
   * 
   * @type {string}
   */
  title: string;

  /**
   * the description of the event
   * 
   * @type {string}
   */
  description: string;

  /**
   * the id of the user who created the event
   * 
   * @type {string}
   */
  user: string;

  /**
   * the datetime of the event creation
   * 
   * @type {string}
   */
  createdAt: string;
}

/**
 * interfeace that defines the User object
 * 
 * @interface
 * @exports
 */
export interface UserResponse {
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