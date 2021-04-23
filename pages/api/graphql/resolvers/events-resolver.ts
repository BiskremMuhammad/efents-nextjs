import { eventModal as EventModel, EventCursor } from "../../models/event";
import { Efent } from "../../../../shared/types/event-type";

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
    getEvents: async (_, { after, size }: getEventsQueryArgs): Promise<Efent[]> => {
      try {
        let eventsCursors = [];
        if (after) {
          eventsCursors = await EventModel.findById(after).
        }
        return eventsCursors.map(
          (e: EventCursor): Efent => {
            return {
              id: e._id,
              title: e.title,
              description: e.description,
              user: e.user,
              createdAt: e.createdAt,
            };
          }
        );
      } catch (err) {
        throw new Error(err);
      }
    },
  },
};
