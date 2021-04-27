/**
 * @author Muhammad Omran
 * @date 27-04-2021
 * @description implement some event related utility functions
 */

import { Efent } from "../../../shared/types/event-type";
import { User } from "../../../shared/types/user-type";
import { EventCursor } from "../models/event";
import { EventGoingCursor, goingTable } from "../models/relations";
import { UserCursor, userModel } from "../models/users";
import { mapCursorToUser } from "./user-utils";

export const mapCursorToEvent = async (
  cursor: EventCursor,
  includeDetails: boolean = false
): Promise<Efent> => {
  const eventLocation: string[] = cursor.location
    ? cursor.location.replace(/\s/g, "").split(",")
    : [];
  let eventCity: string = "Egypt";
  if (eventLocation && eventLocation.length > 1) {
    let governorate: string = eventLocation[eventLocation.length - 2]
      .toLowerCase()
      .replace("governorate", "")
      .trim();
    if (governorate.includes("محافظه")) {
      governorate = eventLocation[eventLocation.length - 2]
        .toLowerCase()
        .replace("محافظه", "")
        .trim();
    } else if (governorate.includes("محافظة")) {
      governorate = eventLocation[eventLocation.length - 2]
        .toLowerCase()
        .replace("محافظة", "")
        .trim();
    }
    eventCity = `${governorate}, ${eventLocation[eventLocation.length - 1]}`;
  }

  const host: User = await mapCursorToUser(
    await userModel.findById(cursor.user)
  );

  const event: Efent = {
    host,
    id: cursor._id,
    status: cursor.status,
    title: cursor.title,
    description: cursor.description,
    hasArabic: cursor.hasArabic,
    arabicTitle: cursor.arabicTitle,
    arabicDescription: cursor.arabicDescription,
    poster: cursor.poster,
    startTime: cursor.startTime,
    endTime: cursor.endTime,
    startDate: cursor.startDate,
    endDate: cursor.endDate,
    location: cursor.location,
    city: eventCity,
    category: cursor.category,
    speakers: [...cursor.speakers],
    photos: [...cursor.photos],
    createdAt: cursor.createdAt,
  };

  // if the going list of people who are attending this event are required
  if (includeDetails) {
    const goingListCursors: EventGoingCursor[] = await goingTable.find({
      event: event.id,
    });
    const goingListUsersIds: string[] = goingListCursors.map(
      (c: EventGoingCursor): string => c._id
    );
    const goingListUsers: UserCursor[] = await userModel.find({
      _id: { $in: [...goingListUsersIds] },
    });

    const goingList: User[] = [];
    goingListUsers.map(async (u: UserCursor) => {
      goingList.push(await mapCursorToUser(u));
    });
    event.going = [...goingList];
  }

  return event;
};
