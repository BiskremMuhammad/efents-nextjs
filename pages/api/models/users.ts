import { Schema, model, models, Document } from "mongoose";

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

/**
 * interface that defines the user mongo atlas document
 * 
 * @interface
 * @exports
 * @extends Document
 */
export interface UserCursor extends Document {
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  createdAt: string;
}

export const userModel = models.User || model("User", userSchema);
