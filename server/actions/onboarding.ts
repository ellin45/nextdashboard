"use server";
import {OnboardingSchema} from "@/types/onboarding-schema";
import {actionClient} from "@/lib/safe-action";
import db from "../db";
import {revalidatePath} from "next/cache";
import {auth} from "../auth";
import {redirect} from "next/navigation";
import {User} from "@/lib/models";

export const onboarding = actionClient
  .schema(OnboardingSchema)
  .action(async ({parsedInput: {image, location}}) => {
    const user = await auth();
    if (!user) {
      redirect("/login");
    }
    if (!image.trim()) {
      return {error: "Must Upload an image"};
    }
    await db();
    await User.updateOne(
      {email: user.user?.email as string}, // Filter by email
      {$set: {image, location}} // Update the image and location fields
    );
  });
