/**
 * @author Muhammad Omran
 * @date 06-04-2021
 * @description Server Project Start Point
 */

import dotenv from "dotenv";
import { ApolloServer } from "apollo-server-micro";
import mongo from "mongoose";

import { schema } from "./graphql/schema";
import resolvers from "./graphql/resolvers/resolvers";
import { NetWorkContext } from "./graphql/resolvers/network-context";
import { serialize } from "cookie";

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
  context: ({ req, res }): NetWorkContext => ({ req, res }),
  playground: {
    settings: {
      "request.credentials": "include",
    },
  },
});

dotenv.config({
  path: `${__dirname}/.env${
    process.env.NODE_ENV ? "." + process.env.NODE_ENV : ""
  }`,
});

const main = async () => {
  try {
    await connectToDB();
  } catch (err) {
    console.log("Can not connect to the database.");
  }
};

async function connectToDB() {
  if (mongo.connection.readyState === 1) {
    console.log("already connected");
    return;
  }
  const DB_CONNECTION: string = process.env.MONGOATLAS_DB_CONNECTION || "";
  mongo.connect(
    DB_CONNECTION,
    {
      useCreateIndex: true,
      useFindAndModify: false,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (err) => {
      if (err) throw err;
      console.log("DB connected");
    }
  );
}

export const config = {
  api: {
    bodyParser: false,
  },
};

main();

export default server.createHandler({ path: "/api/api" });
