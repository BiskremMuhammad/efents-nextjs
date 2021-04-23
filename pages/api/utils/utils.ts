import { Efent } from "../../../shared/types/event-type";
import { User } from "../../../shared/types/user-type";

/**
 * interface that defines the props sent to pagination function utility
 *
 * @interface
 * @exports
 */
export interface PaginationProps {
  after: string;
  results: Array<User | Efent>;
  pageSize: number;
}

/**
 * a utility function that paginate a list of Users or Events
 *
 * @param {PaginationProps} paginationProps
 * @returns {Array<User | Efent>} the paginated array
 */
export const paginateResults = ({
  after: cursor,
  pageSize = 20,
  results,
}: PaginationProps): Array<User | Efent> => {
  if (pageSize < 1) return [];

  if (!cursor) return results.slice(0, pageSize);
  const cursorIndex: number = results.findIndex((item) => cursor === item.id);

  return cursorIndex >= 0
    ? cursorIndex === results.length - 1 // don't let us overflow
      ? []
      : results.slice(
          cursorIndex + 1,
          Math.min(results.length, cursorIndex + 1 + pageSize)
        )
    : results.slice(0, pageSize);
};
