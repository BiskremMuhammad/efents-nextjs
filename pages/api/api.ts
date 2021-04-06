import { ApolloServer } from "apollo-server-micro";
import mongo from "mongoose";

import { schema } from "./graphql/schema";
import resolvers from "./graphql/resolvers/resolvers";
import { CONSTANTS } from "./api-constants";
import { NextApiRequest, NextApiResponse } from "next";

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
});

const main = async () => {
  try {
    await mongo.connect(CONSTANTS.DATABASE_URL, { useUnifiedTopology: true, useNewUrlParser: true });
    console.log("connected to the database..");
  } catch (err) {
    console.log("Can not connect to the database.");
  }
};

export const config = {
  api: {
    bodyParser: false,
  },
};

main();

export default server.createHandler({ path: "/api/api" });
