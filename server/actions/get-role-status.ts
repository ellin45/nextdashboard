"use server";

import { User } from "@/lib/models";
import {auth} from "../auth";
import db from "../db"

export const getRoleStatus = async()=>{
    const session = await auth();
    if(!session || !session.user?.email){
        throw new Error("No Session or no email found")
    }
    await db();
    const user = await User.findOne(
        { email: session.user.email }, 
        { isAdmin: 1 } 
      );

      return user?.isAdmin
}
