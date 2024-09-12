"use server";

import {actionClient} from "@/lib/safe-action";
import {LoginSchema} from "@/types/login-schema";
import db from "../db";
import {signIn} from "../auth";
import {redirect} from "next/navigation";
import {revalidatePath} from "next/cache";
import {AuthError} from "next-auth";
import {User} from "@/lib/models";

export const LoginAccount = actionClient
  .schema(LoginSchema)
  .action(async ({parsedInput: {email, password}}) => {
    try {
      await db();
      const existingUser = await User.findOne({
        email: email,
      });

      if (existingUser?.email !== email) {
        return {error: "Email not found"};
      }

      //CHECK IF THE USER'S ACCOUNT IS APPROVED BY AN ADMIN
      // if(!existingUser.isApproved) {
      //   return {error: "Must get approved by an admin"}
      // }

      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (result?.error) {
        return {error: result.error};
      }
      if (existingUser.image === undefined) {
        return redirect("/onboarding");
      } else {
        return redirect("/");
      }
    } catch (error) {
      if (error instanceof AuthError) {
        switch (error.type) {
          case "CredentialsSignin":
            return {error: "Email or Password Incorrect"};
          case "AccessDenied":
            return {error: error.message};
        }
      }
      throw error;
    }
  });

revalidatePath("/");
