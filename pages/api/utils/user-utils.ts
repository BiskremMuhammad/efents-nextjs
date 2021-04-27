/**
 * @author Muhammad Omran
 * @date 27-04-2021
 * @description implement some user related utility functions
 */

import { User } from "../../../shared/types/user-type";
import { EventCursor, eventModal } from "../models/event";
import { UserCursor } from "../models/users";
import { paginateResults } from "./paginate-utility";

/**
 * to map the database user collection cursor to efent friendly format
 *
 * @param {UserCursor} cursor the user cursor
 * @param {boolean} includeDetails flag of which to include all user data
 * @returns the User in the desired format
 */
export const mapCursorToUser = async (
  cursor: UserCursor,
  includeDetails: boolean = false
): Promise<User> => {
  const user: User = {
    id: cursor._id,
    username: cursor.username,
    email: cursor.email,
    firstName: cursor.firstName,
    lastName: cursor.lastName,
    displayName: `${cursor.firstName}${
      cursor.lastName ?? " " + cursor.lastName
    }`,
    language: cursor.language,
    avatar: cursor.avatar,
    gender: cursor.gender,
    role: cursor.role,
    privacy: {
      enableFollow: cursor.privacy.follow,
      enableSchedule: cursor.privacy.schedule,
    },
    social: { ...cursor.social },
  };

  /**
   * if all details are required
   */
  if (includeDetails) {
    const userEvents: EventCursor[] = paginateResults({
      results: await eventModal.find({ user: cursor._id }),
    }) as EventCursor[];
    // user.events =
  }

  return user;
};
