import { Schema, model } from "mongoose";

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

export const eventModal = model("Event", eventSchema);
