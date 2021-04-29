/**
 * @author Muhammad Omran
 * @date 26-04-2021
 * @description implement Resolver handler for user registeration
 */

import { AuthenticationError } from "apollo-server-micro";
import bcrypt from "bcryptjs";
import Cookies from "cookies";
import { CONSTANTS } from "../../../../../shared/constants";
import { User } from "../../../../../shared/types/user-type";
import { UserCursor, userModel } from "../../../models/users";
import { generateJWT } from "../../../utils/handle-token";
import { mapCursorToUser } from "../../../utils/user-utils";
import {
  validateAlphaNumericOnlyInput,
  validateEmail,
  validatePassword,
} from "../../../utils/validation";
import { Language, RegisterInput } from "../../schema.types";
import { NetWorkContext } from "../network-context";

export const registerMutationResolver = async (
  _: any,
  { username, password, email, firstName, lastName, gender }: RegisterInput,
  ctx: NetWorkContext
): Promise<User> => {
  try {
    if (!username || !password || !email || !gender || !firstName) {
      throw new AuthenticationError("Please provide all requied fields.");
    }
    if (!validateAlphaNumericOnlyInput(username)) {
      throw new AuthenticationError(
        "username can only contain letters, numbers, one '-' or '_'"
      );
    }
    if (!validateEmail(email)) {
      throw new AuthenticationError("Please enter a valid email.");
    }
    if (!validatePassword(password)) {
      throw new AuthenticationError(
        "Password must have at least one character and at least 6 chars long."
      );
    }

    // check if user already exists with same username or email
    const userTaken: boolean = !!(await userModel.find({
      $or: [{ username }, { email }],
    }));
    if (userTaken) {
      throw new AuthenticationError("User already exists.");
    }

    // look goood
    // hash the password
    const passSalt: string = await bcrypt.genSalt();
    const hashedPassword: string = await bcrypt.hash(password, passSalt);

    // save the user to the database
    const userCursor: UserCursor = await new userModel({
      username,
      email,
      firstName,
      lastName,
      gender,
      password: hashedPassword,
      language: Language.ENGLISH,
      social: {
        facebook: "",
        twitter: "",
        website: "",
      },
      privacy: {
        follow: true,
        schedule: true,
      },
    }).save();

    const user = await mapCursorToUser(userCursor);

    // genereate an auth jwt
    const token: string = generateJWT({
      id: user.id,
      email: user.email,
      role: user.role,
      username: user.username,
    });

    // append the token to a cookie
    const tokenCookie = new Cookies(ctx.req, ctx.res);
    tokenCookie.set(CONSTANTS.AUTH_JWT_COOKIE, token, {
      maxAge: CONSTANTS.AUTH_TOKEN_AGE_IN_SECONDS * 1000,
    });

    return user;
  } catch (err) {
    throw new Error(err);
  }
};
