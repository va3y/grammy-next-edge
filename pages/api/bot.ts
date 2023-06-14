import { NextResponse } from "next/server";

export const runtime = "edge";

export default async function handler() {
	console.log(module); // OK
	console.log(module.exports); // OK

	console.log(exports); // ReferenceError: exports is not defined

	return new NextResponse("", { status: 200 });
}
