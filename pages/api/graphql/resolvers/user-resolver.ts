/**
 * @author Muhammad Omran
 * @date 24-04-2021
 * @description implments user related resolvers
 */

import { User } from "../../../../shared/types/user-type";
import { NetWorkContext } from "./network-context";

export const eventsResolver = {
  Mutation: {
    register: async (_: any, __: any, ctx: NetWorkContext): Promise<User> => {
      try {
        let eventsCursors = await EventModel.find();

        const eventPage: EventCursor[] = paginateResults({
          after,
          results: eventsCursors,
        }) as EventCursor[];

        return {
          all: eventsCursors.length,
          count: eventPage.length,
          cursor: eventPage.length ? eventPage[eventPage.length - 1]._id : null,
          events: eventPage.map(
            (e: EventCursor): Efent => {
              return {
                id: e._id,
                title: e.title,
                description: e.description,
                user: e.user,
                createdAt: e.createdAt,
              };
            }
          ),
          // if the cursor at the end of the paginated results is the same as the
          // last item in _all_ results, then there are no more results after this
          hasNext: eventPage.length
            ? eventPage[eventPage.length - 1]._id !==
              eventsCursors[eventsCursors.length - 1]._id
            : false,
        };
      } catch (err) {
        throw new Error(err);
      }
    },
  },
};
