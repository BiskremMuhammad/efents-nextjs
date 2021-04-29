/**
 * @author Muhammad Omran
 * @date 24-04-2021
 * @description defines some utility functions
 */

import { EventCursor } from "../models/event";
import { UserCursor } from "../models/users";

/**
 * interface that defines the props sent to pagination function utility
 *
 * @interface
 * @exports
 */
export interface PaginationProps {
  after?: string;
  results: Array<EventCursor | UserCursor>;
  pageSize?: number;
}

/**
 * a utility function that paginate a list of Users or Events
 *
 * @param {PaginationProps} paginationProps
 * @returns {Array<EventCursor | UserCursor>} the paginated array
 */
export const paginateResults = ({
  after: cursor,
  pageSize = 20,
  results,
}: PaginationProps): Array<EventCursor | UserCursor> => {
  if (pageSize < 1) return [];

  if (!cursor) return results.slice(0, pageSize);
  const cursorIndex: number = results.findIndex(
    (item: EventCursor | UserCursor): boolean => cursor === item._id
  );

  return cursorIndex >= 0
    ? cursorIndex === results.length - 1 // don't let us overflow
      ? []
      : results.slice(
          cursorIndex + 1,
          Math.min(results.length, cursorIndex + 1 + pageSize)
        )
    : results.slice(0, pageSize);
};
