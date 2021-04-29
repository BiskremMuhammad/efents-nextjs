/**
 * @author Muhammad Omran
 * @date 27-04-2021
 * @description implement some user related utility functions
 */

import { serialize } from "cookie";
import { CONSTANTS } from "../../../shared/constants";
import { Efent } from "../../../shared/types/event-type";
import { User } from "../../../shared/types/user-type";
import { NetWorkContext } from "../graphql/resolvers/network-context";
import { EventCursor, eventModal } from "../models/event";
import {
  EventGoingCursor,
  FollowCursor,
  followTable,
  goingTable,
} from "../models/relations";
import { UserCursor, userModel } from "../models/users";
import { mapCursorToEvent } from "./event-utils";
import { generateJWT } from "./handle-token";
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
    const userEvents: EventCursor[] = await eventModal.find({
      user: cursor._id,
    });
    const userCreatedEvents: Efent[] = [];
    userEvents.map(async (e: EventCursor) =>
      userCreatedEvents.push(await mapCursorToEvent(e))
    );
    user.events = [...userCreatedEvents];

    // get followers
    const followersCursors: FollowCursor[] = await followTable.find({
      follow: user.id,
    });
    const followersIds: string[] = followersCursors.map(
      (f: FollowCursor): string => f._id
    );
    const followersList: UserCursor[] = await userModel.find({
      _id: { $in: [...followersIds] },
    });

    const followers: User[] = [];
    followersList.map(async (u: UserCursor) => {
      followers.push(await mapCursorToUser(u));
    });
    user.followers = [...followers];

    // get followings
    const followingsCursors: FollowCursor[] = await followTable.find({
      userId: user.id,
    });
    const followingsIds: string[] = followingsCursors.map(
      (f: FollowCursor): string => f._id
    );
    const followingsList: UserCursor[] = await userModel.find({
      _id: { $in: [...followingsIds] },
    });

    const followings: User[] = [];
    followingsList.map(async (u: UserCursor) => {
      followings.push(await mapCursorToUser(u));
    });
    user.followings = [...followings];

    // get user schedule
    const scheduleCursors: EventGoingCursor[] = await goingTable.find({
      userId: user.id,
    });
    const scheduleEventsIds: string[] = scheduleCursors.map(
      (c: EventGoingCursor): string => c._id
    );
    const scheduleEvents: EventCursor[] = await eventModal.find({
      _id: { $in: [...scheduleEventsIds] },
    });

    const schedule: Efent[] = [];
    scheduleEvents.map(async (e: EventCursor) => {
      schedule.push(await mapCursorToEvent(e));
    });
    user.schedule = [...schedule];
  }

  return user;
};

export const loginUser = async (
  userCursor: UserCursor,
  ctx: NetWorkContext
): Promise<User> => {
  const user = await mapCursorToUser(userCursor, true);

  // genereate an auth jwt
  const token: string = generateJWT({
    id: user.id,
    email: user.email,
    role: user.role,
    username: user.username,
  });

  // append the token to a cookie
  ctx.res.setHeader(
    "Set-Cookie",
    serialize(CONSTANTS.AUTH_JWT_COOKIE, String(token), {
      maxAge: CONSTANTS.AUTH_TOKEN_AGE_IN_SECONDS * 1000,
    })
  );

  return user;
};
