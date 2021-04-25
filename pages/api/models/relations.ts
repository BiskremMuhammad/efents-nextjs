import { Schema, model, models, Document } from "mongoose";

/**
 * defienes the Followings Table which will have key value pair
 * which userId: the user is the subject >> who made the action
 * and follows: is the Object >> which affected by the action
 */
export const followTable =
  models.Follow ||
  model(
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
 * defienes the goings to event which will have key value pair
 * which userId: the user is the subject >> who made the action
 * and event: is the Object >> which users are going to
 */
export const goingTable =
  models.Going ||
  model(
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
