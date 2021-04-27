/**
 * @author Muhammad Omran
 * @date 25-04-2021
 * @description implments utility functions to handle the jwt token
 */

import jwt from "jsonwebtoken";
import { UserRole } from "../graphql/schema.types";

/**
 * interface that defines the payload of the jwt token
 *
 * @interface
 * @exports
 */
export interface JwtPayload {
  /**
   * the email of the user
   *
   * @type {string}
   */
  email: string;

  /**
   * user id
   *
   * @type {string}
   */
  id: string;

  /**
   * user role
   *
   * @type {UserRole}
   */
  role: UserRole;

  /**
   * user username
   *
   * @type {string}
   */
  username: string;
}

/**
 * constant to hold the age of the token
 *
 * @type {number}
 */
const jwtAge: number = 7 * 24 * 60 * 60;

/**
 * getting token secret from the enviroment variable unless > empty which will throw an err
 *
 * @type {string}
 */
const SECRET: string = process.env.JWT_SECRET || "";

/**
 * generate a new jwt
 *
 * @param {JwtPayload} data the payload to encrypt with the token
 * @returns {string} the jwt
 */
export const generateJWT = (data: JwtPayload): string => {
  return jwt.sign(data, SECRET, { expiresIn: jwtAge });
};

/**
 * to verify a request authentication token
 *
 * @param {string} token the token to validate
 * @returns {boolean} validy status of the token
 */
export const verifyJWT = (token: string): boolean => {
  return !!jwt.verify(token, SECRET);
};

/**
 * to refresh user's current expired token
 *
 * @param {string} token the expired token
 * @returns {string} a fresh token
 */
export const refreshJWT = (token: string): string => {
  const userDate: JwtPayload = jwt.verify(token, SECRET) as JwtPayload;
  return generateJWT(userDate);
};
