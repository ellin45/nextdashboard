import NextAuth from "next-auth";
import {MongoDBAdapter} from "@auth/mongodb-adapter";
import Credentials from "next-auth/providers/credentials";
import {LoginSchema} from "@/types/login-schema";
import bcrypt from "bcrypt";
import {User} from "@/lib/models";
import db from "./db";

export const {handlers, auth, signIn, signOut} = NextAuth({
  adapter: MongoDBAdapter(db as any),
  providers: [
    Credentials({
      async authorize(credentials) {
        const validatedFields = LoginSchema.safeParse(credentials);
        if (!validatedFields.success) {
          return null;
        }

        // Destructure the validated data
        const {email, password} = validatedFields.data;

        // Find the user in the database
        const user = await User.findOne({email: email});
        if (!user || !user.hashedPassword) return null;

        const passwordMatch = await bcrypt.compare(
          password,
          user.hashedPassword
        );
        if (passwordMatch) {
          return user;
        }

        return null;
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
});
