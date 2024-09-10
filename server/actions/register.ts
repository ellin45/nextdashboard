"use server";

import {actionClient} from "@/lib/safe-action";
import {RegisterSchema} from "@/types/register-schema";
import bcrypt from "bcrypt";
import connectDB from "../db";
import {User} from "@/lib/models"; // 모델을 제대로 import 해야 함
import {revalidatePath} from "next/cache";
import z from "zod";

// actionClient를 사용할 때 두 번째 인자에 실행할 로직을 전달
export const RegisterAccount = actionClient(RegisterSchema, async (data) => {
  // Zod 스키마를 사용하여 입력값 검증
  const parsedInput = RegisterSchema.safeParse(data);

  if (!parsedInput.success) {
    return {error: "Invalid input"};
  }

  const {email, password, name} = parsedInput.data;

  // MongoDB 연결
  await connectDB();

  // 비밀번호 해시화
  const userPassword = await bcrypt.hash(password, 10);

  // 이메일로 기존 사용자 검색
  const existingUser = await User.findOne({email});

  if (existingUser) {
    return {error: "Email already in use!"};
  }

  // 새 사용자 생성
  const newUser = new User({
    username: name,
    name: name,
    email: email,
    hashedPassword: userPassword,
  });

  await newUser.save();

  // 캐시 경로 재검증
  revalidatePath("/");

  return {success: true};
});
