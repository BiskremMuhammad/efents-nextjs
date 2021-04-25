/**
 * @author Muhammad Omran
 * @date 06-04-2021
 * @description defines databse event model
 */

import { Schema, model, models, Document } from "mongoose";

const eventSchema = new Schema(
  {
    title: String,
    description: String,
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
  title: string;
  description: string;
  user: string;
  createdAt: string;
}

export const eventModal = models.Event || model("Event", eventSchema);
