import { NextResponse } from "next/server";
import type { Document } from "mongodb";

import { connectToDatabase } from "@/lib/mongodb";
import { LineGraphData } from '@/types';
import { teamColors } from '@/utils/team_colors';


export async function GET() {
    // this function gets goals scored and conceded by the premier league big six
    const client = await connectToDatabase()
    const db = client.db("premier_league_2023")

    try {
        const bigSixGDDocs: Document[] = await await db
        .collection("teams")
        .find({ "name": { "$in": Object.keys(teamColors) } })
        .project({ "name": 1, "goal_diff": 1, "_id": 0 })
        .toArray()

            const teams: LineGraphData[] = bigSixGDDocs.map((document: Document) => {
                return ({
                    name: document.name,
                    data: document.goal_diff.map((gd: number, index: number) => ({
                        match: index + 1,
                        value: gd
                    }))
                })
            })
    
            return NextResponse.json(teams)
    } catch (error) {
        return String(error)
    }
}