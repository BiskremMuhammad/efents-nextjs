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

/**
 * interface that defines the return type of getEvents Query
 *
 * @interface
 * @exports
 */
export interface EventCollection {
  /**
   * the number of all evnets in the database
   *
   * @type {number}
   */
  all: number;

  /**
   * current page results count
   *
   * @type {number}
   */
  count: number;

  /**
   * the id of the last event in current page
   *
   * @type {string}
   */
  cursor: string;

  /**
   * events page
   *
   * @type {Efent[]}
   */
  events: Efent[];

  /**
   * flag wheather or not there is more evnets to paginate more
   *
   * @type {boolean}
   */
  hasNext: boolean;
}
