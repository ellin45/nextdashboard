import NextAuth from "next-auth";
import {MongoDBAdapter} from "@auth/mongodb-adapter";
import db from "@/server/db";

export const {handlers, auth, signIn, signOut} = NextAuth({
  adapter: MongoDBAdapter(db),
  providers: [],
});
