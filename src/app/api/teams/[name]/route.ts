import type { Document } from "mongodb";
import { NextResponse } from "next/server";

import { connectToDatabase } from "@/lib/mongodb";

import { TeamComplete } from "@/types";

export async function GET(request: Request, { params }: { params: { name: string } }) {
    // this function returns details of a team

    const teamName: string = params.name.split('_').join(' ');

    const client = await connectToDatabase()
    const db = client.db("premier_league_2023")

    try {
        const teamDocs: Document[] = await db
            .collection("teams")
            .find({ name: teamName })
            .project({ "_id": 0 })
            .toArray()
            
        return NextResponse.json(teamDocs[0] as TeamComplete)
    }
    catch (e) {
        return String(e)
    }
}
