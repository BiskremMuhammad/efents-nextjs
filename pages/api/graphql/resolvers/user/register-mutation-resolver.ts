import { AuthenticationError } from "apollo-server-micro";
import { User } from "../../../../../shared/types/user-type";
import {
  validateAlphaNumericOnlyInput,
  validateEmail,
} from "../../../utils/validation";
import { RegisterInput } from "../../schema.types";
import { NetWorkContext } from "../network-context";

export const registerMutationResolver = async (
  _: any,
  { username, password, email, firstName, lastname, gender }: RegisterInput,
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
    if (validateEmail(email)) {
      throw new AuthenticationError("Please enter a valid email.");
    }
  } catch (err) {
    throw new Error(err);
  }
};
