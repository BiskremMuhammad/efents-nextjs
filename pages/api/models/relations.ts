/**
 * @author Muhammad Omran
 * @date 25-04-2021
 * @description implments database relations models
 */

import { Schema, model, models, Document } from "mongoose";

/**
 * interface that defines the Follow Cursor
 *
 * @interface
 * @exports
 * @extends Document
 */
export interface FollowCursor extends Document {
  /**
   * the id of the user who is being followed
   *
   * @type {string}
   */
  follow: string;

  /**
   * the id of the user who made the follow action
   *
   * @type {string}
   */
  userId: string;
}

/**
 * defienes the Followings Table which will have key value pair
 * which userId: the user is the subject >> who made the action
 * and follows: is the Object >> which affected by the action
 */
export const followTable =
  models.Follow ||
  model<FollowCursor>(
    "Follow",
    new Schema(
      {
        userId: {
          type: Schema.Types.ObjectId,
          ref: "users",
        },
        follows: {
          type: Schema.Types.ObjectId,
          ref: "users",
        },
      },
      { timestamps: true }
    )
  );

/**
 * interface that defines the going to event Cursor
 *
 * @interface
 * @exports
 * @extends Document
 */
export interface EventGoingCursor extends Document {
  /**
   * the id of the event
   *
   * @type {string}
   */
  event: string;

  /**
   * the id of the user who is going to the event
   *
   * @type {string}
   */
  userId: string;
}

/**
 * defienes the goings to event which will have key value pair
 * which userId: the user is the subject >> who made the action
 * and event: is the Object >> which users are going to
 */
export const goingTable =
  models.Going ||
  model<EventGoingCursor>(
    "Going",
    new Schema(
      {
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
