import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    username: String,
    email: String,
    password: String,
    firstName: String,
    lastName: String,
  },
  { timestamps: true }
);

export const userModel = model("User", userSchema);
