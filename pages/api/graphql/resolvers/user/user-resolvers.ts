/**
 * @author Muhammad Omran
 * @date 24-04-2021
 * @description implments user related resolvers
 */

import { User } from "../../../../../shared/types/user-type";
import { loginMutationResolver } from "./login-mutation-resolver";
/**
 * @author Muhammad Omran
 * @date 24-04-2021
 * @description combine all user related resolvers
 */

import { registerMutationResolver } from "./register-mutation-resolver";

export const userResolvers = {
  Mutation: {
    register: registerMutationResolver,
    login: loginMutationResolver,
  },
};
