import { eventModal as EventModel, EventCursor } from "../../models/event";
import { EventResponse } from "../types";

export const eventsResolver = {
  Query: {
    getEvents: async (): Promise<EventResponse[]> => {
      try {
        const eventsCursors = await EventModel.find();
        return eventsCursors.map((e: EventCursor): EventResponse => {return {
          id: e._id,
          title: e.title,
          description: e.description,
          user: e.user,
          createdAt: e.createdAt
        }});
      }
      catch (err) {
        throw new Error (err);
      }
    },
  },
};
