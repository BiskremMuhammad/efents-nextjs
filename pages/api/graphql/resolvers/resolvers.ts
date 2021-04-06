import { eventsResolver } from "./events-resolver";

export default {
  Query: {
    ...eventsResolver.Query
  }
}