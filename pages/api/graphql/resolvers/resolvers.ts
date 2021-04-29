/**
 * @author Muhammad Omran
 * @date 06-04-2021
 * @description implement GraphQL Resolvers
 */

import { eventsResolver } from "./events-resolver";
import { userResolvers } from "./user/user-resolvers";

export default {
  Query: {
    ...eventsResolver.Query,
  },
  Mutation: {
    ...userResolvers.Mutation,
  },
};
