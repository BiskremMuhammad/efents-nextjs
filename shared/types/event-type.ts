/**
 * @author Muhammad Omran
 * @date 21-04-2021
 * @description defines the event typescript type
 */

import {
  Speaker,
  EventStatus,
  Comment,
} from "../../pages/api/graphql/schema.types";
import { User } from "./user-type";

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
   * event Category
   *
   * @type {string}
   */
  category: string;

  /**
   * event Title
   *
   * @type {string}
   */
  title: string;

  /**
   * event Description
   *
   * @type {string}
   */
  description: string;

  /**
   * flag if the event has a translation to arabic
   *
   * @type {string}
   */
  hasArabic: boolean;

  /**
   * the arabic title if the event has a translation
   *
   * @type {string}
   */
  arabicTitle?: string;

  /**
   * event description in arabic
   *
   * @type {string}
   */
  arabicDescription?: string;

  /**
   * event location
   *
   * @type {string}
   */
  location: string;

  /**
   * the city where the event takes place
   *
   * @type {string}
   */
  city: string;

  /**
   * event poster url
   *
   * @type {string}
   */
  poster: string;

  /**
   * event start time
   *
   * @type {string}
   */
  startTime: string;

  /**
   * event end time
   *
   * @type {string}
   */
  endTime: string;

  /**
   * event starting date
   *
   * @type {string}
   */
  startDate: string;

  /**
   * event ending date
   *
   * @type {string}
   */
  endDate: string;

  /**
   * evnet Speakers
   *
   * @type {Speaker[]}
   */
  speakers?: Speaker[];

  /**
   * event photos
   *
   * @type {string[]}
   */
  photos?: string[];

  /**
   * event published status
   *
   * @type {EventStatus}
   */
  status: EventStatus;

  /**
   * event host
   *
   * @type {User}
   */
  host: User;

  /**
   * event array of comments
   *
   * @type {Comment[]}
   */
  comments?: Comment[];

  /**
   * array of users ids who are going to the event
   *
   * @type {User[]}
   */
  going?: User[];

  /**
   * event creation time
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
