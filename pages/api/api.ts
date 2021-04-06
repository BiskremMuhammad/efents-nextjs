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
  mongo.connect(
    CONSTANTS.DATABASE_URL,
    {
      useCreateIndex: true,
      useFindAndModify: false,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (err) => {
      if (err) throw err;
      console.log("DB connected");
    },
  );
}

export const config = {
  api: {
    bodyParser: false,
  },
};

main();

export default server.createHandler({ path: "/api/api" });
