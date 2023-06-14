// pages/api/bot.ts
import { Bot } from "grammy/web";
import { NextResponse } from "next/server";

export const runtime = "edge";

export default async function handler() {
	new Bot("<token>");

	return new NextResponse("Success", { status: 200 });
}
