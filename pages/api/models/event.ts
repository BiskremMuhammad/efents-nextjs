/**
 * @author Muhammad Omran
 * @date 06-04-2021
 * @description defines databse event model
 */

import { Schema, model, models, Document, Model } from "mongoose";
import { EventStatus, Speaker } from "../graphql/schema.types";

const eventSchema = new Schema(
  {
    title: String,
    description: String,
    hasArabic: Boolean,
    arabicTitle: String,
    arabicDescription: String,
    location: String,
    poster: String,
    startTime: String,
    endTime: String,
    startDate: Date,
    endDate: Date,
    category: String,
    speakers: [
      {
        name: String,
        url: String,
        photo: String,
      },
    ],
    photos: [String],
    status: String,
    user: {
      type: Schema.Types.ObjectId,
      ref: "users",
    },
  },
  { timestamps: true }
);

/**
 * interface that defines the event mongo atlas document
 *
 * @interface
 * @exports
 * @extends Document
 */
export interface EventCursor extends Document {
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
  arabicTitle: string;

  /**
   * event description in arabic
   *
   * @type {string}
   */
  arabicDescription: string;

  /**
   * event location
   *
   * @type {string}
   */
  location: string;

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
  speakers: Speaker[];

  /**
   * event photos
   *
   * @type {string[]}
   */
  photos: string[];

  /**
   * event published status
   *
   * @type {EventStatus}
   */
  status: EventStatus;

  /**
   * event host id
   *
   * @type {string}
   */
  user: string;

  /**
   * event creation time
   *
   * @type {string}
   */
  createdAt: string;
}

export const eventModal: Model<EventCursor> =
  models.Event || model<EventCursor>("Event", eventSchema);

/**
 * interface that defines the comment cursor
 *
 * @interface
 * @exports
 * @extends Document
 */
export interface CommentCursor extends Document {
  /**
   * the comment body
   *
   * @type {string}
   */
  body: string;

  /**
   * comment parent id, if the comment is a reply to another comment
   *
   * @type {string}
   */
  parent: string;

  /**
   * the user id who made the comment
   *
   * @type {string}
   */
  user: string;

  /**
   * the evnet id
   *
   * @type {string}
   */
  event: string;

  /**
   * comment created datetime
   *
   * @type {string}
   */
  createdAt: string;
}

export const commentsTable: Model<CommentCursor> =
  models.Comment ||
  model<CommentCursor>(
    "Comment",
    new Schema(
      {
        body: String,
        parent: {
          type: Schema.Types.ObjectId,
          ref: "comments",
        },
        userId: {
          type: Schema.Types.ObjectId,
          ref: "users",
        },
        event: {
          type: Schema.Types.ObjectId,
          ref: "events",
        },
      },
      { timestamps: true }
    )
  );
