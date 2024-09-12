"use server";

import {actionClient} from "@/lib/safe-action";
import {RegisterSchema} from "@/types/register-schema";
import bcrypt from "bcrypt";
import {revalidatePath} from "next/cache";
import {User} from "@/lib/models"; // User 모델 불러오기
import db from "../db"; // db 연결

export const RegisterAccount = actionClient
  .schema(RegisterSchema)
  .action(async ({parsedInput: {email, password, name}}) => {
    console.log("Parsed Input:", {email, password, name});

    // DB 연결
    await db();

    const userPassword = await bcrypt.hash(password, 10);

    // User 모델을 통해서 데이터베이스에서 찾기
    const existingUser = await User.findOne({email});

    if (existingUser) {
      return {error: "Email already in use!"};
    }

    // 새로운 사용자 생성
    await User.create({
      username: name,
      name: name,
      email: email,
      hashedPassword: userPassword,
    });
    revalidatePath("/");
    
  });
