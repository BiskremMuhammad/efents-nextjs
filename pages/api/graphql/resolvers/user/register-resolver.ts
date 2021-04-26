import { AuthenticationError } from "apollo-server-micro";
import { User } from "../../../../../shared/types/user-type";
import { RegisterInput } from "../../schema.types";
import { NetWorkContext } from "../network-context";

export const register = async (
  _: any,
  { username, password, email, firstName, lastname, gender }: RegisterInput,
  ctx: NetWorkContext
): Promise<User> => {
  try {
    if (!username || !password || !email || !gender || !firstName) {
      throw new AuthenticationError("Please provide all requied fields.");
    }
  } catch (err) {
    throw new Error(err);
  }
};
