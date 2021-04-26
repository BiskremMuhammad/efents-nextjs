/**
 * @author Muhammad Omran
 * @date 24-04-2021
 * @description implments user related resolvers
 */

import { User } from "../../../../../shared/types/user-type";
import { NetWorkContext } from "../network-context";
import { registerMutationResolver } from "./register-mutation-resolver";

export const eventsResolver = {
  Mutation: {
    register: registerMutationResolver,
  },
};
