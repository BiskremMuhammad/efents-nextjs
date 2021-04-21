import { eventModal as EventModel, EventCursor } from "../../models/event";
import { Efent } from "../../../../shared/types/event-type";

export const eventsResolver = {
  Query: {
    getEvents: async (): Promise<Efent[]> => {
      try {
        const eventsCursors = await EventModel.find();
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
