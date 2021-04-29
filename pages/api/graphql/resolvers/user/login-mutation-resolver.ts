/**
 * @author Muhammad Omran
 * @date 29-04-2021
 * @description implement Resolver handler for user login
 */

import { AuthenticationError } from "apollo-server-micro";
import bcrypt from "bcryptjs";

import { User } from "../../../../../shared/types/user-type";
import { UserCursor, userModel } from "../../../models/users";
import { loginUser } from "../../../utils/user-utils";
import {
  validateAlphaNumericOnlyInput,
  validateEmail,
  validatePassword,
} from "../../../utils/validation";
import { NetWorkContext } from "../network-context";

export const loginMutationResolver = async (
  _: any,
  { user, password }: { user: string; password: string },
  ctx: NetWorkContext
): Promise<User> => {
  try {
    if (!user || !password) {
      throw new AuthenticationError("Please provide all requied fields.");
    }
    if (!user.includes("@") && !validateAlphaNumericOnlyInput(user)) {
      throw new AuthenticationError("username/email is not valid");
    } else if (user.includes("@") && !validateEmail(user)) {
      throw new AuthenticationError("username/email is not valid");
    }
    if (!validatePassword(password)) {
      throw new AuthenticationError(
        "Password must have at least one character and at least 6 chars long."
      );
    }

    // check if user already exists with same username or email
    const userFound: UserCursor = await userModel.findOne({
      $or: [{ username: user }, { email: user }],
    });
    if (!userFound) {
      throw new AuthenticationError("User not found.");
    }

    // user found >> check the password
    const correctCredentials: boolean = await bcrypt.compare(
      password,
      userFound.password
    );

    if (!correctCredentials) {
      throw new AuthenticationError("Failed to login, incorrect password.");
    }

    return await loginUser(userFound, ctx);
  } catch (err) {
    throw new Error(err);
  }
};
