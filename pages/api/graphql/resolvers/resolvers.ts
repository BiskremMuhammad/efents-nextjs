/**
 * @author Muhammad Omran
 * @date 06-04-2021
 * @description implement GraphQL Resolvers
 */

import { eventsResolver } from "./events-resolver";

export default {
  Query: {
    ...eventsResolver.Query,
  },
};
