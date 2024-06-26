import db from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const { userId } = auth();
        const body = await req.json();

        const { name } = body;

        if (!userId) {
            return new NextResponse("Unauthorized", { status: 401 });
        }

        if (!name) {
            return new NextResponse("Need to input Store Name", { status: 400 });
        }

        const store = await db.store.create({
            data: {
                name,
                userId,
            },
        });

        return new NextResponse(JSON.stringify(store), { status: 201, headers: { 'Content-Type': 'application/json' } });
    } catch (error) {
        console.log("[STORE_POST]", error);
        return new NextResponse("Internal Error", { status: 500 });
    }
}
