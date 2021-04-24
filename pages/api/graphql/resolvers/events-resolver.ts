import { eventModal as EventModel, EventCursor } from "../../models/event";
import { Efent, EventCollection } from "../../../../shared/types/event-type";
import { paginateResults } from "../../utils/utils";

/**
 * interface that defines the getEvents Query args
 *
 * @interface
 */
interface getEventsQueryArgs {
  /**
   * to get a page after a given id
   *
   * @type {string}
   */
  after?: string;

  /**
   * the size of the page
   *
   * @type {number}
   */
  size?: number;
}

export const eventsResolver = {
  Query: {
    getEvents: async (
      _,
      { after, size }: getEventsQueryArgs
    ): Promise<EventCollection> => {
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
