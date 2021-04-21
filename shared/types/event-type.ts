/**
 * defines the Event type
 *
 * @interface
 * @exports
 */
export interface Efent {
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
