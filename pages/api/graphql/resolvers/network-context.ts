import { NextApiResponse, NextApiRequest } from "next";

/**
 * interface that defines the app context for request and response server data
 *
 * @interface
 * @exports
 */
export interface NetWorkContext {
  /**
   * server request body
   *
   * @type {NextApiRequest}
   */
  req: NextApiRequest;

  /**
   * server response body definition
   *
   * @type {NextApiResponse}
   */
  res: NextApiResponse;
}
